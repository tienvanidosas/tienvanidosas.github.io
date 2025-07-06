import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './fastro/server.DjzxxIYa.js';
import 'kleur/colors';
import 'clsx';

const clinicaData = [
	{
		slug: "manicura-tradicional",
		titulo_principal: "Manicura Tradicional",
		categoria: "Manos",
		subtitulo: "Manos impecables y naturales",
		descripcion: "Disfruta de una manicura clásica con acabado natural y duradero.",
		procedimiento: "<ul><li>Limpieza y preparación de uñas</li><li>Aplicación de esmalte</li></ul>",
		principal_img_link: "https://tiendavanidosas.com/wp-content/uploads/2025/03/manicura.jpg",
		duracion: "45 min",
		recuperacion: "Inmediata",
		grado_invasion: "Ninguno",
		enlace_reserva: "https://wa.me/34657505672",
		texto_boton_reserva: "Reservar cita"
	},
	{
		slug: "pedicura-spa",
		titulo_principal: "Pedicura Spa",
		categoria: "Manos",
		subtitulo: "Relajación y belleza para tus pies",
		descripcion: "Tratamiento completo para pies con exfoliación, hidratación y esmaltado.",
		procedimiento: "<ul><li>Exfoliación</li><li>Masaje relajante</li></ul>",
		principal_img_link: "https://tiendavanidosas.com/wp-content/uploads/2025/03/pedicura.jpg",
		duracion: "1 hora",
		recuperacion: "Inmediata",
		grado_invasion: "Ninguno",
		enlace_reserva: "https://wa.me/34657505672",
		texto_boton_reserva: "Reservar cita"
	},
	{
		slug: "pedicura-spa",
		categoria: "Pies",
		titulo_principal: "Pedicura Spa"
	},
	{
		slug: "facial-limpieza",
		categoria: "Cara",
		titulo_principal: "Limpieza Facial"
	}
];

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const categorias = [...new Set(clinicaData.map((item) => item.categoria))];
  const menuPorCategoria = categorias.map((cat) => ({
    categoria: cat,
    items: clinicaData.filter((item) => item.categoria === cat)
  }));
  return renderTemplate`${maybeRenderHead()}<nav class="navbar navbar-expand-lg nav-bg"> <div class="container-fluid"> <a class="navbar-brand" href="#"></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"> <path stroke="#A46460" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path> </svg> </span> </button> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav"> <li class="nav-item dropdown"> <a class="nav-link nav-text" href="/clinica"${addAttribute(`InicioDropdown`, "id")} aria-expanded="false">
Inicio
</a> </li> ${menuPorCategoria.map(({ categoria, items }) => renderTemplate`<li class="nav-item dropdown"> <a class="nav-link nav-text dropdown-toggle" href="#"${addAttribute(`${categoria}Dropdown`, "id")} role="button" data-bs-toggle="dropdown" aria-expanded="false"> ${categoria} </a> <ul class="dropdown-menu"${addAttribute(`${categoria}Dropdown`, "aria-labelledby")} style="background-color: var(--navBg);"> ${items.map((item) => renderTemplate`<li> <a class="dropdown-item nav-text"${addAttribute(`/clinica/${item.slug}`, "href")}> ${item.titulo_principal} </a> </li>`)} </ul> </li>`)} </ul> </div> </div> </nav>`;
}, "/Users/luisdominguez/Documents/GitHub/TiendaVanidosas.Astro/tienda-vanidosas/src/components/clinica/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="footer"> <p>Copyright &copy;2025 | Tienda Vanidosas</p> <a href="#">Contacto</a> <a href="#">Política de Privacidad</a> <a href="#">Términos & Condiciones</a> </div> <!-- Botón de WhatsApp --> <a href="https://wa.me/34657505672" target="_blank" class="whatsapp-button"> <img src="/Imgs/whats.webp" alt="WhatsApp" width="60" height="60"> </a>`;
}, "/Users/luisdominguez/Documents/GitHub/TiendaVanidosas.Astro/tienda-vanidosas/src/components/clinica/Footer.astro", void 0);

export { $$Footer as $, $$Header as a, clinicaData as c };
