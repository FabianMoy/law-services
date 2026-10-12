import { differentiators } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Differentiators() {
  return (
    <Section id="diferenciadores" eyebrow="Por qué elegirnos" title="Un despacho cercano y claro" tone="dark">
      <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {differentiators.map((d, i) => (
          <li key={d.title}>
            <Reveal delay={i * 80} className="flex gap-5 border-t border-white/15 pt-6">
              <Icon name={d.icon} className="mt-1 size-7 shrink-0 text-gold" />
              <div><h3 className="font-serif text-xl">{d.title}</h3><p className="mt-2 text-white/70">{d.text}</p></div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
