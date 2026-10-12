import { services } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Services() {
  return (
    <Section id="servicios" eyebrow="Áreas de práctica" title="Asesoría legal para cada etapa">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 60} className="h-full">
              <article className="group h-full rounded-2xl border border-petrol-900/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                <span className="grid size-12 place-items-center rounded-full bg-petrol-900 text-gold transition group-hover:bg-gold group-hover:text-petrol-950"><Icon name={s.icon} /></span>
                <h3 className="mt-5 font-serif text-xl">{s.title}</h3>
                <p className="mt-2 text-muted">{s.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
