import { VideoPreview } from "./video-preview";
import Link from "next/link";
import Image from "next/image";
import { activeProjects, number } from "@/data/projects";
export function Archive({ full = false }: { full?: boolean }) {
  return (
    <section className={`archive ${full ? "archive-full" : ""}`} id="archive">
      <div className="archive-heading">
        <div>
          <span className="eyebrow">
            INDEX OF CURIOSITIES / {new Date().getFullYear()}
          </span>
          <h2>
            ARCHIVE <span>001—{number(activeProjects.length)}</span>
          </h2>
        </div>
        <span className="archive-side">
          OBRAZY. IDEE. INNE RZECZY.
          <br />
          <span className="live-dot" /> OPEN FOR THE UNEXPECTED
        </span>
      </div>
      <div className="archive-wall">
        {activeProjects.map((p, i) => (
          <article key={p.id} className={`project-card card-${i + 1}`}>
            <Link href={`/project/${p.slug}`} className="project-link">
              <div className={`project-image visual-${p.visual}`}>
                <Image
                  src={p.coverImage}
                  alt={p.title + " — demonstracyjna kompozycja wizualna"}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 60vw"
                />
                {p.coverVideo && (
                  <VideoPreview src={p.coverVideo} title={p.title} />
                )}
                <span className="image-corner">K—{number(p.id)}</span>
                <span className="view-label">VIEW PROJECT ↗</span>
                {p.visual === "landscape" && (
                  <span className="image-caption">
                    {i === 0
                      ? "SOMEWHERE BETWEEN\nHERE AND ELSEWHERE."
                      : "CISZA MA SWOJĄ\nCZĘSTOTLIWOŚĆ."}
                  </span>
                )}
                {p.visual === "landscape" && i === 0 && (
                  <span className="play-mark" aria-hidden="true">
                    ↗
                  </span>
                )}
              </div>
              <div className="project-meta">
                <span>
                  {number(p.id)} / {p.title}
                </span>
                <span>
                  {p.categories.join(" / ")} — {p.year}
                </span>
              </div>
            </Link>
          </article>
        ))}
        <div className="archive-note">
          <span>
            NOT EVERYTHING
            <br />
            NEEDS A CATEGORY.
          </span>
          <span className="asterisk">✳</span>
          <small>
            MATERIAŁY DEMONSTRACYJNE
            <br />A SPACE FOR THINGS TO COME.
          </small>
        </div>
      </div>
      <div className="archive-end">
        <span>END OF INDEX / {number(activeProjects.length)} ENTRIES</span>
        <Link href="/contact">LET’S MAKE SOMETHING STRANGE ↗</Link>
      </div>
    </section>
  );
}
