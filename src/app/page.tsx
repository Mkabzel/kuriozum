import { Wordmark } from "@/components/wordmark";
import { Archive } from "@/components/archive";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-topline">
          <span>EST. IN CURIOSITY</span>
          <span className="signal">
            <i className="live-dot" /> SIGNAL FOUND / 52°13′N 21°00′E
          </span>
        </div>
        <Wordmark />
        <div className="hero-subline">
          <p>
            Studio rzeczy nieoczywistych
            <span className="green-star" aria-hidden="true">
              ✳
            </span>
          </p>
          <span className="hero-index">
            [ K / 001 ]<br />
            NIE WSZYSTKO MUSI
            <br />
            BYĆ OCZYWISTE.
          </span>
        </div>
        <div className="hero-bottom">
          <span>PHOTO / FILM / DIRECTION / OTHER</span>
          <a href="#archive">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
          <span className="hero-coordinate">AN INDEPENDENT POINT OF VIEW.</span>
        </div>
      </section>
      <Archive />
    </>
  );
}
