// src/stranice/pocetna.tsx
import { useEffect, useState } from "react";
import type { IProperty } from "../modeli/INekretnina";          // prilagodi putanju
import { PropertyService } from "../servisi/NekretnineServis";

export default function Pocetna() {
  const [featured, setFeatured] = useState<IProperty[]>([]);

  useEffect(() => {
    PropertyService.featured(3).then(setFeatured).catch(console.error);
  }, []);

  return (
    <section className="container py-4">
      <h1 className="h4 mb-3">Istaknute nekretnine</h1>
      <div className="row g-3">
        {featured.map(p => (
          <div className="col-sm-6 col-lg-4" key={p.id}>
            <div className="card h-100">
              {p.images?.[0] ? (
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="card-img-top"
                  style={{ aspectRatio: "4/3", objectFit: "cover" }}
                />
              ) : (
                <div className="ratio ratio-4x3 bg-light d-flex align-items-center justify-content-center text-muted">
                  Bez slike
                </div>
              )}
              <div className="card-body">
                <div className="small text-muted">{p.city}</div>
                <h6 className="mb-2">{p.title}</h6>
                <strong>€{p.price} / mes</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
