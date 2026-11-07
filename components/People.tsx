import type { Person } from "@/lib/content";

export function PersonCard({ person }: { person: Person }) {
  return (
    <article
      className={`rounded-3xl border bg-paper p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        person.coach ? "border-gold shadow-[0_0_0_3px_rgba(198,161,91,0.25)]" : "border-violet/10"
      }`}
    >
      <div className="flex items-center gap-4">
        <span
          className={`grid h-14 w-14 place-items-center rounded-full font-display text-lg ${
            person.coach ? "bg-violet text-gold" : "bg-blush text-violet"
          }`}
          aria-hidden
        >
          {person.initials}
        </span>
        <div>
          <h3 className="font-display text-xl leading-tight text-violet">{person.name}</h3>
          {person.coach ? (
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">Competition-Coach</p>
          ) : null}
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{person.focus}</p>
    </article>
  );
}
