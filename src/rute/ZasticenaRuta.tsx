// src/routes/ProtectedRoute.tsx
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../kontekst/AutentifikacioniKontekst";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const loc = useLocation();

  if (!user) {
    return <Navigate to="/prijava" replace state={{ from: loc }} />;
  }
  return <>{children}</>;
}
