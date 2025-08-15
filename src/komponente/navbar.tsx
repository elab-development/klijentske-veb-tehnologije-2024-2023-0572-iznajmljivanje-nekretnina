import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container">

        {}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src="slike/logo.jpg" alt="KrovNadGlavom" height={28} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* meni centriran */}
        <ul className="navbar-nav gap-lg-4 mx-auto">
          <li className="nav-item"><NavLink end className="nav-link" to="/">Početna</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/nekretnine">Naše nekretnine</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/o-nama">O nama</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/kontakt">Kontakt</NavLink></li>
        </ul>

          {/* ikonica profila desno (inline SVG, bez dodatnih libova) */}
          <div className="d-flex">
            <Link to="/prijava" className="btn btn-link p-0 ms-lg-2" aria-label="Profil">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" role="img"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5.5V22h18v-2.5C21 16.5 17 14 12 14Z"
                      fill="#0B3A82"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
