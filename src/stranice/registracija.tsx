import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StorageService } from "../servisi/SkladisteServis";


export default function RegisterPage() {
  const navigate = useNavigate();
  const logoUrl = process.env.PUBLIC_URL + "/logo.svg"; // zameni importom ako želiš

  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("fullName") || "");
    const email = String(fd.get("email") || "");
    const pass = String(fd.get("password") || "");
    const confirm = String(fd.get("confirm") || "");

    StorageService.setLocal("auth.user", { fullName: name, email });
    navigate("/profil");


    if (!agree) {
      alert("Morate prihvatiti Uslove korišćenja i Politiku privatnosti.");
      return;
    }
    if (pass !== confirm) {
      alert("Lozinke se ne poklapaju.");
      return;
    }

    alert(`Registracija (demo):\nIme: ${name}\nEmail: ${email}`);
    navigate("/prijava");
  };

  return (
    <div className="register-page bg-cream">
      <section className="container pt-3 pb-4">

        {/* GRID: leva forma, desna slika */}
        <div className="row g-4">
          {/* LEVO */}
          <div className="col-lg-5">
            <div className="reg-card p-3 p-md-4">
              <h1 className="h3 fw-bold mb-1">Kreirajte nalog</h1>
              <p className="text-muted mb-4">
                Za pristup ponudama, rezervacijama i omiljenim nekretninama.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Ime i prezime</label>
                  <input
                    name="fullName"
                    className="form-control auth-input"
                    placeholder="Petar Petrović"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control auth-input"
                    placeholder="primer@gmail.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Lozinka</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control auth-input"
                    placeholder="••••••••••••••"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Potvrdite lozinku</label>
                  <input
                    name="confirm"
                    type="password"
                    className="form-control auth-input"
                    placeholder="••••••••••••••"
                    required
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agree"
                    checked={agree}
                    onChange={(e) => setAgree(e.currentTarget.checked)}
                  />
                  <label className="form-check-label" htmlFor="agree">
                    Prihvatam{" "}
                    <a href="#/" onClick={(e)=>e.preventDefault()}>Uslove korišćenja</a> i{" "}
                    <a href="#/" onClick={(e)=>e.preventDefault()}>Politiku privatnosti</a>.
                  </label>
                </div>

                <button type="submit" className="btn auth-btn w-100">
                  Registrujte se
                </button>
              </form>

              <div className="mt-4">
                <span className="text-muted">Već imate nalog? </span>
                <Link to="/prijava" className="link-dark fw-semibold">Prijavite se</Link>
              </div>

              <div className="text-center small text-muted mt-4">
                © {new Date().getFullYear()} <span className="fw-semibold">KrovNadGlavom</span>. Sva prava zadržana.
              </div>
            </div>
          </div>

          {/* DESNO – hero sa caption-om */}
          <div className="col-lg-7">
            <div className="reg-hero">
              <div className="reg-hero-caption">
                <h3 className="h4 fw-bold mb-2">KrovNadGlavom</h3>
                <p className="mb-0">
                  Pronađite, rezervišite ili iznajmite — sve na jednom mestu.
                  Vaš put do savršenog doma počinje ovde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
