// src/services/AuthService.ts
// → OVAJ fajl MORA postojati samo jednom u projektu

export interface AuthUser {
  fullName: string;
  email: string;
}

// koristimo jedinstveno ime ključa da izbegnemo sudare
const AUTH_SESSION_STORAGE_KEY = "auth.session";

export function authStartSession(user: AuthUser, ttlMs: number) {
  const session = { user, expiresAt: Date.now() + ttlMs };
  localStorage.setItem(AUTH_SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function authEndSession() {
  localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
}

export function authGetSession():
  | { user: AuthUser; expiresAt: number }
  | null {
  const raw = localStorage.getItem(AUTH_SESSION_STORAGE_KEY);
  if (!raw) return null;
  try {
    const s = JSON.parse(raw) as { user: AuthUser; expiresAt: number };
    if (Date.now() > s.expiresAt) {
      localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
      return null;
    }
    return s;
  } catch {
    localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
    return null;
  }
}
