import Image from "next/image";
import { school, socials } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-violet-deep text-brass">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Image src="/logo.png" alt="" width={300} height={300} className="h-28 w-28" />
          <p className="mt-4 font-display text-3xl text-white">Dream Dance</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-brass/90">
            Tanzschule im {school.studio}, {school.city}. Unterricht {school.days}.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold">Showcase / Demo</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed">
            Entwurf für die neue Dream Dance Website. Anmeldung, Preise und der Stundenplan
            bleiben auf der bestehenden Seite.
          </p>
        </div>

        <address className="not-italic md:col-span-4">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">Kontakt</p>
          <p className="mt-3 text-white">
            {school.address}
            <br />
            {school.zipCity}
          </p>
          <p className="mt-4">
            <a className="text-white underline decoration-gold/70 underline-offset-4 hover:decoration-white" href={school.phoneHref}>
              {school.phone}
            </a>
          </p>
          <p className="mt-2">
            <a className="text-white underline decoration-gold/70 underline-offset-4 hover:decoration-white" href={`mailto:${school.email}`}>
              {school.email}
            </a>
          </p>
          <p className="mt-4">
            <a className="text-sm underline decoration-white/30 underline-offset-4 hover:decoration-white" href={school.maps} target="_blank" rel="noreferrer">
              Wegbeschreibung
            </a>
          </p>
        </address>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">Weiter</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href={school.website} target="_blank" rel="noreferrer">dreamdance.ch</a></li>
            <li><a className="hover:text-white" href={school.timetable} target="_blank" rel="noreferrer">Stundenplan</a></li>
            <li><a className="hover:text-white" href={school.signup} target="_blank" rel="noreferrer">Anmeldung</a></li>
            {socials.map((item) => (
              <li key={item.href}>
                <a className="hover:text-white" href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-brass/80 sm:flex-row sm:justify-between">
          <p>Dream Dance · {school.address}, {school.zipCity}</p>
          <p className="flex gap-4">
            <a className="hover:text-white" href={school.impressum} target="_blank" rel="noreferrer">Impressum der Tanzschule</a>
            <a className="hover:text-white" href={school.privacy} target="_blank" rel="noreferrer">Datenschutz</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
