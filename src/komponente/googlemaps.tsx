// src/components/GoogleMap.tsx
import React from "react";

type Props = {
  /** Adresa ili upit (npr. "Bulevar kralja Aleksandra 73, Beograd") */
  query?: string;
  /** Koordinate (ako ih imaš u modelu) – prednost imaju nad query */
  lat?: number;
  lng?: number;
  /** Zoom nivo: 0-21 (default 14) */
  zoom?: number;
  /** Visina u px (default 260) */
  height?: number;
  className?: string;
};

export default function GoogleMap({
  query,
  lat,
  lng,
  zoom = 14,
  height = 260,
  className,
}: Props) {
  // Ako su date koordinate – koristimo njih
  let src = "";
  if (typeof lat === "number" && typeof lng === "number") {
    src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  } else if (query && query.trim()) {
    src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`;
  }

  if (!src) {
    return (
      <div
        className={`border rounded-3 d-flex align-items-center justify-content-center text-muted ${className || ""}`}
        style={{ height }}
      >
        Nije zadat upit za mapu.
      </div>
    );
  }

  return (
    <div className={`rounded-3 border overflow-hidden ${className || ""}`} style={{ height }}>
      <iframe
        title="Google mapa"
        src={src}
        loading="lazy"
        className="w-100 h-100 border-0"
        referrerPolicy="no-referrer-when-downgrade"
        // allowFullScreen  // možeš uključiti ako želiš fullscreen ikonicu
      />
    </div>
  );
}
