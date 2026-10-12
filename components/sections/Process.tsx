import { process } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Process() {
  return (
    <Section id="proceso" eyebrow="Proceso de trabajo" title="Cuatro pasos, sin sorpresas">
      <ol className="grid gap-8 md:grid-cols-4">
        {process.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 100}>
              <span className="font-serif text-5xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-serif text-xl">{p.title}</h3>
              <p className="mt-2 text-muted">{p.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
