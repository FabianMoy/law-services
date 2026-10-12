import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="nosotros" eyebrow="Sobre nosotros" title={`Conozca a ${site.lawyer}`} tone="alt">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,320px)_1fr]">
        <Reveal>
          {/* Placeholder elegante: sustituir por fotografía real con next/image. */}
          <div role="img" aria-label="Retrato de demostración de Daniel Vargas (marcador de posición)" className="grid aspect-[4/5] w-full max-w-xs place-items-center rounded-t-full bg-gradient-to-b from-petrol-700 to-petrol-950 font-serif text-6xl text-gold">DV</div>
        </Reveal>
        <Reveal delay={100}>
          <article>
            <h3 className="font-serif text-2xl">{site.lawyer}</h3>
            <p className="text-sm uppercase tracking-widest text-gold-dark">Abogado · Socio fundador (demo)</p>
            <p className="mt-5 text-muted">Daniel dirige un despacho pensado para quienes buscan entender su situación antes de tomar decisiones. Perfil ficticio con fines demostrativos.</p>
            <p className="mt-3 text-muted">Su filosofía: explicar con claridad, actuar con estrategia y cuidar cada detalle del caso.</p>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 font-serif text-xl italic text-petrol-900">“La estrategia legal comienza entendiendo realmente el problema.”</blockquote>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
