import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { IProperty } from "../modeli/INekretnina";
import { PropertyService } from "../servisi/NekretnineServis";
import FilterBar, { ListingsFilters } from "../komponente/filterbar";

const PER_PAGE = 6;

export default function ListingsPage() {
  const [all, setAll] = useState<IProperty[]>([]);
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState<ListingsFilters>({
    city: "",
    rooms: "",
    min: "",
    max: "",
  });

  useEffect(() => {
    PropertyService.list().then(setAll);
  }, []);

  // jedinstveni gradovi i sobe iz podataka
  const cities = useMemo(
    () => Array.from(new Set(all.map((p) => p.city))).sort(),
    [all]
  );
  const roomsOptions = useMemo(
    () =>
      Array.from(new Set(all.map((p) => p.rooms))).filter(Boolean).sort((a, b) =>
        String(a).localeCompare(String(b), "sr", { numeric: true })
      ),
    [all]
  );

  // filtriranje
  const filtered = useMemo(() => {
    const min = filters.min ? Number(filters.min) : -Infinity;
    const max = filters.max ? Number(filters.max) : Infinity;

    return all.filter((p) => {
      if (filters.city && p.city !== filters.city) return false;
      if (filters.rooms && p.rooms !== filters.rooms) return false;
      if (p.price < min || p.price > max) return false;
      return true;
    });
  }, [all, filters]);

  // kad se filter promeni → vrati na stranicu 1
  useEffect(() => {
    setPage(1);
  }, [filters]);

  // paginacija
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const slice = filtered.slice(start, start + PER_PAGE);

  // kad se smanji broj strana (npr. zbog filtera), a page “iskoči”
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  const onFilterChange = (patch: Partial<ListingsFilters>) =>
    setFilters((f) => ({ ...f, ...patch }));

  const onFilterReset = () =>
    setFilters({ city: "", rooms: "", min: "", max: "" });

  return (
    <div className="bg-cream">
      <section className="container py-3">
        <h1 className="h4 fw-bold mb-3">Naše nekretnine</h1>

        <FilterBar
          cities={cities}
          roomsOptions={roomsOptions as string[]}
          value={filters}
          onChange={onFilterChange}
          onReset={onFilterReset}
        />

        {slice.length === 0 ? (
          <div className="alert alert-warning">
            Nema rezultata za zadate filtere.
          </div>
        ) : (
          <div className="row g-3 g-md-4">
            {slice.map((p) => (
              <div className="col-sm-6 col-lg-4" key={p.id}>
                <div className="card h-100 shadow-sm">
                  {p.images?.[0] ? (
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="card-img-top"
                      style={{ aspectRatio: "4/3", objectFit: "cover" }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://picsum.photos/600/400?blur=2";
                      }}
                    />
                  ) : (
                    <div className="ratio ratio-4x3 bg-light d-flex align-items-center justify-content-center text-muted">
                      Bez slike
                    </div>
                  )}

                  <div className="card-body">
                    <div className="small text-muted mb-1">{p.city}</div>
                    <h6 className="card-title mb-2">{p.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">€{p.price} / mes</span>
                      <Link
                        to={`/nekretnine/${p.id}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Pogledaj
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PAGINACIJA */}
        <nav aria-label="Listings pagination" className="mt-3">
          <ul className="pagination">
            <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                «
              </button>
            </li>

            {Array.from({ length: totalPages }).map((_, i) => {
              const num = i + 1;
              return (
                <li
                  key={num}
                  className={`page-item ${page === num ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => setPage(num)}>
                    {num}
                  </button>
                </li>
              );
            })}

            <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() =>
                  setPage((p) => Math.min(totalPages, p + 1))
                }
              >
                »
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
