import { FormEvent } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const logoUrl = process.env.PUBLIC_URL + "/logo.svg"; // zameni ako koristiš import

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    alert(`Prijava (demo):\nEmail: ${fd.get("email")}\nLozinka: ${fd.get("password")}`);
  };

  return (
    <div className="auth-page bg-cream">
      <section className="container pt-3">

        {/* centrirana forma */}
        <div className="auth-wrap">
          <h1 className="display-5 fw-bold text-center mb-2">Prijavite se</h1>
          <p className="text-center text-muted mb-4">
            Pristupite svom nalogu i nastavite pretragu savršenog doma.
          </p>

          <form onSubmit={handleSubmit}>
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

            <div className="mb-4">
              <label className="form-label">Lozinka</label>
              <input
                name="password"
                type="password"
                className="form-control auth-input"
                placeholder="••••••••••••••"
                required
              />
            </div>

            <button type="submit" className="btn w-100 auth-btn">Prijavite se</button>
          </form>

          <div className="mt-4">
            <span className="text-muted">Nemate nalog? </span>
            <Link to="/registracija" className="link-dark fw-semibold">Registrujte se</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
