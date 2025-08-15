import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean };

export default function PrimaryButton({ loading, children, ...rest }: Props) {
  return (
    <button className="btn btn-primary" disabled={loading || rest.disabled} {...rest}>
      {loading ? "Molimo sačekajte..." : children}
    </button>
  );
}
