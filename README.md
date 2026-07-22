# Plantilla — Servicios profesionales

Landing de una sola página para empresas que venden servicios B2B: consultoras,
despachos, firmas de ingeniería, agencias y similares. Construida con Astro y
Tailwind CSS, sin dependencias de runtime y optimizada para SEO y rendimiento.

Forma parte del catálogo de plantillas de **[Ferser](https://ferser.co)**.

## Secciones

Navegación, hero con tarjeta de diagnóstico, grilla de servicios, sección
"nosotros", indicadores, bloque de contacto y footer.

## Stack

- [Astro](https://astro.build) 5 (salida estática)
- [Tailwind CSS](https://tailwindcss.com) 4
- Iconos [Lucide](https://lucide.dev) renderizados como SVG en tiempo de build (cero JS)

## Desarrollo

```bash
bun install
bun run dev       # http://localhost:4321
bun run build     # genera dist/
bun run preview   # sirve el build
```

## Personalización

Todo el contenido vive en un único archivo:

- **`src/templates/servicios/data.ts`** — nombre, textos, servicios, datos de
  contacto, redes y copyright. Cambia esos valores y el sitio se actualiza.
- **`astro.config.mjs`** — ajusta `site` con el dominio definitivo (afecta el
  canonical, el sitemap y las etiquetas Open Graph).
- **`public/favicon.svg`** y **`public/og.png`** — reemplázalos por los del cliente.

## Despliegue

Genera un sitio estático en `dist/`, desplegable en cualquier hosting estático
(Netlify, Vercel, Cloudflare Pages, un VPS, etc.).
