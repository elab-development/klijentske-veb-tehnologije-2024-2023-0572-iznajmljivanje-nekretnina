import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";   // ⬅️ dodaj ovo
import { PropertyService } from "../servisi/NekretnineServis";
import { IProperty } from "../modeli/INekretnina";
import PropertyCard from "../komponente/poljenekretnine";



export default function Pocetna() {
  const [featured, setFeatured] = useState<IProperty[]>([]);

  useEffect(() => {
    PropertyService.featured(3).then(setFeatured).catch(console.error);
  }, []);
  const onContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    alert(
      `Poslato (demo):\nIme: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPoruka: ${fd.get("message")}`
    );
    e.currentTarget.reset();
  };

  return (
    <>
      {/* HERO */}
      <section className="hero-landing">
        <div className="container hero-inner">
          <h1 className="display-4 hero-title mb-3">
            Pronađite svoj savršen dom — brzo, lako i pouzdano
          </h1>
          <p className="lead hero-subtitle mb-4">
            Pregledajte, rezervišite ili iznajmite nekretninu iz udobnosti svog doma.
          </p>
            <Link className="btn btn-hero" to="/nekretnine">Pogledajte ponudu</Link>
        </div>
      </section>

      {/* ISTAKNUTE – tačno 3 kartice */}
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


      {/* O NAMA – slika levo, tekst desno + dugme */}
      <section className="section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              {/* zameni /about.jpg svojom slikom u public/ ili koristi src/assets i relativnu putanju */}
              <img src="https://picsum.photos/id/378/1200/800" alt="Predaja ključeva" className="about-img" />
            </div>
            <div className="col-lg-6">
              <h3 className="h4 fw-bold mb-3">O nama</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                sollicitudin lacus, ut interdum tellus elit sed risus. Morbi convallis convallis diam.
              </p>
              <p className="text-muted">
                Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam
                in elementum tellus.
              </p>
              <Link to="/o-nama" className="btn btn-outline-primary">
                Pročitajte više o nama
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKTIRAJTE NAS – tamno-plavi panel u dnu */}
      <section className="section">
        <div className="container">
          <h3 className="h4 fw-bold text-center mb-4">Kontaktirajte nas</h3>

          <div className="contact-panel p-4 p-md-5">
            <form className="row g-3 justify-content-center" onSubmit={onContactSubmit}>
              <div className="col-12 col-md-6">
                <label className="form-label">Ime i prezime</label>
                <input name="name" className="form-control" placeholder="Vaše ime i prezime" required />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Email</label>
                <input name="email" type="email" className="form-control" placeholder="email@domen.com" required />
              </div>
              <div className="col-12">
                <label className="form-label">Poruka</label>
                <textarea name="message" className="form-control" rows={4} placeholder="Napišite poruku..." required />
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-send px-4" type="submit">Pošalji</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
