"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, school } from "@/lib/content";

function isActive(path: string, href: string) {
  if (href.startsWith("/#")) return false;
  return path === href || path.startsWith(`${href}/`);
}

export function SiteHeader() {
  const path = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === path;

  function onContactClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setOpenPath(null);
    if (window.location.pathname !== "/") {
      // Full load, because client routing does not keep the footer in view.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- hash target on the home page
      window.location.assign("/#kontakt");
      return;
    }
    window.history.pushState(null, "", "/#kontakt");
    document.getElementById("kontakt")?.scrollIntoView({ block: "start", behavior: "auto" });
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-violet/10 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3 rounded-full" aria-label="Dream Dance, zur Startseite">
          <Image src="/logo.png" alt="" width={300} height={300} className="h-12 w-12" priority />
          <span>
            <span className="block font-display text-xl leading-none tracking-tight text-violet">Dream Dance</span>
            <span className="mt-1 block text-[0.68rem] font-medium uppercase tracking-[0.22em] text-gold-deep">
              {school.city}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => {
            const active = isActive(path, item.href);
            const className = `rounded-full px-4 py-2 text-sm font-medium transition hover:bg-blush/70 ${
              active ? "bg-blush text-violet" : "text-ink"
            }`;
            if (item.href.includes("#")) {
              return (
                <a key={item.href} href={item.href} className={className} onClick={onContactClick}>
                  {item.label}
                </a>
              );
            }
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={className}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 items-center rounded-full border border-violet/15 px-4 text-sm font-medium text-violet md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpenPath(open ? null : path)}
        >
          {open ? "Schliessen" : "Menü"}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-violet/10 bg-paper px-5 py-4 md:hidden" aria-label="Mobile Navigation">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                {item.href.includes("#") ? (
                  <a
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-lg font-medium text-violet hover:bg-blush"
                    onClick={onContactClick}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-2xl px-4 py-3 text-lg font-medium text-violet hover:bg-blush"
                    onClick={() => setOpenPath(null)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
