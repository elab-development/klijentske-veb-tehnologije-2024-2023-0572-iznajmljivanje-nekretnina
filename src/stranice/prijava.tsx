export default function LoginPage() {
  return (
    <div className="container py-5" style={{ maxWidth: 520 }}>
      <h1 className="h3 mb-3">Prijava</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="email@domen.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Lozinka</label>
          <input type="password" className="form-control" placeholder="••••••••" />
        </div>
        <button className="btn btn-primary" type="button">Uloguj se</button>
      </form>
    </div>
  );
}
