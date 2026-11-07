import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PersonCard } from "@/components/People";
import { ShowBanner } from "@/components/ShowBanner";
import { contests, groups, juniorTeachers, teachers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Erfolge und Team",
  description:
    "Podestplätze von Newborns und Little Dreamers: Birmingham 2025, Bern 2024, Winterthur 2023. Dazu das Lehrerteam und die jährliche Tanzvorstellung in Buchs.",
};

export default function ErfolgePage() {
  return (
    <main id="inhalt">
      <section className="relative overflow-hidden bg-violet-deep text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div className="rise">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Erfolge</p>
            <h1 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
              Zwei Formationen. Drei Podeste. Ein Coach.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-brass">
              Newborns und Little Dreamers haben sich von Winterthur über Bern bis ins Global Dance Open Final in Birmingham getanzt. Die Zahlen stammen von den Meldungen der Tanzschule.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/buehne.jpg"
              alt="Leere Bühne mit violetten Vorhängen, warmem Scheinwerferlicht und Rosenblättern"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <ol className="relative space-y-8 border-l border-gold/50 pl-6 md:pl-10">
          {contests.map((contest) => (
            <li key={contest.id} className="relative">
              <span className="absolute -left-[1.85rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-gold bg-cream md:-left-[2.85rem]" aria-hidden />
              <article className={`rounded-3xl border bg-paper p-6 md:p-8 ${contest.featured ? "border-gold shadow-lg" : "border-violet/10"}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    {contest.year} · {contest.eyebrow}
                  </p>
                  <p className="text-sm text-ink-soft">{contest.when}</p>
                </div>
                <h2 className="mt-2 font-display text-3xl text-violet md:text-4xl">
                  {contest.event}
                  <span className="text-ink-soft"> · {contest.city}</span>
                </h2>
                <ul className={`mt-6 grid gap-4 ${contest.results.length > 1 ? "md:grid-cols-2" : ""}`}>
                  {contest.results.map((result) => (
                    <li key={`${result.group}-${result.category}`} className="rounded-2xl bg-cream p-5">
                      <p className="font-display text-6xl leading-none text-violet">{result.place}</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                        Platz {result.field}
                      </p>
                      <p className="mt-3 font-medium text-ink">{result.group}</p>
                      <p className="text-sm leading-relaxed text-ink-soft">{result.category}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Die Gruppen</p>
          <h2 className="mt-2 font-display text-4xl text-violet">Little Dreamers und Newborns</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {groups.map((group) => (
              <li key={group.name} className="rounded-3xl border border-violet/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">{group.level}</p>
                <h3 className="mt-2 font-display text-3xl text-violet">{group.name}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{group.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="coach" className="mx-auto max-w-6xl px-5 py-16">
        <article className="grid items-center gap-8 rounded-[2rem] bg-violet px-6 py-10 text-white md:grid-cols-[auto_1fr] md:px-10">
          <span className="grid h-24 w-24 place-items-center rounded-full bg-gold font-display text-3xl text-violet-deep" aria-hidden>
            IZ
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Competition-Coach</p>
            <h2 className="mt-2 font-display text-4xl">Ira Zaichenko</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-brass">
              Ira Zaichenko coacht die Competition-Gruppen Little Dreamers und Newborns, Junior wie Adult. Dazu unterrichtet sie Contemporary für Erwachsene, Commercial sowie Akro, Stretch und Technik. Zu den Podestplätzen in Bern und Winterthur hat die Tanzschule ausdrücklich sie und die Mädchen gratuliert. Birmingham setzt diese Linie fort: die Newborns, Platz 2 von 21 Gruppen weltweit.
            </p>
          </div>
        </article>
      </section>

      <section id="team" className="mx-auto max-w-6xl px-5 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">Team</p>
        <h2 className="mt-2 font-display text-4xl text-violet">Das Lehrerteam</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Die Porträts sind Monogramme, keine Fotos. So bleibt die Vorstellung klar, auch ohne Aufnahmen aus dem Studio.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((person) => (
            <li key={person.name}>
              <PersonCard person={person} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="font-display text-4xl text-violet">Junglehrer</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Sie unterrichten mitten im Alltag der Schule, vom Kindertanz bis zur rhythmischen Sportgymnastik.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {juniorTeachers.map((person) => (
            <li key={person.name}>
              <PersonCard person={person} />
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/kurse" className="text-sm font-semibold text-violet underline decoration-gold underline-offset-4">
            Welcher Kurs zu wem passt, steht bei den Angeboten
          </Link>
        </p>
      </section>

      <ShowBanner tone="dark" />
    </main>
  );
}
