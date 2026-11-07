import type { Course } from "@/lib/content";

const stroke = {
  viewBox: "0 0 24 24",
  className: "h-6 w-6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function CourseIcon({ name }: { name: Course["icon"] }) {
  switch (name) {
    case "child":
      return (
        <svg {...stroke}>
          <circle cx="12" cy="8" r="2.6" />
          <path d="M6.8 19.2c.8-2.8 2.6-4.2 5.2-4.2s4.4 1.4 5.2 4.2" />
        </svg>
      );
    case "ballet":
      return (
        <svg {...stroke}>
          <path d="M3.5 14.5h17" />
          <circle cx="15.5" cy="8" r="1.6" />
          <path d="M15.5 9.6v4.9" />
          <path d="M12.2 12.2h3.3" />
          <path d="M15.5 14.5c-2.4 1.2-4.2 1.2-6.2 0" />
        </svg>
      );
    case "jazz":
      return (
        <svg {...stroke}>
          <path d="M9 18V6.2L18 4v11.2" />
          <circle cx="6.2" cy="18" r="2.2" />
          <circle cx="15.2" cy="15.2" r="2.2" />
        </svg>
      );
    case "flow":
      return (
        <svg {...stroke}>
          <path d="M4 15c2.2-4.2 3.8-4.2 5.8 0s3.4 4.2 5.6 0 2.8-4.2 4.6-4.2" />
          <path d="M5 19c2.4-1.6 4.2-1.6 6.2 0s3.6 1.6 6 0" />
        </svg>
      );
    case "ribbon":
      return (
        <svg {...stroke}>
          <path d="m12 3.8 1.8 4.4 4.7.4-3.6 3 1.1 4.6L12 14.2 8 16.2l1.1-4.6-3.6-3 4.7-.4L12 3.8z" />
        </svg>
      );
    case "stretch":
      return (
        <svg {...stroke}>
          <circle cx="12" cy="6.2" r="1.8" />
          <path d="M4.5 17.5c2-4.6 4-6.3 7.5-6.3s5.5 1.7 7.5 6.3" />
          <path d="M8.2 12.2 5.5 9.5M15.8 12.2 18.5 9.5" />
        </svg>
      );
    case "pointe":
      return (
        <svg {...stroke}>
          <path d="M9 19.2h7.2l-1.1-2.8c-.8-2-1.3-4.6-1.1-6.6.2-1.5-.6-2.6-1.6-2.6s-1.8 1.1-1.6 2.6c.2 2-.3 4.6-1.1 6.6L9 19.2z" />
          <path d="M10.2 19.2c.4 1 1 1.6 1.9 1.6s1.5-.6 1.9-1.6" />
        </svg>
      );
    case "medal":
      return (
        <svg {...stroke}>
          <circle cx="12" cy="14.2" r="4.2" />
          <path d="M9.4 10.6 8.2 4.8h2.6l1.2 2.4 1.2-2.4h2.6l-1.2 5.8" />
        </svg>
      );
  }
}


