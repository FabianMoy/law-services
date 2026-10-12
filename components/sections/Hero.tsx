import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-t" className="relative overflow-hidden bg-petrol-950 px-5 pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
      <svg aria-hidden="true" viewBox="0 0 400 400" className="pointer-events-none absolute -right-24 top-10 w-[28rem] max-w-none opacity-40 sm:right-0 lg:opacity-100 lg:w-[34rem]" fill="none" stroke="#b39257" strokeWidth="1">
        {[60, 100, 140, 180].map((r) => <path key={r} d={`M${200 - r} 380V${200} a${r} ${r} 0 0 1 ${r * 2} 0V380`} opacity={0.25 + r / 400} />)}
        <path d="M20 380H380" />
      </svg>
      <div className="relative mx-auto max-w-6xl">
        <p className="hero-in text-xs font-semibold uppercase tracking-[0.25em] text-gold">Vargas &amp; Asociados</p>
        <h1 id="hero-t" className="hero-in mt-5 max-w-3xl font-serif text-4xl leading-[1.1] [animation-delay:80ms] sm:text-6xl">Defensa legal con estrategia, claridad y experiencia.</h1>
        <p className="hero-in mt-6 max-w-xl text-lg text-white/75 [animation-delay:160ms]">Acompañamos a personas y empresas en Monterrey con un trato cercano, lenguaje claro y un plan definido para cada situación.</p>
        <div className="hero-in mt-9 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
          <ButtonLink href="#contacto">Agendar una consulta</ButtonLink>
          <ButtonLink href="#servicios" variant="outline">Conocer nuestros servicios</ButtonLink>
        </div>
      </div>
    </section>
  );
}
