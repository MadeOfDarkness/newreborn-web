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
var import_chunks = require("../../../chunks/index.js");
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>NewReborn - Web | Precios</title>`, ""}`, ""}
<main><h1>\xBFTe gusta lo que ves? Contr\xE1tame</h1>
	<p>Escoge un paquete que se adec\xFAe a tus necesidades, desde un paquete B\xE1sico, hasta uno de
		Negocios. Y si lo requieres, puedes cotizar un paquete personalizado
	</p>
	<section class="${"paquetes"}"><div class="${"card-paquete"}"><div class="${"card-titulo-paquete"}"><h1>B\xE1sico</h1></div>
			<div class="${"card-precio-paquete"}"><p>$4,000 MXN</p>
				<i></i></div>
			<div class="${"card-contenido-paquete"}"><p>Dise\xF1o web One Page <br> 4 secciones b\xE1sicas <br> Formulario de contacto <br> Dise\xF1o responsivo</p></div>
      <a href="${"https://api.whatsapp.com/send?phone=523223193798&text=%C2%A1Hola!%20Quiero%20cotizar%20paquete%20b\xE1sico."}">Cotizar</a></div>
    <div class="${"card-paquete negocios"}"><div class="${"card-titulo-paquete"}"><h1>Negocios</h1></div>
			<div class="${"card-precio-paquete"}"><p>$7,200 MXN</p>
				<i></i></div>
			<div class="${"card-contenido-paquete"}"><p>Comercio electr\xF3nico <br> Incluye todo lo del Paquete Intermedio <br> Pago en l\xEDnea</p></div>
      <a href="${"https://api.whatsapp.com/send?phone=523223193798&text=%C2%A1Hola!%20Quiero%20cotizar%20paquete%20negocios."}">Cotizar</a></div>
    <div class="${"card-paquete"}"><div class="${"card-titulo-paquete"}"><h1>Intermedio</h1></div>
			<div class="${"card-precio-paquete"}"><p>$5,600 MXN</p>
				<i></i></div>
			<div class="${"card-contenido-paquete"}"><p>Sitio Web con 5 p\xE1ginas <br> 4 secciones b\xE1sicas de inicio <br> Formulario de contacto <br> Dise\xF1o responsivo <br> Botones de redes sociales</p></div>
      <a href="${"https://api.whatsapp.com/send?phone=523223193798&text=%C2%A1Hola!%20Quiero%20cotizar%20paquete%20intermedio."}">Cotizar</a></div>
    <p>*Todos los paquetes incluyen Dominio <b>.com</b> y <b>Alojamiento</b> web.</p></section>
  <section class="${"paquete-personalizado"}"><h1>\xBFNo encuentras lo que buscas?</h1>
    <p>Escr\xEDbeme por</p>
    <a href="${"mailto:newrebornweb@gmail.com"}"><i class="${"fa-solid fa-envelope"}"></i> Email</a>
    <a href="${"https://api.whatsapp.com/send?phone=523223193798&text=%C2%A1Hola!%20Quiero%20cotizar%20paquete%20personalizado."}"><i class="${"fa-brands fa-whatsapp"}"></i> WhatsApp</a></section></main>`;
});
