import { IProperty } from "../modeli/INekretnina";
import { Link } from "react-router-dom";

type Props = { data: IProperty };

export default function PropertyCard({ data }: Props) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="ratio ratio-4x3 bg-light">
        <div className="d-flex align-items-center justify-content-center text-muted">
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title mb-1">{data.title}</h5>
        <p className="card-text text-muted small mb-2">
          {data.city} · {data.area} m² {data.floor ? `· ${data.floor}. sprat` : ""}
        </p>
        <p className="fw-semibold mb-3">€ {data.price.toLocaleString()}</p>
        <div className="d-flex gap-2">
          <Link className="btn btn-outline-primary btn-sm" to={`/nekretnine/${data.id}`}>Detalji</Link>
          <button className="btn btn-primary btn-sm" onClick={() => alert("Sačuvano (demo)")}>Sačuvaj</button>
        </div>
      </div>
    </div>
  );
}
