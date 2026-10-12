"use client";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);
  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? "bg-petrol-950/95 shadow-lg backdrop-blur" : "bg-transparent"}`}>
      <nav aria-label="Principal" className={`mx-auto flex max-w-6xl items-center justify-between px-5 text-white transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
        <a href="#inicio" className="font-serif text-lg tracking-wide">Vargas <span className="text-gold">&amp;</span> Asociados</a>
        <ul className="hidden items-center gap-6 text-sm lg:flex">
          {nav.map((n) => <li key={n.href}><a href={n.href} className="text-white/80 transition hover:text-white">{n.label}</a></li>)}
        </ul>
        <a href="#contacto" className="hidden min-h-11 items-center rounded-full bg-gold px-5 text-sm font-medium text-petrol-950 transition hover:-translate-y-0.5 hover:bg-[#c4a466] lg:inline-flex">Agendar consulta</a>
        <button aria-expanded={open} aria-controls="menu-movil" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)} className="grid size-11 place-items-center lg:hidden">
          <span aria-hidden="true" className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>
      {open && (
        <div id="menu-movil" className="border-t border-white/10 bg-petrol-950 px-5 pb-6 text-white lg:hidden">
          <ul className="flex flex-col">
            {nav.map((n) => <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-white/85">{n.label}</a></li>)}
          </ul>
          <a href="#contacto" onClick={() => setOpen(false)} className="mt-3 flex min-h-11 items-center justify-center rounded-full bg-gold font-medium text-petrol-950">Agendar consulta</a>
        </div>
      )}
      <span className="sr-only">{site.name}</span>
    </header>
  );
}
