import { a as createComponent, f as renderHead, r as renderComponent, e as renderSlot, g as renderScript, b as renderTemplate } from './fastro/server.CG65eha9.js';
import 'kleur/colors';
import { a as $$Header, $ as $$Footer } from './fFooter.BpvW2KYO.js';
/* empty css                         */
/* empty css                           */

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><title>Tienda Vanidosas</title><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"><link href="https://fonts.googleapis.com/css2?family=Radley:ital@0;1&display=swap" rel="stylesheet"><!-- Geoetiquetas para SEO local --><meta name="geo.region" content="ES"><meta name="geo.placename" content="España"><meta name="geo.position" content="40.388551;-3.756047,16"><meta name="description" content="Tienda Vanidosas - Medicina estética y belleza avanzada. Tratamientos personalizados para el cuidado de tu piel.">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/Users/luisdominguez/Documents/GitHub/TiendaVanidosas.Astro/tienda-vanidosas/src/layouts/estetica/Layout.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/luisdominguez/Documents/GitHub/TiendaVanidosas.Astro/tienda-vanidosas/src/layouts/estetica/Layout.astro?astro&type=script&index=1&lang.ts")} ${renderScript($$result, "/Users/luisdominguez/Documents/GitHub/TiendaVanidosas.Astro/tienda-vanidosas/src/layouts/estetica/Layout.astro?astro&type=script&index=2&lang.ts")} </body> </html>`;
}, "/Users/luisdominguez/Documents/GitHub/TiendaVanidosas.Astro/tienda-vanidosas/src/layouts/estetica/Layout.astro", void 0);

export { $$Layout as $ };
