export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* HERO-NASLOV */}
      <section className="section pt-4">
        <div className="container">
          <div className="k-card-header p-4 p-md-5 mb-4 text-center">
            <h1 className="h3 about-title mb-2">Olakšavamo vam put do pravog doma</h1>
            <p className="about-lead mb-0">
              Jednostavna pretraga, jasne informacije i brza komunikacija sa vlasnicima — bez stresa i skrivenih troškova.
            </p>
          </div>

          {/* KO SMO MI / ŠTA RADIMO */}
          <div className="row g-3 g-md-4 mb-3">
            <div className="col-lg-6">
              <div className="k-card p-4 h-100">
                <h2 className="h5 fw-bold mb-3">Ko smo mi</h2>
                <p>
                  <strong>KrovNadGlavom</strong> je web platforma namenjena svima koji traže stan, kuću,
                  poslovni prostor ili vikendicu. Gradimo iskustvo koje je čisto, pregledno i pouzdano,
                  sa fokusom na tačnost podataka i lakoću korišćenja.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="k-card p-4 h-100">
                <h2 className="h5 fw-bold mb-3">Šta radimo</h2>
                <p>
                  Omogućavamo pretragu uz filtere, detaljne stranice sa fotografijama, opisima,
                  cenama i dostupnošću, čuvanje omiljenih i slanje upita direktno vlasnicima —
                  sve na jednom mestu.
                </p>
              </div>
            </div>
          </div>

          {/* 3 BENEFITA */}
          <div className="row g-3 g-md-4 mb-3">
            <div className="col-lg-4">
              <div className="k-card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">Transparentnost</h3>
                <p className="mb-0 about-lead">
                  Jasne cene i tačne informacije bez skrivenih troškova.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="k-card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">Sigurnost</h3>
                <p className="mb-0 about-lead">
                  Provereni oglasi i zaštita podataka korisnika.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="k-card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">Jednostavnost</h3>
                <p className="mb-0 about-lead">
                  Minimalistički dizajn za brzo snalaženje na svim uređajima.
                </p>
              </div>
            </div>
          </div>

          {/* STATISTIKA */}
          <div className="row g-3 g-md-4">
            <div className="col-lg-4">
              <div className="k-card p-4 text-center">
                <div className="stat-number mb-1">1000+</div>
                <div className="stat-label">Zadovoljnih korisnika</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="k-card p-4 text-center">
                <div className="stat-number mb-1">50+</div>
                <div className="stat-label">Objekata u ponudi</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="k-card p-4 text-center">
                <div className="stat-number mb-1">0%</div>
                <div className="stat-label">Skrivenih troškova</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
