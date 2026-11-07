import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CourseIcon } from "@/components/Icons";
import { courses, levels, school } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kurse und Angebot",
  description:
    "Kreativer Kindertanz, Ballett nach Waganova, Jazz, Contemporary, Sportgymnastik und Competition-Gruppen im Tanzforum Aarau. Montag bis Samstag.",
};

export default function KursePage() {
  return (
    <main id="inhalt">
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
        <div className="rise">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Kurse und Angebot</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-violet md:text-6xl">
            Für das erste Tutu und für die Formation
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Eltern finden hier den Überblick, Tänzerinnen den nächsten Schritt. Vom kreativen Kindertanz bis zu den Competition-Gruppen, für Anfängerinnen, Anfänger und Fortgeschrittene.
          </p>
          <p className="mt-4 text-ink">
            Unterricht im {school.studio}, {school.address}, {school.zipCity}. {school.days}.
          </p>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/ballett.jpg"
            alt="Erwachsene Balletttänzerin an der Stange in einem hellen Studio"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <ul className="grid gap-4 md:grid-cols-2">
          {courses.map((course) => (
            <li key={course.title} className="rounded-3xl border border-violet/10 bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blush text-violet">
                  <CourseIcon name={course.icon} />
                </span>
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-gold-deep">{course.kicker}</span>
              </div>
              <h2 className="mt-5 font-display text-3xl text-violet">{course.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{course.text}</p>
              <p className="mt-4 text-sm font-semibold text-violet">{course.forWhom}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-soft">
          Im Tanzforum gibt es ausserdem weitere Formate, zum Beispiel Stepptanz, Barre à Terre und Flamenco. Der aktuelle Stundenplan steht auf{" "}
          <a className="font-medium text-violet underline decoration-gold underline-offset-4" href={school.timetable} target="_blank" rel="noreferrer">
            dreamdance.ch
          </a>.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Stufen</p>
          <h2 className="mt-2 font-display text-4xl text-violet">Alter und Niveau</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Der Unterricht ist für Kinder, Jugendliche und Erwachsene gedacht. Man kann neu beginnen oder eine Stufe weitergehen. Die Masterclass und die Competition-Gruppen sind das Angebot für alle, die mehr wollen.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {levels.map((level) => (
            <li key={level.title} className="rounded-3xl bg-violet px-5 py-5 text-white">
              <h3 className="font-display text-2xl">{level.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brass">{level.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="relative min-h-64 overflow-hidden rounded-[2rem] md:min-h-80">
            <Image
              src="/images/jazz.jpg"
              alt="Erwachsene Tänzerin in einem weinroten Trikot, mit Schwung in den Armen"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 55vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Praktisch</p>
            <h2 className="mt-2 font-display text-4xl text-violet">Montag bis Samstag im Tanzforum</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              {school.address}, {school.zipCity}. Für einen Einstieg am besten direkt melden. Preise, AGB und die Anmeldung laufen über die bestehende Website, damit nichts doppelt und nichts veraltet ist.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={school.signup} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-violet px-6 font-medium text-white">
                Zur Anmeldung
              </a>
              <a href={school.phoneHref} className="inline-flex h-12 items-center justify-center rounded-full border border-violet/20 px-6 font-medium text-violet">
                {school.phone}
              </a>
            </div>
            <p className="mt-6">
              <Link href="/erfolge" className="text-sm font-semibold text-violet underline decoration-gold underline-offset-4">
                Was die Competition-Gruppen schon erreicht haben
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
