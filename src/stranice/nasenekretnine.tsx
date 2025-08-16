import { useEffect, useState } from "react";
import { IProperty } from "../modeli/INekretnina";
import { PropertyService } from "../servisi/NekretnineServis";
import { Link } from "react-router-dom";

export default function ListingsPage() {
  const [items, setItems] = useState<IProperty[]>([]);

  useEffect(() => {
    PropertyService.list().then(setItems);
  }, []);

  return (
    <div className="bg-cream">
      <section className="container section">
        <h1 className="h4 fw-bold mb-3">Naše nekretnine</h1>
        <div className="row g-3 g-md-4">
          {items.map(p => (
            <div className="col-sm-6 col-lg-4" key={p.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={p.images[0]}
                  className="card-img-top"
                  alt={p.title}
                  style={{ aspectRatio: "4/3", objectFit: "cover" }}
                />
                <div className="card-body">
                  <div className="small text-muted mb-1">{p.city}</div>
                  <h6 className="card-title mb-2">{p.title}</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">€{p.price} / mes</span>
                    <Link to={`/nekretnine/${p.id}`} className="btn btn-outline-primary btn-sm">
                      Pogledaj
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
