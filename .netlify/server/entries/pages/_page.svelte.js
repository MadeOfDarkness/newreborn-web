var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.hero.svelte-1dzibg9.svelte-1dzibg9{height:50vh;display:flex;justify-content:center;align-items:center;flex-direction:column;background:url(/favicon-background.svg) no-repeat center;background-size:contain}.texto-hero.svelte-1dzibg9 h1.svelte-1dzibg9{text-align:center;font-size:60px;margin-bottom:10px}.texto-hero.svelte-1dzibg9 p.svelte-1dzibg9{text-align:center;font-size:18px;color:rgb(180, 180, 180)}.texto-hero.svelte-1dzibg9 span.svelte-1dzibg9{color:#ff0000;border-bottom:1px solid rgb(240, 234, 234)}section.proyectos.svelte-1dzibg9.svelte-1dzibg9{display:flex;justify-content:space-evenly}.card-proyectos.svelte-1dzibg9.svelte-1dzibg9{position:relative;width:365px;height:420px;box-shadow:#ff0000 0px 2px 8px 0px;border-radius:5px;transition:all 0.35s}.card-proyectos.svelte-1dzibg9.svelte-1dzibg9:hover{transform:translateY(-7%)}.card-img.svelte-1dzibg9.svelte-1dzibg9{width:100%;height:100%;border-radius:5px}.card-img-overlay.svelte-1dzibg9.svelte-1dzibg9{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,\n			'Open Sans', 'Helvetica Neue', sans-serif;position:absolute;top:0;left:0;width:100%;height:100%;background:rgb(0, 0, 0, 0.8);color:#ffffff;display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0;transition:all 0.35s;border-radius:5px}.card-img-overlay.svelte-1dzibg9.svelte-1dzibg9:hover{opacity:1}.card-img-overlay-titulo.svelte-1dzibg9.svelte-1dzibg9{font-size:20px;font-weight:bold;margin-bottom:15px}.card-img-overlay-btn.svelte-1dzibg9.svelte-1dzibg9{text-decoration:none;color:inherit;background:#ff0000;border:1px solid #ff0000;padding:10px 15px;border-radius:5px;transition:all 0.35s}.card-img-overlay-btn.svelte-1dzibg9.svelte-1dzibg9:hover{background:transparent;border:1px solid #ff0000}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let proyectos = [
    {
      img: "https://i.imgur.com/LOB0V4l.png",
      titulo: "Dulce mia p.v",
      link: "https://dulcemiapv.com/"
    },
    {
      img: "https://i.imgur.com/LhQ4T6O.png",
      titulo: "PF Eventos (en desarrollo)",
      link: "https://pfeventosyrepresentaciones.com/"
    },
    {
      img: "https://i.imgur.com/MdOxcqn.png",
      titulo: "Eventos Maravilla (en desarrollo)",
      link: "https://eventosmaravilla.com/"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>NewReborn - Web | Portfolio Web</title>`, ""}`, ""}
<main><section class="${"hero svelte-1dzibg9"}"><div class="${"texto-hero svelte-1dzibg9"}"><h1 class="${"svelte-1dzibg9"}">Soluciones <span class="${"svelte-1dzibg9"}">minimalistas</span> en desarrollo de software 2022</h1>
			<p class="${"svelte-1dzibg9"}">Desarrollador Front-End y Back-End universitario, capaz de crear m\xE1gia.</p></div></section>
	<section class="${"proyectos svelte-1dzibg9"}">${(0, import_chunks.d)(proyectos, (proyecto) => {
    return `<div class="${"card-proyectos svelte-1dzibg9"}"><img class="${"card-img svelte-1dzibg9"}"${(0, import_chunks.f)("src", proyecto.img, 0)} alt="${""}">
				<div class="${"card-img-overlay svelte-1dzibg9"}"><div class="${"card-img-overlay-titulo svelte-1dzibg9"}">${(0, import_chunks.e)(proyecto.titulo)}</div>
					<a class="${"card-img-overlay-btn svelte-1dzibg9"}" target="${"_blank"}"${(0, import_chunks.f)("href", proyecto.link, 0)}><i class="${"fa-solid fa-arrow-up"}"></i> Visitar</a></div>
			</div>`;
  })}</section>
	<section class="${"acerca-de-mi"}"><div class="${"foto-mia"}"><img src="${""}" alt="${"Luis F. Monta\xF1o | NewReborn - Web"}"></div>
		<div class="${"info-mia"}"><div class="${"titulo-info-mia"}"><h1>Acerca de m\xED</h1>
				<p>Me llamo Luis Fernando, soy estudiante de Ingenier\xEDa en Computaci\xF3n que dise\xF1a y
					desarrolla soluciones en software para tus necesidades.
				</p></div>
			<div class="${"cuerpo-info-mia"}"><h1>Yo en pocas palabras</h1>
				<p>Mientras estudio, estoy creando y desarrollando software para satisfacer las necesidades
					actuales. Desde crear un e-commerce hasta desarrollar un punto de venta de escritorio. Lo
					que destaca de m\xED es que soy una persona siempre dispuesta a aprender y mejorar, llena de
					pasi\xF3n, dedicaci\xF3n y responsabilidad.
				</p>
				<div class="${"tipos-desarrollo"}"><div class="${"desarrollo"}"><img src="${""}" alt="${""}">
						<p>Desarrollo web</p></div>
					<div class="${"desarrollo"}"><img src="${""}" alt="${""}">
						<p>Software para Windows</p></div>
					<div class="${"desarrollo"}"><img src="${""}" alt="${""}">
						<p>Dise\xF1ador de Bases de Datos</p></div></div></div></div></section>
	<section class="${"frase"}"><h1>Imaginar, analizar y desarrollar son las palabras clave para el \xE9xito contempor\xE1neo.</h1>
		<p>-Luis F. Monta\xF1o</p></section>
</main>`;
});
