import { FormEvent } from "react";

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    alert(
      `Poslato (demo):\nIme: ${fd.get("name")}\nEmail: ${fd.get("email")}\nTema: ${fd.get("subject")}\nPoruka: ${fd.get("message")}`
    );
    e.currentTarget.reset();
  };

  return (
    <div className="bg-cream">
      <section className="section pt-4">
        <div className="container">

          {/* Naslovna kartica */}
          <div className="k-card-header p-3 p-md-4 mb-4 text-center">
            <h1 className="h4 fw-bold mb-1">Kontaktirajte nas</h1>
            <p className="text-muted mb-0 small">
              Imate pitanja? Pošaljite poruku i odgovorićemo u roku od 24h.
            </p>
          </div>

          <div className="row g-3 g-md-4">
            {/* Leva strana – forma */}
            <div className="col-lg-6">
              <div className="k-card p-3 p-md-4 h-100">
                <h2 className="h6 fw-bold mb-3">Pošaljite poruku</h2>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Ime i prezime</label>
                      <input
                        name="name"
                        className="form-control"
                        placeholder="Petar Petrović"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="primer@gmail.com"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Tema</label>
                      <input
                        name="subject"
                        className="form-control"
                        placeholder="Rezervacija"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Poruka</label>
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Kako možemo pomoći?"
                        rows={5}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <button className="btn btn-kprimary w-100" type="submit">
                        Pošalji
                      </button>
                    </div>

                    <div className="col-12">
                      <div className="contact-note">
                        Možete očekivati odgovor u roku od 24h.
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Desna strana – info + mapa */}
            <div className="col-lg-6">
              <div className="k-card p-3 p-md-4 h-100">
                <h2 className="h6 fw-bold mb-3">Kontakt informacije</h2>

                <div className="mb-2 small"><strong>Email:</strong> &nbsp; podrska@krovnadglavom.com</div>
                <div className="mb-2 small"><strong>Telefon:</strong> &nbsp; +381 11 123 456</div>
                <div className="mb-3 small">
                  <strong>Adresa:</strong> &nbsp; Bulevar kralja Aleksandra 73, Beograd
                </div>

                <div className="small fw-bold mb-2">Lokacija</div>
                <div className="map-placeholder">Mapa</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
