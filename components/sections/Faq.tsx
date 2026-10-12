import { faqs } from "@/data/site";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";

export function Faq() {
  return (
    <Section id="faq" eyebrow="Preguntas frecuentes" title="Resolvemos sus dudas">
      <div className="max-w-3xl"><Accordion items={faqs} /></div>
    </Section>
  );
}
