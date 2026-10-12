# Vargas & Asociados — Landing demo

Sitio de demostración (contenido 100 % ficticio) para un despacho jurídico. Next.js + TypeScript + Tailwind CSS v4.

## Requisitos
Node.js 18.18+ (recomendado 20+) y npm.

## Instalación
`npm install`

## Variables de entorno
Ninguna. Para producción, cambie `site.url` en `data/site.ts`.

## Desarrollo
`npm run dev` → http://localhost:3000

## Producción
`npm run build` y luego `npm start`

## Estructura
- `app/` layout, página, `robots.ts`, `sitemap.ts`, ícono
- `components/{layout,sections,ui,forms}/`
- `data/site.ts` contenido centralizado · `lib/` · `types/`

## Tecnologías
Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, animaciones CSS + IntersectionObserver (con `prefers-reduced-motion`). Sin backend ni dependencias externas en tiempo de ejecución.
