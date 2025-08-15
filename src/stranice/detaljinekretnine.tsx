import { useParams } from "react-router-dom";

export default function PropertyDetailsPage() {
  const { id } = useParams();
  return (
    <div className="container py-5">
      <h1 className="h3 mb-3">Detalji nekretnine</h1>
      <p className="text-muted">ID: {id}</p>
      <div className="ratio ratio-16x9 bg-light rounded mb-3" />
      <p>Opis nekretnine… (demo sadržaj)</p>
    </div>
  );
}
