import { InputHTMLAttributes, ReactNode } from "react";

type Props = {
  label: string;
  hint?: ReactNode;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormField({ label, hint, error, ...rest }: Props) {
  const id = rest.id ?? rest.name ?? label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input id={id} className={`form-control ${error ? "is-invalid" : ""}`} {...rest} />
      {hint && <div className="form-text">{hint}</div>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}
