import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
// ako već imaš PropertyService/IProperty – možeš da ih koristiš;
// ovo je lokalni tip da se ne sudaramo sa tvojim modelima
type Property = {
  id: string;
  title: string;
  city: string;
  area: number;       // m²
  rooms?: string;     // npr. "2.5"
  floor?: string;     // npr. "3/5"
  heating?: string;   // npr. "CG"
  parking?: string;   // npr. "Zona"
  price: number;      // mesečna ili ukupna
  images?: string[];
  description?: string;
};

const FAV_KEY = "user.favorites";

export default function PropertyDetailsPage() {
  const { id } = useParams<{ id: string }>();

  // DEMO podaci – ako imaš servis, zameni fetch logiku
  const property: Property = useMemo(() => {
    const demo: Property = {
      id: id ?? "1",
      title: "Dvosoban stan, 58m² — Zemun",
      city: "Zemun",
      area: 58,
      rooms: "2.5",
      floor: "3/5",
      heating: "CG",
      parking: "Zona",
      price: 780,
      images: [
        "/apt-1.jpg", "/apt-2.jpg", "/apt-3.jpg", "/apt-4.jpg", "/apt-5.jpg", "/apt-6.jpg",
      ],
      description:
        "Svetao i funkcionalan dvosoban stan u srcu Zemuna. Prostran dnevni boravak sa kuhinjom i trpezarijom, spavaća soba sa plakarom, moderno kupatilo i mali balkon. Zgrada je održavana, ima lift, dvorišnu orijentaciju, kablovsku i brzi internet. U blizini je park i prodavnice kao i više linija javnog saobraćaja.",
    };

    // ako nemaš slike u /public, fallback na „ratio box“
    return demo;
  }, [id]);

  // galerija
  const [current, setCurrent] = useState(0);

  // omiljene (localStorage)
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    try {
      const list: string[] = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
      setIsFav(list.includes(property.id));
    } catch { /* ignore */ }
  }, [property.id]);

  const toggleFav = () => {
    const raw = localStorage.getItem(FAV_KEY);
    const list: string[] = raw ? JSON.parse(raw) : [];
    const i = list.indexOf(property.id);
    if (i >= 0) list.splice(i, 1);
    else list.push(property.id);
    localStorage.setItem(FAV_KEY, JSON.stringify(list));
    setIsFav(!isFav);
  };

  return (
    <div className="bg-cream">
      <section className="container py-3">
        <div className="row g-3 g-lg-4">
          {/* LEVA KOLONA */}
          <div className="col-lg-8">
            {/* Glavna slika */}
            <div className="detail-gallery-main mb-2">
              {property.images?.[current] ? (
                <img
                  src={property.images[current]}
                  alt={property.title}
                  className="w-100"
                  style={{ aspectRatio: "16/9", objectFit: "cover" }}
                />
              ) : (
                <div className="ratio ratio-16x9 bg-light d-flex align-items-center justify-content-center">
                  <span className="text-muted">Slika</span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="d-flex detail-thumbs mb-3">
              {(property.images ?? []).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  onClick={() => setCurrent(i)}
                  className={`detail-thumb ${current === i ? "active" : ""}`}
                  alt={`thumb-${i}`}
                />
              ))}
            </div>

            {/* Naslov + badževi */}
            <div className="aside-card p-3 mb-3">
              <h6 className="fw-bold mb-1">{property.title}</h6>
              <div className="text-muted small mb-2">
                Stanovi u {property.city} · Cena se odnosi na mesečni najam
              </div>

              <div className="d-flex flex-wrap gap-2">
                <span className="badge badge-soft px-3 py-2">Površina {property.area} m²</span>
                <span className="badge badge-soft px-3 py-2">Sobe {property.rooms ?? "—"}</span>
                <span className="badge badge-soft px-3 py-2">Kupatila 1</span>
                <span className="badge badge-soft px-3 py-2">Sprat {property.floor ?? "—"}</span>
                <span className="badge badge-soft px-3 py-2">Grejanje {property.heating ?? "—"}</span>
                <span className="badge badge-soft px-3 py-2">Parking {property.parking ?? "—"}</span>
              </div>
            </div>

            {/* Opis + karakteristike */}
            <div className="aside-card p-3 mb-3">
              <h6 className="fw-bold mb-2">Opis</h6>
              <p className="mb-3">{property.description}</p>

              <div className="row g-2">
                <div className="col-6 col-md-4"><div className="chip w-100 text-center">Klima uređaj</div></div>
                <div className="col-6 col-md-4"><div className="chip w-100 text-center">Brzi internet</div></div>
                <div className="col-6 col-md-4"><div className="chip w-100 text-center">Mašina za sudove</div></div>
                <div className="col-6 col-md-4"><div className="chip w-100 text-center">Veš mašina</div></div>
                <div className="col-6 col-md-4"><div className="chip w-100 text-center">Lift</div></div>
                <div className="col-6 col-md-4"><div className="chip w-100 text-center">Balkon</div></div>
              </div>
            </div>

            {/* Lokacija */}
            <div className="aside-card p-3">
              <h6 className="fw-bold mb-2">Lokacija</h6>
              <div className="map-box">Mapa</div>
              <div className="small text-muted mt-2">{property.city}</div>
            </div>
          </div>

          {/* DESNA KOLONA – cena + upit */}
          <div className="col-lg-4">
            <div className="aside-card p-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="price-lg">€{property.price} / mes</div>
                <span className="badge text-bg-success">Slobodno</span>
              </div>

              <div className="mb-2 small text-muted">Period dostupnosti</div>
              <div className="row g-2 mb-3">
                <div className="col">
                  <input className="form-control form-control-sm" placeholder="Od (npr. 01.10.2025)" />
                </div>
                <div className="col">
                  <input className="form-control form-control-sm" placeholder="Do" />
                </div>
              </div>

              <div className="mb-2 small text-muted">Pošaljite poruku vlasniku</div>
              <textarea className="form-control" rows={5} placeholder="Pitanje / interesovanje..."></textarea>

              <button className="btn btn-primary w-100 mt-3">Pošalji upit</button>
              <button
                className={`btn w-100 mt-2 ${isFav ? "btn-outline-secondary" : "btn-outline-primary"}`}
                onClick={toggleFav}
              >
                {isFav ? "Ukloni iz omiljenih" : "Sačuvaj u omiljene"}
              </button>

              <div className="small text-muted mt-2">
                Napomena: uvek dogovorite obilazak i potpišite ugovor. KrovNadGlavom ne naplaćuje proviziju.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
