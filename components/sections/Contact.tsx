import { site } from "@/data/site";
import type { IconName } from "@/types";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";

export function Contact() {
  const rows: { icon: IconName; label: string; value: string }[] = [
    { icon: "phone", label: "Teléfono", value: site.phone },
    { icon: "mail", label: "Email", value: site.email },
    { icon: "pin", label: "Dirección", value: site.address },
    { icon: "clock", label: "Horario", value: site.hours },
  ];
  return (
    <Section id="contacto" eyebrow="Contacto" title="Agende su consulta" tone="alt">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <ul className="space-y-5">
            {rows.map((r) => (
              <li key={r.label} className="flex gap-4"><Icon name={r.icon} className="mt-0.5 size-5 shrink-0 text-gold-dark" />
                <div className="min-w-0"><p className="text-sm text-muted">{r.label}</p><p className="break-words">{r.value}</p></div></li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-3">
            {site.social.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-petrol-900/20 px-4 text-sm transition hover:border-gold hover:bg-white">{s.label}</a></li>)}
          </ul>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
