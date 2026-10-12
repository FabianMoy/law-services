import { nav, services, site } from "@/data/site";

export function Footer() {
  const link = "text-white/70 transition hover:text-white";
  return (
    <footer className="bg-petrol-950 px-5 pt-16 pb-8 text-sm text-white">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl">Vargas <span className="text-gold">&amp;</span> Asociados</p>
          <p className="mt-3 text-white/70">Despacho jurídico ficticio. Sitio de demostración, no constituye asesoría legal.</p>
        </div>
        <nav aria-label="Navegación del pie"><h2 className="mb-3 font-medium">Navegación</h2>
          <ul className="space-y-2">{nav.map((n) => <li key={n.href}><a className={link} href={n.href}>{n.label}</a></li>)}</ul></nav>
        <div><h2 className="mb-3 font-medium">Servicios</h2>
          <ul className="space-y-2">{services.map((s) => <li key={s.title} className="text-white/70">{s.title}</li>)}</ul></div>
        <div><h2 className="mb-3 font-medium">Contacto</h2>
          <ul className="space-y-2 text-white/70"><li>{site.phone}</li><li className="break-words">{site.email}</li><li>{site.address}</li></ul>
          <ul className="mt-4 flex flex-wrap gap-4">{site.social.map((s) => <li key={s.label}><a className={link} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-white/60 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. Contenido de demostración.</p>
        <p>Aviso de privacidad (ficticio): los datos del formulario no se envían ni almacenan.</p>
      </div>
    </footer>
  );
}
