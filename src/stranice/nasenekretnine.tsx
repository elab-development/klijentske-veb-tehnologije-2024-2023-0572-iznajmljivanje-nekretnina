import { useEffect, useState } from "react";
import { PropertyService } from "../servisi/NekretnineServis";
import { IProperty } from "../modeli/INekretnina";
import PropertyCard from "../komponente/poljenekretnine";

export default function ListingsPage() {
  const [items, setItems] = useState<IProperty[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    setItems(PropertyService.demo());
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const start = (page - 1) * pageSize;
  const current = items.slice(start, start + pageSize);

  return (
    <div className="container py-5">
      <h1 className="h3 mb-4">Spisak nekretnina</h1>

      <div className="row g-4">
        {current.map(p => (
          <div key={p.id} className="col-12 col-sm-6 col-lg-4">
            <PropertyCard data={p} />
          </div>
        ))}
      </div>

      {/* prosta paginacija (za sad) */}
      <nav className="mt-4">
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(p => Math.max(1, p - 1))}>Prethodna</button>
          </li>
          {Array.from({ length: totalPages }).map((_, i) => (
            <li key={i} className={`page-item ${page === i + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</button>
            </li>
          ))}
          <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => setPage(p => Math.min(totalPages, p + 1))}>Sledeća</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
