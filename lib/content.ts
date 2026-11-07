export const school = {
  name: "Dream Dance",
  city: "Aarau",
  claim: "Lassen Sie sich von uns in die Welt des Tanzes entführen.",
  philosophy:
    "Mit Leichtigkeit und Freude geben wir die Tanzkunst weiter. Das wichtigste Ziel ist die Freude am Tanz: Haltung, Koordination, Körperkontrolle, Kraft, Flexibilität und ein Gespür für den Charakter jeder Bewegung.",
  studio: "Tanzforum",
  address: "Tellistrasse 114",
  zipCity: "5004 Aarau",
  days: "Montag bis Samstag",
  phone: "+41 78 640 42 48",
  phoneHref: "tel:+41786404248",
  email: "info@dreamdance.ch",
  website: "https://www.dreamdance.ch",
  timetable: "https://www.dreamdance.ch/stundenplan/",
  signup: "https://www.dreamdance.ch/anmeldung/",
  news: "https://www.dreamdance.ch/home/aktuell/",
  impressum: "https://dreamdance.ch/data/documents/Impressum-Dream-Dance.pdf",
  privacy: "https://dreamdance.ch/data/documents/Datenschutzerklarung-Dream-Dance.pdf",
  maps: "https://maps.google.com/?q=Tellistrasse+114,+5004+Aarau",
};

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/dreamdance.ch" },
  { label: "TikTok", href: "https://www.tiktok.com/@dreamdance.ch" },
];

export const pillars = [
  { title: "Haltung", text: "Eine klare, lebendige Ausrichtung, an der Stange und im Raum." },
  { title: "Koordination", text: "Arme, Beine und Blick lernen, miteinander zu sprechen." },
  { title: "Körperkontrolle", text: "Bewegungen werden bewusst, sauber und wiederholbar." },
  { title: "Kraft", text: "Stärke, die den Tanz trägt, ohne ihn hart zu machen." },
  { title: "Flexibilität", text: "Dehnen mit Geduld, damit der Körper weit und frei bleibt." },
  { title: "Freude am Tanz", text: "Die Leichtigkeit, wegen der man überhaupt anfängt." },
];

export type Result = {
  place: string;
  group: string;
  category: string;
  field: string;
};

export type Contest = {
  id: string;
  eyebrow: string;
  event: string;
  city: string;
  year: string;
  when: string;
  featured?: boolean;
  results: Result[];
};

export const contests: Contest[] = [
  {
    id: "birmingham-2025",
    eyebrow: "Weltweit",
    event: "Global Dance Open Final",
    city: "Birmingham",
    year: "2025",
    when: "15. bis 18. Juli 2025",
    featured: true,
    results: [
      {
        place: "2.",
        group: "Newborns",
        category: "Intermediate Small Ensemble Contemporary",
        field: "von 21 Gruppen weltweit",
      },
    ],
  },
  {
    id: "bern-2024",
    eyebrow: "Schweiz",
    event: "Swiss Jazzdance Competition",
    city: "Bern",
    year: "2024",
    when: "Samstag, 4. Mai 2024",
    results: [
      {
        place: "2.",
        group: "Newborns",
        category: "Juniors Formation",
        field: "von 13 Gruppen",
      },
      {
        place: "2.",
        group: "Little Dreamers",
        category: "Kids Formation",
        field: "von 13 Gruppen",
      },
    ],
  },
  {
    id: "winterthur-2023",
    eyebrow: "Schweiz",
    event: "DanceQweenz Contest",
    city: "Winterthur",
    year: "2023",
    when: "Sonntag, 5. November 2023",
    results: [
      {
        place: "2.",
        group: "Little Dreamers",
        category: "Kids, 9 bis 12 Jahre",
        field: "von 21 Gruppen",
      },
      {
        place: "3.",
        group: "Newborns",
        category: "Juniors, 13 bis 16 Jahre",
        field: "von 28 Gruppen",
      },
    ],
  },
];

