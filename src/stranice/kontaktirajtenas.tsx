export default function ContactPage() {
  return (
    <div className="container py-5">
      <h1 className="h3 mb-3">Kontakt</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Ime i prezime</label>
          <input className="form-control" placeholder="Vaše ime" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="email@domen.com" />
        </div>
        <div className="col-12">
          <label className="form-label">Poruka</label>
          <textarea className="form-control" rows={4} placeholder="Napišite poruku..." />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="button">Pošalji</button>
        </div>
      </form>
    </div>
  );
}
