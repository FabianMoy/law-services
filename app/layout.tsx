import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Despacho jurídico en Monterrey (demo)`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: ["abogado en Monterrey", "despacho jurídico", "derecho corporativo", "derecho laboral", "derecho familiar"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_MX", url: site.url, siteName: site.name, title: `${site.name} | Despacho jurídico`, description: site.description },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}
