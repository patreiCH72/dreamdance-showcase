import Link from "next/link";

export default function NotFound() {
  return (
    <main id="inhalt" className="mx-auto max-w-3xl px-5 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">404</p>
      <h1 className="mt-3 font-display text-5xl text-violet">Diese Seite tanzt woanders.</h1>
      <p className="mt-4 text-ink-soft">Der Schritt ist ins Leere gegangen. Zurück zur Startseite, zu den Kursen oder zu den Erfolgen.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="inline-flex h-12 items-center justify-center rounded-full bg-violet px-6 font-medium text-white">
          Startseite
        </Link>
        <Link href="/kurse" className="inline-flex h-12 items-center justify-center rounded-full border border-violet/20 px-6 font-medium text-violet">
          Kurse
        </Link>
      </div>
    </main>
  );
}
