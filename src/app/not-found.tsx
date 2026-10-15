import Link from "next/link";
export default function NotFound() {
  return (
    <section className="text-page">
      <span className="eyebrow">404 / SIGNAL LOST</span>
      <h1 className="error-title">
        TU NIC
        <br />
        NIE MA.
      </h1>
      <Link className="text-link" href="/work">
        WRÓĆ DO ARCHIWUM ↗
      </Link>
    </section>
  );
}
