import { site } from "@/data/site";
export const metadata = { title: "Kontakt" };
export default function Contact() {
  return (
    <section className="text-page contact-page">
      <span className="eyebrow">002 / OTWARTY KANAŁ</span>
      <h1>
        HAVE SOMETHING
        <br />
        <em>strange</em> IN MIND<span className="green-text">?</span>
      </h1>
      <div className="contact-grid">
        <p>
          Nowy pomysł, nieoczywista współpraca
          <br />
          albo po prostu rozmowa.
        </p>
        <div>
          <span className="eyebrow">ADRES DO UZUPEŁNIENIA</span>
          {site.email ? (
            <a className="contact-address" href={`mailto:${site.email}`}>
              {site.email} ↗
            </a>
          ) : (
            <>
              <p className="contact-address">TWÓJ EMAIL ↗</p>
              <small>Dodaj właściwy adres studia przed publikacją.</small>
            </>
          )}
        </div>
        <div>
          <span className="eyebrow">FIND US ELSEWHERE</span>
          {site.instagramUrl ? (
            <p>
              <a href={site.instagramUrl} target="_blank" rel="noreferrer">
                INSTAGRAM ↗
              </a>
            </p>
          ) : (
            <p>INSTAGRAM — WKRÓTCE</p>
          )}
          <small>POLAND / AVAILABLE EVERYWHERE</small>
        </div>
      </div>
    </section>
  );
}
