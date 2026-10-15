import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { activeProjects, number } from "@/data/projects";
import { Dice } from "@/components/navigation";
export function generateStaticParams() {
  return activeProjects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title:
      activeProjects.find((p) => p.slug === slug)?.title ?? "Nie znaleziono",
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = activeProjects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const p = activeProjects[index];
  const next = activeProjects[(index + 1) % activeProjects.length];
  return (
    <article className="project-page">
      <div className="project-title">
        <Link href="/work" className="eyebrow">
          ← ARCHIVE / PROJECT {number(p.id)}
        </Link>
        <h1>{p.title}</h1>
        <div className="project-details">
          <span>
            CLIENT
            <br />
            <strong>{p.client}</strong>
          </span>
          <span>
            YEAR
            <br />
            <strong>{p.year}</strong>
          </span>
          <span>
            MEDIUM
            <br />
            <strong>{p.categories.join(" / ")}</strong>
          </span>
        </div>
      </div>
      <div className={`project-cover visual-${p.visual}`}>
        {p.coverVideo ? (
          <video
            src={p.coverVideo}
            poster={p.coverImage}
            controls
            playsInline
            preload="none"
            aria-label={p.title}
          />
        ) : (
          <Image src={p.coverImage} alt={p.title} fill priority sizes="100vw" />
        )}
      </div>
      <div className="project-description">
        <span className="eyebrow">{number(p.id)} / FIELD NOTES</span>
        <p>{p.description}</p>
      </div>
      <div className="editorial-media">
        {p.media.map((m, i) => (
          <figure key={m.src + i}>
            {m.type === "video" ? (
              <video
                src={m.src}
                controls
                playsInline
                preload="none"
                aria-label={m.alt}
              />
            ) : (
              <Image
                src={m.src}
                alt={m.alt + " — detal"}
                width={1200}
                height={1500}
                sizes="(max-width: 700px) 90vw, 55vw"
              />
            )}
            <figcaption>
              FIG. {number(i + 1)} / {p.title}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="next-project">
        <Link href={`/project/${next.slug}`}>
          <span className="eyebrow">NEXT CURIOSITY →</span>
          <h2>{next.title} ↗</h2>
        </Link>
        <Dice />
      </div>
    </article>
  );
}
