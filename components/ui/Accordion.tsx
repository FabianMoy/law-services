"use client";
import { useId, useState } from "react";
import type { Faq } from "@/types";

export function Accordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  return (
    <div className="divide-y divide-petrol-900/10 rounded-2xl border border-petrol-900/10 bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.question}>
            <h3>
              <button id={`${uid}-b${i}`} aria-expanded={isOpen} aria-controls={`${uid}-p${i}`} onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium transition hover:bg-ivory">
                {it.question}
                <span aria-hidden="true" className={`text-xl text-gold-dark transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
            </h3>
            <div id={`${uid}-p${i}`} role="region" aria-labelledby={`${uid}-b${i}`}
              className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="px-5 pb-5 text-muted">{it.answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
