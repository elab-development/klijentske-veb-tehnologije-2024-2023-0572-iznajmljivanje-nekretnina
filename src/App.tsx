import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./komponente/navbar";
import HomePage from "./stranice/pocetna";
import ListingsPage from "./stranice/nasenekretnine";
import PropertyDetailsPage from "./stranice/detaljinekretnine";
import AboutPage from "./stranice/onama";
import ContactPage from "./stranice/kontaktirajtenas";
import LoginPage from "./stranice/prijava";
import RegisterPage from "./stranice/registracija";
import ProfilePage from "./stranice/profilkorisnika";


export default function App() {
  return (
    <>
      <NavBar />  {/* ← MORA da bude ovde, izvan <Routes> */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nekretnine" element={<ListingsPage />} />
          <Route path="/nekretnine/:id" element={<PropertyDetailsPage />} />
          <Route path="/o-nama" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/prijava" element={<LoginPage />} />
          <Route path="/registracija" element={<RegisterPage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="border-top">
        <div className="container py-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="text-muted small">© {new Date().getFullYear()} KrovNadGlavom</div>
          <div className="small">
            <a href="#/" className="text-decoration-none me-3" onClick={(e)=>e.preventDefault()}>Uslovi korišćenja</a>
            <a href="#/" className="text-decoration-none" onClick={(e)=>e.preventDefault()}>Politika privatnosti</a>
          </div>
        </div>
      </footer>
    </>
  );
}
