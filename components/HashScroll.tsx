"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function HashScroll() {
  const path = usePathname();

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    const scroll = () => document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "auto" });
    scroll();
    const timer = window.setTimeout(scroll, 80);
    return () => window.clearTimeout(timer);
  }, [path]);

  return null;
}
