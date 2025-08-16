import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  authGetSession,
  authStartSession,
  authEndSession,
  type AuthUser,
} from "../servisi/AutentifikacioniServis";

type AuthContextValue = {
  user: AuthUser | null;
  signIn: (u: AuthUser, ttlMs?: number) => void; // ttlMs – koliko traje sesija
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const expiryTimer = useRef<number | null>(null);

  // učitaj sesiju iz localStorage-a pri mount-u
  useEffect(() => {
    const s = authGetSession();
    if (s) {
      setUser(s.user);
      const msLeft = s.expiresAt - Date.now();
      // postavi tajmer da automatski istekne
      expiryTimer.current = window.setTimeout(() => {
        authEndSession();
        setUser(null);
      }, Math.max(msLeft, 0));
    }
    return () => {
      if (expiryTimer.current) window.clearTimeout(expiryTimer.current);
    };
  }, []);

  const signIn = (u: AuthUser, ttlMs = 1000 * 60 * 60 * 24 * 7) => {
    // default 7 dana
    authStartSession(u, ttlMs);
    setUser(u);
    if (expiryTimer.current) window.clearTimeout(expiryTimer.current);
    expiryTimer.current = window.setTimeout(() => {
      authEndSession();
      setUser(null);
    }, ttlMs);
  };

  const signOut = () => {
    if (expiryTimer.current) window.clearTimeout(expiryTimer.current);
    authEndSession();
    setUser(null);
  };

  const value = useMemo(() => ({ user, signIn, signOut }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth mora biti korišćen unutar <AuthProvider>.");
  return ctx;
}
