import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-t" className="bg-petrol-800 px-5 py-20 text-center text-white">
      <Reveal className="mx-auto max-w-2xl">
        <h2 id="cta-t" className="font-serif text-3xl sm:text-4xl">Hablemos sobre su situación legal.</h2>
        <p className="mt-4 text-white/75">Cuéntenos su caso y le ayudaremos a definir los siguientes pasos.</p>
        <ButtonLink href="#contacto" className="mt-8">Agendar una consulta</ButtonLink>
      </Reveal>
    </section>
  );
}
