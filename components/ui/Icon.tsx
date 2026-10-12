import type { IconName } from "@/types";

const paths: Record<IconName, string> = {
  building: "M4 21V5l8-2 8 2v16M9 21v-4h6v4M8 9h2M14 9h2M8 13h2M14 13h2",
  briefcase: "M3 8h18v12H3zM9 8V5h6v3M3 13h18",
  scroll: "M6 3h11a2 2 0 0 1 2 2v13a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zM8 8h8M8 12h8M8 16h5",
  home: "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
  file: "M6 2h9l5 5v15H6zM14 2v6h6M9 13h7M9 17h7",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.5-6 8-6s8 2 8 6",
  chat: "M4 5h16v11H9l-5 4zM8 9h8M8 12h5",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z",
  lock: "M6 11h12v10H6zM8 11V8a4 4 0 0 1 8 0v3",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
  pin: "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
};

export function Icon({ name, className = "size-6" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
