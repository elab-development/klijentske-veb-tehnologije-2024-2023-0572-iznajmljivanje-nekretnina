export default function RegisterPage() {
  return (
    <div className="container py-5" style={{ maxWidth: 520 }}>
      <h1 className="h3 mb-3">Registracija</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Ime i prezime</label>
          <input className="form-control" placeholder="Vaše ime" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="email@domen.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Lozinka</label>
          <input type="password" className="form-control" placeholder="••••••••" />
        </div>
        <button className="btn btn-primary" type="button">Kreiraj nalog</button>
      </form>
    </div>
  );
}
