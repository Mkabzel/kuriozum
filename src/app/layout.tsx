import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
export const metadata: Metadata = {
  title: {
    default: "KURIOZUM — Studio rzeczy nieoczywistych",
    template: "%s — KURIOZUM",
  },
  description:
    "Obrazy, idee, eksperymenty. Niezależne studio fotografii, filmu i rzeczy nieoczywistych.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body id="top">
        <a className="skip-link" href="#main">
          Przejdź do treści
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
