import Link from "next/link";
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link href="/" className="footer-brand">
          KURIOZUM<span>Studio rzeczy nieoczywistych</span>
        </Link>
        <p>
          PHOTO / FILM / DIRECTION / OTHER
          <br />
          POLAND · AVAILABLE EVERYWHERE
        </p>
        <Link href="/contact">START A CONVERSATION ↗</Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} KURIOZUM</span>
        <span>
          <i className="live-dot" /> END OF TRANSMISSION
        </span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
