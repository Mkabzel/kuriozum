export type ProjectMedia = {
  src: string;
  alt: string;
  type: "image" | "video";
};
export type Project = {
  id: number;
  slug: string;
  title: string;
  year: number;
  categories: string[];
  description: string;
  client: string;
  coverImage: string;
  coverVideo?: string;
  media: ProjectMedia[];
  featured: boolean;
  active: boolean;
  visual: string;
};
const entries = [
  ["poza-zasiegiem", "POZA ZASIĘGIEM", "FILM / DIRECTION", "landscape"],
  ["forma-nieznana", "FORMA NIEZNANA", "VISUAL EXPERIMENT", "orb"],
  ["ciala-obce", "CIAŁA OBCE", "PHOTOGRAPHY", "sculpture"],
  ["siedlisko", "SIEDLISKO", "PHOTOGRAPHY / FILM", "landscape"],
  ["sygnal-07", "SYGNAŁ 07", "ART DIRECTION", "signal"],
  ["po-godzinach", "PO GODZINACH", "IMAGE / OTHER", "type"],
] as const;
export const projects: Project[] = entries.map(
  ([slug, title, category, visual], i) => ({
    id: i + 1,
    slug,
    title,
    year: 2026,
    categories: category.split(" / "),
    description:
      "Studium obecności, faktury i tego, co pozostaje poza kadrem. Obraz jako punkt wyjścia do poszukiwań — bez gotowej odpowiedzi. Materiał demonstracyjny, do zastąpienia autorską realizacją studia.",
    client: "Projekt własny / demo",
    coverImage:
      visual === "landscape"
        ? "/images/landscape.jpg"
        : `/images/${visual}.svg`,
    media: [
      {
        src:
          visual === "landscape"
            ? "/images/landscape.jpg"
            : `/images/${visual}.svg`,
        alt: title,
        type: "image",
      },
    ],
    featured: true,
    active: true,
    visual,
  }),
);
export const activeProjects = projects.filter((p) => p.active);
export const number = (n: number) => String(n).padStart(3, "0");