export const groups = [
  {
    name: "Little Dreamers",
    level: "Kids",
    text: "Die jüngere Competition-Formation. Beim DanceQweenz Contest startete sie in der Kategorie Kids, 9 bis 12 Jahre, und tanzte sich in Bern aufs Podest der Kids Formation.",
  },
  {
    name: "Newborns",
    level: "Juniors",
    text: "Die Junior-Formation. Contemporary in Birmingham, Jazzformation in Bern, Juniors in Winterthur: Die Newborns stehen seit 2023 regelmässig auf dem Podest.",
  },
];

export const show = {
  title: "Tanzvorstellung",
  place: "Gemeindesaal Buchs",
  address: "Gysistrasse 4, 5033 Buchs",
  summary:
    "Einmal im Jahr wird aus dem Unterricht eine Bühne. Über 200 Mitwirkende tanzen modern und klassisch.",
  performances: [
    {
      label: "Samstag, 21. November 2026",
      detail: "17.00 bis 19.30 Uhr, Türöffnung 16.15 Uhr",
      href: "https://eventfrog.ch/de/p/tanz/tanzshow/jahres-tanzauffuehrung-dream-dance-2026-buchs-7520475413778303121.html",
    },
    {
      label: "Sonntag, 22. November 2026",
      detail: "15.00 bis 17.30 Uhr, Türöffnung 14.15 Uhr",
      href: "https://eventfrog.ch/de/p/tanz/tanzshow/jahres-tanzauffuehrung-dream-dance-2026-buchs-7520498890019241854.html",
    },
  ],
};

export type Course = {
  title: string;
  kicker: string;
  text: string;
  forWhom: string;
  icon: "child" | "ballet" | "jazz" | "flow" | "ribbon" | "stretch" | "pointe" | "medal";
};

export const courses: Course[] = [
  {
    title: "Kreativer Kindertanz",
    kicker: "Erste Schritte",
    icon: "child",
    forWhom: "Kinder · Einstieg",
    text: "Spiel- und Bewegungsfreude, Märchenwelten und die ersten Begriffe des Tanzes. Verschiedene Musikrichtungen, viel Fantasie und ein sanfter Einstieg.",
  },
  {
    title: "Klassisches Ballett",
    kicker: "Waganova-Methode",
    icon: "ballet",
    forWhom: "Kinder, Juniors, Erwachsene",
    text: "Haltung an der Stange, Platzierung im Raum, Koordination, Gleichgewicht und Ausdruck. Die Technik bleibt klar, der Zauber des Tanzes auch. Das Training orientiert sich an der Methode von Agrippina Waganova.",
  },
  {
    title: "Junior-Jazztanz und Modern-Jazz",
    kicker: "Rhythmus",
    icon: "jazz",
    forWhom: "Juniors und Erwachsene",
    text: "Junior-Jazztanz mischt Modern Dance, klassisches Ballett und afrikanische Wurzeln: moderne Musik und coole Choreografien. Modern-Jazz arbeitet mit dem Boden, schult Haltung und Körperwahrnehmung.",
  },
  {
    title: "Contemporary und Commercial",
    kicker: "Bühne von heute",
    icon: "flow",
    forWhom: "Jugendliche und Erwachsene",
    text: "Ausdruck, Flow und eine aktuelle Bühnenästhetik. Ira Zaichenko unterrichtet Contemporary für Erwachsene und Commercial, denselben Ton, der auch die Competition-Gruppen prägt.",
  },
  {
    title: "Rhythmische Sportgymnastik",
    kicker: "Turnen trifft Tanz",
    icon: "ribbon",
    forWhom: "Kinder und Jugendliche",
    text: "Zuerst Dehnen und Form, dann Akrobatik, Sprünge, Ballett, Charaktertanz und Modern Dance. Der Kurs darf reines Hobby sein. Bei Eignung und Wunsch ist auch der Weg zu Meisterschaften offen.",
  },
  {
    title: "Akro, Stretch und Tanztechnik",
    kicker: "Kraft und Kontrolle",
    icon: "stretch",
    forWhom: "Ergänzung zum Hauptfach",
    text: "Akro, Stretch und Technik bauen Flexibilität, Kraft und saubere Ausführung auf. Donnerstags von 17.30 bis 18.30 Uhr gibt es Tanztechnik für Competition-Tänzerinnen, die unter der Woche kein Ballett besuchen.",
  },
  {
    title: "Spitzentanz und Masterclass",
    kicker: "Ambition",
    icon: "pointe",
    forWhom: "Fortgeschritten · Samstag",
    text: "Spitzentanz im Junior-Ballett und eine Masterclass am Samstag für Ballettkinder mit höheren Ansprüchen, die mehr als einmal pro Woche trainieren möchten.",
  },
  {
    title: "Competition-Gruppen",
    kicker: "Little Dreamers und Newborns",
    icon: "medal",
    forWhom: "Nach Eignung · Wettkampf",
    text: "Zwei Formationen arbeiten auf Wettbewerbe und die grosse Bühne hin. Little Dreamers bei den Kids, Newborns bei den Juniors. Das Coaching liegt bei Ira Zaichenko.",
  },
];

