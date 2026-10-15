"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { activeProjects } from "@/data/projects";
import { Symbol } from "./symbol";
export function Dice() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <button
      className="dice"
      aria-label="Wylosuj projekt"
      title="Wylosuj projekt"
      onClick={() => {
        const pool = activeProjects.filter(
          (p) => pathname !== `/project/${p.slug}`,
        );
        if (pool.length)
          router.push(
            `/project/${pool[Math.floor(Math.random() * pool.length)].slug}`,
          );
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        {[
          [7, 7],
          [17, 7],
          [12, 12],
          [7, 17],
          [17, 17],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.3" fill="currentColor" />
        ))}
      </svg>
    </button>
  );
}
export function Navigation() {
  const path = usePathname();
  return (
    <header className="navigation">
      <Symbol />
      <span className="header-note">
        INDEPENDENT CREATIVE STUDIO
        <br />
        IMAGES, IDEAS & OTHER CURIOSITIES
      </span>
      <nav aria-label="Nawigacja główna">
        {["work", "about", "contact"].map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            aria-current={path === `/${item}` ? "page" : undefined}
          >
            {item.toUpperCase()}
          </Link>
        ))}
        <Dice />
      </nav>
    </header>
  );
}
