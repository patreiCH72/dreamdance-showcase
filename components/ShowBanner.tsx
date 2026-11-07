import { show } from "@/lib/content";

export function ShowBanner({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section className={dark ? "bg-violet text-white" : "bg-blush/60"}>
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr] md:py-16">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-gold" : "text-gold-deep"}`}>
            Jährliche Tanzvorstellung
          </p>
          <h2 className={`mt-2 font-display text-3xl md:text-4xl ${dark ? "text-white" : "text-violet"}`}>
            {show.title} im {show.place}
          </h2>
          <p className={`mt-3 max-w-xl leading-relaxed ${dark ? "text-brass" : "text-ink-soft"}`}>{show.summary}</p>
          <p className={`mt-2 text-sm ${dark ? "text-brass/80" : "text-ink-soft"}`}>{show.address}</p>
        </div>
        <ul className="space-y-3">
          {show.performances.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`block rounded-2xl px-5 py-4 transition hover:-translate-y-0.5 ${
                  dark ? "bg-white/10 hover:bg-white/15" : "bg-paper shadow-sm hover:shadow-md"
                }`}
              >
                <span className={`block font-medium ${dark ? "text-white" : "text-violet"}`}>{item.label}</span>
                <span className={`mt-1 block text-sm ${dark ? "text-brass" : "text-ink-soft"}`}>{item.detail}</span>
                <span className={`mt-2 block text-xs font-semibold uppercase tracking-[0.14em] ${dark ? "text-gold" : "text-gold-deep"}`}>
                  Tickets
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
