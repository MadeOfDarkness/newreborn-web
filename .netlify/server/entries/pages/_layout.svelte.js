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
  default: () => Layout
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "*{padding:0;box-sizing:border-box;margin:0}body{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,\r\n			'Open Sans', 'Helvetica Neue', sans-serif;background:#060606;color:rgb(240, 234, 234)}header, main{margin:0 130px}nav.svelte-1628640.svelte-1628640{margin:1.5rem 0}nav.svelte-1628640.svelte-1628640,ul.svelte-1628640.svelte-1628640{display:flex;justify-content:space-between;align-items:center}.der-nav.svelte-1628640 a.svelte-1628640{color:#ff0000;font-size:20px;transition:all 0.35s}.der-nav.svelte-1628640 a.svelte-1628640:hover{color:rgb(240, 234, 234)}.izq-nav.svelte-1628640 a.svelte-1628640{transition:all 0.35s}.izq-nav.svelte-1628640 a.svelte-1628640:hover{border-bottom:1px solid #FF0000}.logo-btn-inicio.svelte-1628640.svelte-1628640{font-size:24px;font-weight:600}li.svelte-1628640.svelte-1628640{list-style:none;padding:0 20px 0 0}a.svelte-1628640.svelte-1628640{text-decoration:none;color:inherit}footer.svelte-1628640.svelte-1628640{background:#111111;color:rgb(240, 234, 234);display:flex;justify-content:space-between;align-items:center;padding:0 130px 1rem}.logo-footer.svelte-1628640.svelte-1628640{text-align:center}.logo-footer.svelte-1628640 img.svelte-1628640{width:50px;height:50px;border-radius:50%;margin-top:1rem}.footer-izq.svelte-1628640 p.svelte-1628640{font-weight:400;font-size:14px;text-align:left}.footer-der.svelte-1628640 ul.svelte-1628640{list-style-type:none;margin:0;padding:0;display:flex;align-items:center;justify-content:center;justify-items:center}.footer-der.svelte-1628640 li.svelte-1628640{float:right;padding:0 20px}.footer-der.svelte-1628640 a.svelte-1628640{text-align:right;text-decoration:none;transition:all .35s}.footer-der.svelte-1628640 a.svelte-1628640:hover{border-bottom:1px solid #FF0000}",
  map: null
};
const Layout = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header><nav class="${"svelte-1628640"}"><ul class="${"izq-nav svelte-1628640"}"><li class="${"logo-btn-inicio svelte-1628640"}"><a href="${"/"}" class="${"svelte-1628640"}">newreborn-web</a></li>
			<li class="${"svelte-1628640"}"><a href="${"/precios"}" class="${"svelte-1628640"}">precios</a></li>
			<li class="${"svelte-1628640"}"><a href="${"/contacto"}" class="${"svelte-1628640"}">contacto</a></li></ul>
		<ul class="${"der-nav svelte-1628640"}"><li class="${"svelte-1628640"}"><a href="${"https://www.facebook.com/newrebornweb"}" target="${"_blank"}" class="${"svelte-1628640"}"><i class="${"fa-brands fa-facebook"}"></i></a></li>
			<li class="${"svelte-1628640"}"><a href="${"https://www.instagram.com/new_reborn21/"}" target="${"_blank"}" class="${"svelte-1628640"}"><i class="${"fa-brands fa-instagram"}"></i></a></li>
			<li class="${"svelte-1628640"}"><a href="${"https://api.whatsapp.com/send?phone=523223193798&text=%C2%A1Hola!%20Quiero%20cotizar%20precios."}" target="${"_blank"}" class="${"svelte-1628640"}"><i class="${"fa-brands fa-whatsapp"}"></i></a></li>
			<li class="${"svelte-1628640"}"><a href="${"https://github.com/MadeOfDarkness"}" target="${"_blank"}" class="${"svelte-1628640"}"><i class="${"fa-brands fa-github"}"></i></a></li></ul></nav></header>
${slots.default ? slots.default({}) : ``}

<footer class="${"svelte-1628640"}"><div class="${"footer-izq svelte-1628640"}"><p class="${"svelte-1628640"}">NewReborn - Web \xA9 2022 | todos los derechos <br> reservados</p></div>
	<div class="${"logo-footer svelte-1628640"}"><img src="${"/favicon.svg"}" alt="${""}" class="${"svelte-1628640"}"></div>
	<div class="${"footer-der svelte-1628640"}"><nav class="${"svelte-1628640"}"><ul class="${"svelte-1628640"}"><li class="${"svelte-1628640"}"><a href="${"/"}" class="${"svelte-1628640"}">inicio</a></li>
				<li class="${"svelte-1628640"}"><a href="${"/precios"}" class="${"svelte-1628640"}">precios</a></li>
				<li class="${"svelte-1628640"}"><a href="${"/contacto"}" class="${"svelte-1628640"}">contacto</a></li></ul></nav></div>
</footer>`;
});
