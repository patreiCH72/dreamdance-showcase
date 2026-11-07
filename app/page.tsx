import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CourseIcon } from "@/components/Icons";
import { ShowBanner } from "@/components/ShowBanner";
import { contests, courses, pillars, school, teachers } from "@/lib/content";

export const metadata: Metadata = {
  description:
    "Lassen Sie sich von Dream Dance in Aarau in die Welt des Tanzes entführen. Kurse für Kinder, Jugendliche und Erwachsene, plus die Podestplätze von Newborns und Little Dreamers.",
};

const ribbon = ["Ballett", "Jazztanz", "Contemporary", "Kindertanz", "Spitze", "Commercial", "Sportgymnastik", "Freude"];

export default function HomePage() {
  return (
    <main id="inhalt">
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush blur-3xl" />
          <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-brass/80 blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:pt-16 lg:grid-cols-2 lg:pb-24">
          <div className="rise">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              Tanzschule · {school.studio} · {school.city}
            </p>
            <h1 className="mt-4 font-display text-[2.6rem] leading-[1.05] text-violet sm:text-6xl">
              <span className="text-gold-deep">«</span>
              {school.claim}
              <span className="text-gold-deep">»</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{school.philosophy}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/kurse" className="inline-flex h-12 items-center justify-center rounded-full bg-violet px-6 font-medium text-white transition hover:bg-violet-deep">
                Kurse entdecken
              </Link>
              <Link href="/erfolge" className="inline-flex h-12 items-center justify-center rounded-full border border-violet/20 bg-paper px-6 font-medium text-violet transition hover:border-gold">
                Erfolge ansehen
              </Link>
            </div>
            <dl className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-soft">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-gold-deep">Unterricht</dt>
                <dd className="font-medium text-ink">{school.days}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-gold-deep">Stufen</dt>
                <dd className="font-medium text-ink">Anfänger bis Fortgeschrittene</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-gold-deep">Alter</dt>
                <dd className="font-medium text-ink">Kinder bis Erwachsene</dd>
              </div>
            </dl>
          </div>

          <div className="rise delay-2 relative md:pb-3 md:pr-3">
            <div className="absolute bottom-0 right-0 hidden h-[92%] w-[94%] rounded-[2rem] border border-gold md:block" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-blush shadow-xl sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/hero.jpg"
                alt="Erwachsene Tänzerin in einer Drehung, rosa Rock, helles Studio"
                fill
                priority
                className="object-cover object-[72%_center]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <p className="drift absolute -left-1 bottom-8 max-w-[14rem] rounded-2xl bg-paper/95 px-4 py-3 shadow-lg sm:left-4">
              <span className="block font-display text-3xl leading-none text-violet">2. Platz</span>
              <span className="mt-1 block text-xs leading-snug text-ink-soft">
                Global Dance Open Final Birmingham 2025 · Newborns
              </span>
            </p>
            <p className="mt-3 text-xs text-ink-soft">Stimmungsbild, keine Aufnahme aus dem Unterricht.</p>
          </div>
        </div>
      </section>

      <div className="border-y border-violet/10 bg-paper py-4" aria-hidden>
        <div className="marquee">
          <p className="marquee-track gap-8 px-4 text-sm font-medium uppercase tracking-[0.22em] text-violet/70">
            {[...ribbon, ...ribbon].map((word, index) => (
              <span key={`${word}-${index}`} className="flex items-center gap-8">
                {word}
                <span className="text-gold">·</span>
              </span>
            ))}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Philosophie</p>
          <h2 className="mt-2 font-display text-4xl text-violet md:text-5xl">Leichtigkeit, die auf Technik steht</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Ob Anfänger oder Fortgeschrittene: Bei Dream Dance gibt es eine sorgfältige Ausbildung in ganz unterschiedlichen Tanzstilen. Der Zauber bleibt, die Haltung wird klarer.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item, index) => (
            <li key={item.title} className="rounded-3xl border border-violet/10 bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/60">
              <span className="font-display text-2xl text-gold-deep">0{index + 1}</span>
              <h3 className="mt-3 font-display text-2xl text-violet">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative overflow-hidden bg-violet-deep text-white">
        <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-lilac/40 blur-3xl" />
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Competition</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">Podestplätze, die man zweimal liest</h2>
              <p className="mt-4 text-brass leading-relaxed">
                Little Dreamers und Newborns tanzen nicht nur im Studio. Unter dem Coaching von Ira Zaichenko stehen sie seit 2023 auf Schweizer und internationalen Podesten.
              </p>
            </div>
            <Link href="/erfolge" className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-6 font-medium text-violet-deep transition hover:bg-brass">
              Alle Resultate
            </Link>
          </div>

          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {contests.map((contest) => (
              <li
                key={contest.id}
                className={`rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 ${
                  contest.featured ? "border-gold bg-white/10" : "border-white/10 bg-white/5"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {contest.eyebrow} · {contest.year}
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight">{contest.event}</h3>
                <p className="mt-1 text-sm text-brass">{contest.city}</p>
                <ul className="mt-6 space-y-4">
                  {contest.results.map((result) => (
                    <li key={`${result.group}-${result.category}`} className="border-t border-white/10 pt-4">
                      <p className="font-display text-5xl leading-none text-gold">{result.place}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-brass">Platz {result.field}</p>
                      <p className="mt-2 font-medium">{result.group}</p>
                      <p className="text-sm text-brass">{result.category}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <aside className="mt-8 grid items-center gap-6 rounded-3xl bg-paper p-6 text-ink md:grid-cols-[auto_1fr] md:p-8">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-violet font-display text-xl text-gold" aria-hidden>IZ</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">Competition-Coach</p>
              <h3 className="mt-1 font-display text-3xl text-violet">Ira Zaichenko</h3>
              <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">
                Sie führt Little Dreamers und Newborns durch Contemporary, Commercial und die Wettkampfarbeit. Die Schule gratuliert den Gruppen und ihrer Lehrerin zu diesen Resultaten. Contemporary, Commercial sowie Akro, Stretch und Technik unterrichtet sie ebenfalls.
              </p>
              <Link href="/erfolge#coach" className="mt-4 inline-flex text-sm font-semibold text-violet underline decoration-gold underline-offset-4">
                Ira und das Team
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Angebot</p>
            <h2 className="mt-2 font-display text-4xl text-violet">Acht Wege in den Tanz</h2>
          </div>
          <Link href="/kurse" className="text-sm font-semibold text-violet underline decoration-gold underline-offset-4">
            Zum ganzen Angebot
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.slice(0, 4).map((course) => (
            <li key={course.title}>
              <Link href="/kurse" className="flex h-full flex-col rounded-3xl border border-violet/10 bg-paper p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/70">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blush text-violet">
                  <CourseIcon name={course.icon} />
                </span>
                <h3 className="mt-4 font-display text-2xl leading-tight text-violet">{course.title}</h3>
                <p className="mt-2 text-sm text-gold-deep">{course.forWhom}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/jazz.jpg"
              alt="Erwachsene Tänzerin in einem weinroten Trikot, Arme in der Bewegung"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Team</p>
            <h2 className="mt-2 font-display text-4xl text-violet">Menschen, die den Tanz weitergeben</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Fünf Lehrerinnen und Lehrer prägen den Unterricht, dazu die Junglehrer. Ira Zaichenko coacht die Competition-Gruppen.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {teachers.map((person) => (
                <li key={person.name}>
                  <Link
                    href="/erfolge#team"
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition hover:border-gold ${
                      person.coach ? "border-gold bg-brass/50 font-medium text-violet" : "border-violet/10 bg-cream"
                    }`}
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-violet text-[0.65rem] text-gold" aria-hidden>
                      {person.initials}
                    </span>
                    {person.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/erfolge#team" className="mt-6 inline-flex h-12 items-center rounded-full bg-violet px-6 font-medium text-white hover:bg-violet-deep">
              Team kennenlernen
            </Link>
          </div>
        </div>
      </section>

      <ShowBanner />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-violet px-6 py-12 text-white md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Nächster Schritt</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl md:text-5xl">Die erste Drehung beginnt mit einem Hallo.</h2>
          <p className="mt-4 max-w-xl text-brass">
            Kurse ansehen, Erfolge nachlesen oder die Tanzschule direkt erreichen. {school.days} im {school.studio}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/kurse" className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-6 font-medium text-violet-deep">
              Zu den Kursen
            </Link>
            <a href={`mailto:${school.email}`} className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-6 font-medium">
              {school.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
