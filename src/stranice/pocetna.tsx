import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PropertyService } from "../servisi/NekretnineServis";
import { IProperty } from "../modeli/INekretnina";
import PropertyCard from "../komponente/poljenekretnine";

export default function HomePage() {
  const [properties, setProperties] = useState<IProperty[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProperties(PropertyService.demo());
  }, []);

  return (
    <>
      {/* HERO 1:1 logika iz makete */}
      <section className="hero-landing">
        <div className="container hero-inner">
          <h1 className="display-4 display-md-3 hero-title mb-3">
            Pronađite svoj savršen dom — brzo, lako i pouzdano
          </h1>
          <p className="lead hero-subtitle mb-4">
            Pregledajte, rezervišite ili iznajmite nekretninu iz udobnosti svog doma.
          </p>
          <button className="btn btn-hero"
                  onClick={() => navigate("/nekretnine")}>
            Pogledajte ponudu
          </button>
        </div>
      </section>

      {/* ISTAKNUTE NEKRETNINE ispod hero-a (ostaje kao pre) */}
      <section>
        <div className="container py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h4 fw-bold mb-0">Istaknute nekretnine</h2>
            <Link to="/nekretnine" className="btn btn-outline-primary btn-sm">Prikaži sve</Link>
          </div>
          <div className="row g-4">
            {properties.map((p) => (
              <div className="col-12 col-sm-6 col-lg-4" key={p.id}>
                <PropertyCard data={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
