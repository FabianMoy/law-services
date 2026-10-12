import { testimonials } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

// DEMO: testimonios ficticios, no corresponden a clientes reales.
export function Testimonials() {
  return (
    <Section id="testimonios" eyebrow="Testimonios (demo)" title="Lo que valoran nuestros clientes" tone="alt">
      <ul className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <li key={t.author}>
            <Reveal delay={i * 80} className="h-full">
              <figure className="h-full rounded-2xl border border-petrol-900/10 bg-white p-7">
                <blockquote className="text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-sm font-medium text-gold-dark">— {t.author}</figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
