import { ChangeEvent } from "react";

export type ListingsFilters = {
  city: string;     // "" = sve
  rooms: string;    // "" = sve
  min: string;      // "" = bez min
  max: string;      // "" = bez max
};

type Props = {
  cities: string[];       // npr. ["Zemun", "Novi Beograd", ...]
  roomsOptions: string[]; // npr. ["0.5","1","1.5","2","2.5","3","4"]
  value: ListingsFilters;
  onChange: (patch: Partial<ListingsFilters>) => void;
  onReset: () => void;
};

export default function FilterBar({
  cities,
  roomsOptions,
  value,
  onChange,
  onReset,
}: Props) {
  const handle = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="filter-bar bg-white border rounded-3 p-3 mb-3">
      <div className="row g-2 align-items-end">
        <div className="col-12 col-sm-6 col-md-3">
          <label className="form-label small">Grad</label>
          <select
            name="city"
            className="form-select"
            value={value.city}
            onChange={handle}
          >
            <option value="">Svi gradovi</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="col-6 col-md-2">
          <label className="form-label small">Sobe</label>
          <select
            name="rooms"
            className="form-select"
            value={value.rooms}
            onChange={handle}
          >
            <option value="">Sve</option>
            {roomsOptions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="col-6 col-md-2">
          <label className="form-label small">Min € / mes</label>
          <input
            name="min"
            type="number"
            inputMode="numeric"
            className="form-control"
            placeholder="min"
            value={value.min}
            onChange={handle}
          />
        </div>

        <div className="col-6 col-md-2">
          <label className="form-label small">Max € / mes</label>
          <input
            name="max"
            type="number"
            inputMode="numeric"
            className="form-control"
            placeholder="max"
            value={value.max}
            onChange={handle}
          />
        </div>

        <div className="col-6 col-md-3 d-flex gap-2">
          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
