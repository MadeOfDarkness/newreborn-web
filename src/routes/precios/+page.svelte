<svelte:head><title>NewReborn - Web | Precios</title></svelte:head>
<main>
	<section class="titulo">
		<h1>¿Te gusta lo que ves? <span>Contrátame</span></h1>
		<p>
			Escoge un <span>paquete</span> que se adecúe a tus <span>necesidades</span>, desde un paquete
			<span>Básico</span>, hasta uno de
			<span>Negocios</span>. Y si lo requieres, puedes <span>cotizar</span> un paquete
			<span>personalizado</span>
		</p>
	</section>
	<section class="paquetes">
		<div data-aos="fade-right" data-aos-delay="100" data-aos-duration="700" class="card-paquete">
			<div class="card-titulo-paquete">
				<h1>Básico</h1>
				&nbsp;
			</div>
			<div class="card-precio-paquete">
				<p>$4,000 MXN</p>
				<i />
			</div>
			<div class="card-contenido-paquete">
				<p>
					Diseño web One Page ✔ <br /> 4 secciones básicas ✔ <br /> Formulario de contacto ✔<br /> Diseño
					responsivo ✔
				</p>
			</div>
			<a
				target="_blank"
				href="https://api.whatsapp.com/send?phone=523223193798&text=%C2%A1Hola!%20Quiero%20cotizar%20paquete%20básico."
				>Cotizar</a
			>
		</div>
		<div data-aos="fade-up" data-aos-delay="100" data-aos-duration="700" class="card-paquete negocios">
			<div class="card-titulo-paquete">
				<h1>Negocios</h1>
				&nbsp;
			</div>
			<div class="card-precio-paquete">
				<p>$7,200 MXN</p>
				<i />
			</div>
			<div class="card-contenido-paquete">
				<p>
					Comercio electrónico ✔<br /> Incluye todo lo del Paquete Intermedio ✔<br /> Pago en línea ✔
				</p>
			</div>
			<a
				target="_blank"
				href="https://api.whatsapp.com/send?phone=523223193798&text=%C2%A1Hola!%20Quiero%20cotizar%20paquete%20negocios."
				>Cotizar</a
			>
		</div>
		<div data-aos="fade-left" data-aos-delay="100" data-aos-duration="700" class="card-paquete">
			<div class="card-titulo-paquete">
				<h1>Intermedio</h1>
				&nbsp;
			</div>
			<div class="card-precio-paquete">
				<p>$5,600 MXN</p>
				<i>&nbsp;</i>
			</div>
			<div class="card-contenido-paquete">
				<p>
					Sitio Web con 5 páginas ✔<br /> 4 secciones básicas de inicio ✔<br /> Formulario de
					contacto ✔
					<br />
					Diseño responsivo ✔<br /> Botones de redes sociales ✔
				</p>
			</div>
			<a
				target="_blank"
				href="https://api.whatsapp.com/send?phone=523223193798&text=%C2%A1Hola!%20Quiero%20cotizar%20paquete%20intermedio."
				>Cotizar</a
			>
		</div>
	</section>
	<p class="dominios">*Todos los paquetes incluyen Dominio <b>.com</b> y <b>Alojamiento</b> web.</p>
	<section class="paquete-personalizado">
		<div class="textos">
			<h1>¿No encuentras lo que buscas?</h1>
			<p>Escríbeme por</p>
		</div>
		<div class="links">
			<a data-aos="fade-up" data-aos-delay="100" data-aos-duration="700" href="http://mailto:newrebornweb@gmail.com"><i class="fa-solid fa-envelope" /></a>
			<a data-aos="fade-up" data-aos-delay="100" data-aos-duration="700"
				target="_blank"
				href="https://api.whatsapp.com/send?phone=523223193798&text=%C2%A1Hola!%20Quiero%20cotizar%20paquete%20personalizado."
				><i class="fa-brands fa-whatsapp" /></a
			>
		</div>
	</section>
</main>

<style lang="scss">
	section.titulo {
		margin-top: 4rem;
		text-align: center;

		span {
			color: #ff0000;
			border-bottom: 1px solid rgb(240, 234, 234);
		}

		h1 {
			font-size: 2rem;
		}

		p {
			font-size: 20px;
			margin: 0 12rem;

			span {
				color: inherit;
			}
		}
	}

	section.paquetes {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 3rem;

		.card-paquete {
			background: rgb(34, 34, 34) 75%;
			box-shadow: #ff000099 0px 4px 20px;
			width: 350px;
			height: 440px;
			border-radius: 5px;
			text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;

			.card-titulo-paquete {
				border-bottom: 1px solid white;
				width: 100%;

				h1 {
					text-align: center;
					font-size: 22px;
				}
			}

			.card-precio-paquete {
				p {
					font-size: 28px;
				}

				i {
					border-bottom: 1px solid white;
					padding: 0 50px;
				}
			}

			.card-contenido-paquete {
				p {
					font-size: 16px;
					line-height: 25px;
				}
			}

			a {
				background: #ff0000;
				padding: 13px 22px;
				text-decoration: none;
				color: inherit;
				border-radius: 10px;
				font-size: 18px;
				border: 1px solid #ff0000;
				transition: all 0.35s ease;
			}

			a:hover {
				background: transparent;
			}
		}

		.negocios {
			height: 470px;
			background: #ff000030;
		}
	}
	.dominios {
		margin-top: 6px;
		text-align: center;

		b {
			color: #ff0000;
			border-bottom: 1px solid rgb(240, 234, 234);
		}
	}

	section.paquete-personalizado {
		display: flex;
		line-height: 40px;
		align-items: center;
		flex-direction: column;
		height: 370px;
		margin-top: 10rem;

		.textos {
			text-align: center;
			h1 {
				font-size: 1.8rem;
			}

			p {
				font-size: 20px;
			}
		}

		.links {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 200px;
			margin-top: 25px;
			a {
				text-decoration: none;
				color: inherit;
				width: 80px;
				height: 80px;
				border: 1px solid #ff0000;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 24px;
				transition: all 0.35s ease;
			}

			a:hover {
				background: #3b0000;
				text-decoration: underline;
			}
		}
	}

	@media (max-width: 1360px) {
		section.paquetes {

			.card-paquete {
				width: 265px;
				height: 350px;
			}

			.negocios {
				height: 400px;
			}
		}
	}
</style>
