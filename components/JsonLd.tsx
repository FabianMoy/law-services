import { site } from "@/data/site";

// Datos estructurados mínimos y marcados como demo; sin teléfono ni dirección reales.
export function JsonLd() {
  const data = { "@context": "https://schema.org", "@type": "LegalService", name: `${site.name} (demo)`, url: site.url, description: site.description, areaServed: "Monterrey, Nuevo León, México" };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
