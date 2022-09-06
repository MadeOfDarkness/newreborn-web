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
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".formContacto-contenedor.svelte-8kn3q5.svelte-8kn3q5{width:45%;overflow:hidden;margin:auto;padding:0 0 80px 0}.formContacto-contenedor.svelte-8kn3q5 .form.svelte-8kn3q5{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.formContacto-contenedor.svelte-8kn3q5 .form .input.svelte-8kn3q5{font-family:'Poppins', sans-serif;background:transparent;border:0;color:#000000;outline:none;border:1px solid #ff0000;padding:20px 10px;cursor:text}.formContacto-contenedor.svelte-8kn3q5 .form .input.svelte-8kn3q5::-webkit-input-placeholder{font-family:'Poppins', sans-serif;color:#000000}.formContacto-contenedor.svelte-8kn3q5 .form .input.svelte-8kn3q5:-ms-input-placeholder{font-family:'Poppins', sans-serif;color:#000000}.formContacto-contenedor.svelte-8kn3q5 .form .input.svelte-8kn3q5::-ms-input-placeholder{font-family:'Poppins', sans-serif;color:#000000}.formContacto-contenedor.svelte-8kn3q5 .form .input.svelte-8kn3q5::placeholder{font-family:'Poppins', sans-serif;color:#000000}.formContacto-contenedor.svelte-8kn3q5 .form input[type='text'].svelte-8kn3q5,.formContacto-contenedor.svelte-8kn3q5 .form input[type='email'].svelte-8kn3q5{display:inline-block;width:40%;margin-bottom:30px}.formContacto-contenedor.svelte-8kn3q5 .form textarea.svelte-8kn3q5{font-family:'Poppins', sans-serif;width:100%;margin-bottom:15px}.formContacto-contenedor.svelte-8kn3q5 .form input[type='submit'].svelte-8kn3q5{width:120px;text-align:center;padding:14px 0}.formContacto-contenedor.svelte-8kn3q5 .form input[type='submit'].svelte-8kn3q5:hover{cursor:pointer;color:#ffffff;background:#000000}section.info-contacto.svelte-8kn3q5.svelte-8kn3q5{margin:5rem 65px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start}section.info-contacto.svelte-8kn3q5 .info-contacto-textos h1.svelte-8kn3q5{font-size:24px;font-weight:500}section.info-contacto.svelte-8kn3q5 .info-contacto-textos p.svelte-8kn3q5{font-weight:300}section.info-contacto.svelte-8kn3q5 .info-contacto-textos a.svelte-8kn3q5{text-decoration:none;color:#000000;font-size:16px;font-weight:400;font-family:'Poppins', sans-serif}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>NewReborn - Web | Contacto</title>`, ""}`, ""}
<main><h1>\xA1Cont\xE1ctame para cualquier duda o aclaraci\xF3n!</h1>
	<section class="${"info-contacto svelte-8kn3q5"}"><div class="${"info-contacto-textos"}"><h1 class="${"svelte-8kn3q5"}">Ubicaci\xF3n de nuestro almac\xE9n</h1>
			<p class="${"svelte-8kn3q5"}">Nos encontramos en Av. Gonzalez Gallo #139 Vida Vallarta 48318 <br>Puerto Vallarta,
				Jalisco, M\xE9xico. <br>Ven para cotizar sobre precios y resolver dudas.
			</p>
			<i class="${"fa-solid fa-phone i-izq"}"><a href="${"tel:+523223193798"}" class="${"svelte-8kn3q5"}">322 319 3798</a></i> <br>
			<h1 class="${"svelte-8kn3q5"}">Horario de atenci\xF3n</h1>
			<p class="${"svelte-8kn3q5"}"><i class="${"fa-solid fa-calendar-days"}"></i> Lunes a Viernes <br>\xA0\xA0\xA0 \u2022 4:30 p.m.
				- 8:30 p.m.
			</p>
			<p class="${"svelte-8kn3q5"}"><i class="${"fa-solid fa-store-slash"}"></i> Domingo <br>\xA0\xA0\xA0 \u2022 Cerrado</p></div>
		<div class="${"formContacto-contenedor svelte-8kn3q5"}"><form action="${"https://formsubmit.co/zurdoxluis5@gmail.com"}" target="${"_blank"}" class="${"form svelte-8kn3q5"}" method="${"POST"}"><input type="${"hidden"}" name="${"_template"}" value="${"table"}">
				<input class="${"input svelte-8kn3q5"}" type="${"text"}" name="${"name"}" id="${"name"}" placeholder="${"Nombre"}" required pattern="${"[a-zA-Z\xE0\xE1\xE2\xE4\xE3\xE5\u0105\u010D\u0107\u0119\xE8\xE9\xEA\xEB\u0117\u012F\xEC\xED\xEE\xEF\u0142\u0144\xF2\xF3\xF4\xF6\xF5\xF8\xF9\xFA\xFB\xFC\u0173\u016B\xFF\xFD\u017C\u017A\xF1\xE7\u010D\u0161\u017E\xC0\xC1\xC2\xC4\xC3\xC5\u0104\u0106\u010C\u0116\u0118\xC8\xC9\xCA\xCB\xCC\xCD\xCE\xCF\u012E\u0141\u0143\xD2\xD3\xD4\xD6\xD5\xD8\xD9\xDA\xDB\xDC\u0172\u016A\u0178\xDD\u017B\u0179\xD1\xDF\xC7\u0152\xC6\u010C\u0160\u017D\u2202\xF0 ,.'-]" + (0, import_chunks.e)(48, true)}" title="${"Nombre vac\xEDo/no v\xE1lido (demasiado corto o largo)."}">
				<input class="${"input svelte-8kn3q5"}" type="${"email"}" name="${"email"}" id="${"email"}" placeholder="${"Email"}" required pattern="${"[a-zA-Z0-9._]" + (0, import_chunks.e)(254, true) + "@(gmail|hotmail|live|outlook|yahoo|alumnos|.udg)+(\\.)(com|gob|mx|net)"}" title="${"Escribe un correo electr\xF3nico v\xE1lido. Ejemplo: xxxx@gmail.com"}">
				<input type="${"hidden"}" name="${"_autoresponse"}" value="${"Muchas gracias por el mensaje, a la brevedad te responder\xE9!"}">
				<textarea class="${"input svelte-8kn3q5"}" name="${"textarea"}" id="${"msg"}" cols="${"30"}" rows="${"10"}" placeholder="${"Mensaje"}" required title="${"No puede estar vac\xEDo este campo y solo se permiten 300 caracteres."}" minlength="${"1"}" maxlength="${"300"}"></textarea> <input class="${"input svelte-8kn3q5"}" type="${"submit"}" value="${"Enviar"}"></form></div></section></main>
<section class="${"mapa-vallarta"}">
	<iframe src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119478.4497333058!2d-105.2945647725239!3d20.641018225872518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842145635063c87f%3A0x79cfbf9985bf5274!2sPuerto%20Vallarta%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1662231080909!5m2!1ses-419!2smx"}" height="${"400"}" style="${"border:0; width: 100%;"}" allowfullscreen="${""}" loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}"></iframe>
</section>`;
});