export const levels = [
  {
    title: "Kinder",
    text: "Kreativer Kindertanz, Kinder-Ballett und rhythmische Sportgymnastik. Spielerisch, klar und mit viel Freude.",
  },
  {
    title: "Juniors",
    text: "Ballett, Jazztanz, Spitze und die Competition-Gruppen. Die Technik wächst, die Leichtigkeit bleibt.",
  },
  {
    title: "Erwachsene",
    text: "Ballett, Modern-Jazz, Contemporary und Commercial. Für den Einstieg und für alle, die schon lange tanzen.",
  },
  {
    title: "Anfänger bis Fortgeschrittene",
    text: "Jede Stufe hat ihren Platz. Masterclass und Competition sind da für alle, die öfter und gezielter trainieren möchten.",
  },
];

export type Person = {
  name: string;
  initials: string;
  focus: string;
  coach?: boolean;
};

export const teachers: Person[] = [
  {
    name: "Monica Studer",
    initials: "MS",
    focus: "Kindertanz, Kinder-Ballett, Erwachsenen-Ballett Masterclass",
  },
  {
    name: "Natalia Kyburz-Makova",
    initials: "NK",
    focus: "Erwachsenen-Ballett, Junior-Ballett und Spitzentanz",
  },
  {
    name: "Ira Zaichenko",
    initials: "IZ",
    focus: "Competition Junior und Adult, Contemporary, Commercial, Akro/Stretch/Technik",
    coach: true,
  },
  {
    name: "Daniele Simonetta",
    initials: "DS",
    focus: "Junior-Jazztanz",
  },
  {
    name: "Michaela Gupfinger",
    initials: "MG",
    focus: "Kinder-, Junior- und Erwachsenen-Ballett, Competition-Ballett, Masterclass, Tanztechnik",
  },
];

export const juniorTeachers: Person[] = [
  { name: "Sazuki Kato", initials: "SK", focus: "Kreativer Kindertanz" },
  { name: "Malin Bolliger", initials: "MB", focus: "Rhythmische Sportgymnastik, Junior-Jazz" },
  { name: "Vivien Arnold", initials: "VA", focus: "Kinder-Ballett" },
  { name: "Laura Schor", initials: "LS", focus: "Modern-Jazz für Erwachsene" },
  { name: "Anastasia Frei", initials: "AF", focus: "Kinder-Jazztanz" },
  { name: "Lin Zuffo", initials: "LZ", focus: "Rhythmische Sportgymnastik" },
];

export const nav = [
  { href: "/kurse", label: "Kurse" },
  { href: "/erfolge", label: "Erfolge & Team" },
  { href: "/#kontakt", label: "Kontakt" },
];
