import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({ id, eyebrow, title, children, tone = "light" }: { id: string; eyebrow: string; title: string; children: ReactNode; tone?: "light" | "alt" | "dark" }) {
  const bg = { light: "bg-ivory", alt: "bg-ivory-dark", dark: "bg-petrol-900 text-white" }[tone];
  return (
    <section id={id} aria-labelledby={`${id}-t`} className={`${bg} px-5 py-20 sm:py-28`}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-2xl">
          <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${tone === "dark" ? "text-gold" : "text-gold-dark"}`}>{eyebrow}</p>
          <h2 id={`${id}-t`} className="font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
