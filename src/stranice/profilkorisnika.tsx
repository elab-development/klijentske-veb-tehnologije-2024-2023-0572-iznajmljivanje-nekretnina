import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StorageService } from "../servisi/SkladisteServis";

type Profile = {
  fullName: string;
  phone?: string;
  email: string;
  city?: string;
  memberSince?: number;
};
type Fav = { id: string; title: string; subtitle: string; price: string };

const STORAGE_KEY = "user.profile";
const FAV_KEY = "user.favorites";
const NOTIF_KEY = "user.notifications";

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile>({
    fullName: "Petar Petrović",
    phone: "",
    email: "petar@example.com",
    city: "Zemun",
    memberSince: new Date().getFullYear(),
  });

  const [notifs, setNotifs] = useState({
    offers: false,
    messages: false,
    promos: false,
  });

  const [favs, setFavs] = useState<Fav[]>([
    { id: "1", title: "Dvosoban stan, 58m² — Zemun", subtitle: "€780 / mes · Slobodno", price: "" },
    { id: "2", title: "Garsonjera, 32m² — Novi Beograd", subtitle: "€420 / mes · do 1. okt", price: "" },
  ]);

  useEffect(() => {
    setProfile(StorageService.getLocal<Profile>(STORAGE_KEY, profile));
    setNotifs(StorageService.getLocal(NOTIF_KEY, notifs));
    setFavs(StorageService.getLocal(FAV_KEY, favs));
    // sinhronizuj sa „ulogovanim“ ako postoji
    const auth = StorageService.getLocal<Partial<Profile>>("auth.user", {});
    if (auth.email) setProfile(p => ({ ...p, email: auth.email!, fullName: auth.fullName ?? p.fullName }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [form, setForm] = useState(profile);
  useEffect(() => { setForm(profile); }, [profile]);

  const save = () => {
    StorageService.setLocal(STORAGE_KEY, form);
    setProfile(form);
    alert("Podaci sačuvani.");
  };
  const cancel = () => setForm(profile);

  return (
    <div className="profile-page bg-cream">
      <section className="container py-4">

        {/* HEADER */}
        <div className="p-card p-3 mb-3">
          <div className="d-flex align-items-center gap-3">
            <div className="profile-avatar">
              {(profile.fullName?.split(" ").map(s=>s[0]).join("") || "PP").slice(0,2).toUpperCase()}
            </div>
            <div>
              <div className="fw-bold"> {profile.fullName || "Korisnik"} </div>
              <div className="profile-meta">
                Član od {profile.memberSince ?? new Date().getFullYear()} · {profile.city ?? "—"}
              </div>
            </div>
          </div>
        </div>

        {/* INFO BLOKOVI */}
        <div className="row g-3 mb-3">
          {/* Osnovni podaci */}
          <div className="col-lg-6">
            <div className="p-card p-3 h-100">
              <h6 className="fw-bold mb-3">Osnovni podaci</h6>

              <div className="row g-2 mb-2">
                <div className="col">
                  <label className="form-label small">Ime i prezime</label>
                  <input className="form-control" value={form.fullName}
                         onChange={e=>setForm(f=>({...f, fullName:e.target.value}))}/>
                </div>
                <div className="col">
                  <label className="form-label small">Broj telefona</label>
                  <input className="form-control" value={form.phone || ""}
                         onChange={e=>setForm(f=>({...f, phone:e.target.value}))}/>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small">Email</label>
                <input type="email" className="form-control" value={form.email}
                       onChange={e=>setForm(f=>({...f, email:e.target.value}))}/>
              </div>

              <div className="d-flex gap-2">
                <button className="btn btn-primary btn-sm" onClick={save}>Sačuvaj</button>
                <button className="btn btn-outline-secondary btn-sm" onClick={cancel}>Otkaži</button>
              </div>
            </div>
          </div>

          {/* Preferencije */}
          <div className="col-lg-6">
            <div className="p-card p-3 h-100">
              <h6 className="fw-bold mb-3">Preferencije</h6>
              <div className="small">
                <div className="mb-2"><strong>Omiljene lokacije</strong><br/>Zemun</div>
                <div className="mb-2"><strong>Budžet</strong><br/>€400 – €800 / mes</div>
                <div><strong>Tip</strong><br/>Stan · 1–2 sobe</div>
              </div>
            </div>
          </div>
        </div>

        {/* OMILJENE NEKRETNINE */}
        <div className="p-card p-3 mb-3">
          <h6 className="fw-bold mb-3">Omiljene nekretnine</h6>
          <div className="d-flex flex-column gap-2">
            {favs.map(f => (
              <div className="fav-item" key={f.id}>
                <img className="fav-thumb" src={process.env.PUBLIC_URL + "/thumb.jpg"} alt="" />
                <div className="flex-grow-1">
                  <div className="small">{f.title}</div>
                  <div className="text-muted small">{f.subtitle}</div>
                </div>
                <Link to={`/nekretnine/${f.id}`} className="btn btn-outline-primary btn-sm btn-link-sm">
                  Pogledaj
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* OBAVEŠTENJA */}
        <div className="p-card p-3">
          <h6 className="fw-bold mb-3">Obaveštenja</h6>
          <div className="form-check small">
            <input id="n1" className="form-check-input" type="checkbox"
                   checked={notifs.offers}
                   onChange={e=>{ const v={...notifs,offers:e.target.checked}; setNotifs(v); StorageService.setLocal(NOTIF_KEY,v); }}/>
            <label htmlFor="n1" className="form-check-label">Nove ponude</label>
          </div>
          <div className="form-check small">
            <input id="n2" className="form-check-input" type="checkbox"
                   checked={notifs.messages}
                   onChange={e=>{ const v={...notifs,messages:e.target.checked}; setNotifs(v); StorageService.setLocal(NOTIF_KEY,v); }}/>
            <label htmlFor="n2" className="form-check-label">Poruke vlasnika</label>
          </div>
          <div className="form-check small">
            <input id="n3" className="form-check-input" type="checkbox"
                   checked={notifs.promos}
                   onChange={e=>{ const v={...notifs,promos:e.target.checked}; setNotifs(v); StorageService.setLocal(NOTIF_KEY,v); }}/>
            <label htmlFor="n3" className="form-check-label">Promo emailovi</label>
          </div>
        </div>

      </section>
    </div>
  );
}
