import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { HashScroll } from "@/components/HashScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { school } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dream Dance Aarau · Tanzschule",
    template: "%s · Dream Dance Aarau",
  },
  description:
    "Showcase für die Tanzschule Dream Dance im Tanzforum Aarau. Kurse vom Kindertanz bis zur Competition, mit Podestplätzen von Newborns und Little Dreamers.",
  openGraph: {
    locale: "de_CH",
    siteName: "Dream Dance Aarau",
    type: "website",
    title: "Dream Dance Aarau · Tanzschule",
    description:
      "Freude am Tanz, klare Kurse und die Erfolge der Competition-Gruppen Little Dreamers und Newborns.",
  },
};

export const viewport: Viewport = {
  themeColor: "#3b1848",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${fraunces.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream text-ink">
        <a className="skip-link" href="#inhalt">Zum Inhalt</a>
        <p className="bg-violet-deep px-5 py-2 text-center text-sm text-brass">
          Showcase / Demo für die neue Website.{" "}
          <a className="text-white underline decoration-gold underline-offset-4" href={school.website} target="_blank" rel="noreferrer">
            Anmeldung und Stundenplan auf dreamdance.ch
          </a>
        </p>
        <HashScroll />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
