import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
export const metadata = { title: "O studiu" };
export default function About() {
  return (
    <section className="text-page about-page">
      <span className="eyebrow">001 / O STUDIU</span>
      <Wordmark />
      <h2 className="editorial">
        Studio rzeczy
        <br />
        nieoczywistych.
      </h2>
      <div className="about-copy">
        <span className="eyebrow">OBRAZ TO DOPIERO POCZĄTEK.</span>
        <div>
          <p>
            Tworzymy przede wszystkim fotografię i film, ale nie definiujemy
            studia wyłącznie przez medium.
          </p>
          <p>
            Interesują nas obrazy, idee, eksperymenty i rzeczy, których nie da
            się łatwo przypisać do jednej kategorii.
          </p>
          <small>TEKST ROBOCZY / DO DALSZEJ REDAKCJI</small>
          <Link className="text-link" href="/work">
            WEJDŹ DO ARCHIWUM ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
