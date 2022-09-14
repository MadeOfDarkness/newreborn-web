<script>
	let proyectos = [
		{
			img: 'https://i.imgur.com/LOB0V4l.png',
			titulo: 'Dulce mia p.v',
			link: 'https://dulcemiapv.com/'
		},
		{
			img: 'https://i.imgur.com/LhQ4T6O.png',
			titulo: 'PF Eventos (en desarrollo)',
			link: 'https://pfeventosyrepresentaciones.com/'
		},
		{
			img: 'https://i.imgur.com/MdOxcqn.png',
			titulo: 'Eventos Maravilla (en desarrollo)',
			link: 'https://eventosmaravilla.com/'
		}
	];

	let desarrollo = [
		{
			foto: 'https://i.imgur.com/E24xhhs.png',
			titulo: 'Desarollo Web'
		},
		{
			foto: 'https://i.imgur.com/oljV5i8.png',
			titulo: 'Software para Windows'
		},
		{
			foto: 'https://i.imgur.com/DwaqH6L.png',
			titulo: 'Diseñador de Bases de Datos'
		}
	];
</script>

<svelte:head><title>NewReborn - Web | Portfolio Web</title></svelte:head>
<main>
	<section class="hero">
		<div class="texto-hero">
			<h1>Soluciones <span>minimalistas</span> en desarrollo de software 2022</h1>
			<p>Desarrollador Front-End y Back-End universitario, capaz de crear mágia.</p>
		</div>
	</section>
	<section class="proyectos">
		{#each proyectos as proyecto}
			<div class="card-proyectos">
				<img class="card-img" src={proyecto.img} alt="" />
				<div class="card-img-overlay">
					<div class="card-img-overlay-titulo">{proyecto.titulo}</div>
					<a class="card-img-overlay-btn" target="_blank" href={proyecto.link}
						><i class="fa-solid fa-arrow-up" /> Visitar</a
					>
				</div>
			</div>
		{/each}
	</section>
	<section class="acerca-de-mi">
		<div class="info-mia">
			<!--data-aos="fade-right" data-aos-delay="100" data-aos-duration="700"-->
			<div class="titulo-info-mia">
				<h1>¡Hola amigo!</h1>
				<p>
					Soy <span class="bred-titulo-info-mia">Luis Fernando</span>, estudiante de
					<span class="u-titulo-info-mia">Ingeniería</span>
					en <span class="u-titulo-info-mia">Computación</span> que diseña y desarrolla soluciones
					en <span class="u-titulo-info-mia">software</span> para tus necesidades.
				</p>
			</div>
			<div class="cuerpo-info-mia">
				<div class="tipos-desarrollo">
					{#each desarrollo as tipo}
						<div class="desarrollo">
							<img src={tipo.foto} alt="" />
							<p>{tipo.titulo}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="foto-mia">
			<!--data-aos="fade-left" data-aos-delay="100" data-aos-duration="700"-->
			<img src="https://i.imgur.com/mP0001M.png" alt="Luis F. Montaño | NewReborn - Web" />
		</div>
	</section>
</main>
<section class="frase">
	<h1>Imaginar, analizar y desarrollar son las palabras clave para el éxito contemporáneo.</h1>
	<p>-Luis F. Montaño</p>
</section>

<style>
	/*SECCIÓN HERO*/
	section.hero {
		height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: url(/favicon-background.svg) no-repeat center fixed;
		background-size: contain;
	}

	.texto-hero h1 {
		text-align: center;
		font-size: 60px;
		margin-bottom: 10px;
	}

	.texto-hero p {
		text-align: center;
		font-size: 18px;
		color: rgb(180, 180, 180);
	}

	.texto-hero span {
		color: #ff0000;
		border-bottom: 1px solid rgb(240, 234, 234);
	}

	/*SECCIÓN PROYECTOS*/
	section.proyectos {
		display: flex;
		justify-content: space-evenly;
	}

	.card-proyectos {
		position: relative;
		width: 365px;
		height: 420px;
		box-shadow: #ff000099 0px 4px 20px;
		border-radius: 5px;
		transition: all 0.35s;
	}

	.card-proyectos:hover {
		transform: translateY(-7%);
	}

	.card-img {
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}

	.card-img-overlay {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgb(0, 0, 0, 0.8);
		color: #ffffff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		opacity: 0;
		transition: all 0.35s;
		border-radius: 5px;
	}

	.card-img-overlay:hover {
		opacity: 1;
	}

	.card-img-overlay-titulo {
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 15px;
	}

	.card-img-overlay-btn {
		text-decoration: none;
		color: inherit;
		background: #ff0000;
		border: 1px solid #ff0000;
		padding: 10px 15px;
		border-radius: 5px;
		transition: all 0.35s;
	}

	.card-img-overlay-btn:hover {
		background: transparent;
		border: 1px solid #ff0000;
	}

	/*SECCIÓN ACERCA*/
	section.acerca-de-mi {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10rem 0 4rem;
	}

	.foto-mia {
		width: 410px;
		height: 500px;
		background: rgb(59, 17, 17);
		background: radial-gradient(circle, rgba(59, 17, 17, 1) 0%, rgba(34, 34, 34, 1) 75%);
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.foto-mia img {
		width: 100%;
		filter: grayscale(0.65);
	}

	.info-mia {
		width: 50%;
		box-shadow: #ff000099 0px 2px 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.titulo-info-mia {
		margin: 2rem 40px 0;
		text-align: left;
	}

	.titulo-info-mia h1 {
		font-size: 30px;
		font-weight: 900;
		color: #ff00008a;
		margin-bottom: 1rem;
	}

	.titulo-info-mia p {
		font-size: 35px;
		font-weight: 300;
	}

	.bred-titulo-info-mia {
		color: #ff00008a;
		background: rgb(34, 34, 34);
		padding: 0 5px;
	}

	.u-titulo-info-mia {
		border-bottom: 1px solid white;
	}

	.cuerpo-info-mia {
		width: 100%;
	}

	.tipos-desarrollo {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin: 3.5rem 0;
	}

	.desarrollo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/*SECCIÓN FRASE*/
	section.frase {
		background: #ff000030;
		padding: 20px 130px;
		margin-bottom: 5rem;
		text-align: right;
		line-height: 40px;
	}

	.frase h1 {
		font-style: italic;
		font-size: 26px;
	}

	.frase p {
		font-size: 18px;
	}

	@media only screen and (max-width: 1366px) {
		section.proyectos {
			.card-proyectos {
				width: 280px;
				height: 370px;
			}
		}

		section.acerca-de-mi {
			.info-mia {
				height: 400px;

				.titulo-info-mia p {
					font-size: 30px;
				}

				.cuerpo-info-mia {
					.tipos-desarrollo {
						.desarrollo {
							img {
								width: 48px;
							}

							p {
								font-size: 14px;
							}
						}
					}
				}
			}

			.foto-mia {
				width: 350px;
				height: 450px;
			}
		}

		section.frase {
			h1 {
				font-size: 22px;
			}

			p {
				font-size: 14px;
			}
		}
	}

	@media only screen and (max-width: 420px) {
		section.hero {
			background-attachment: inherit;

			.texto-hero {
				h1 {
					font-size: 32px;
				}

				p {
					font-size: 16px;
				}
			}
		}

		section.proyectos {
			display: flex;
			flex-direction: column;
			align-items: center;

			.card-proyectos {
				margin-bottom: 1.5rem;
			}
		}

		section.acerca-de-mi {
			flex-direction: column;

			.info-mia {
				width: 92%;
				margin-bottom: 1.5rem;

				.titulo-info-mia {
					margin: 2rem 3px 0;
					text-align: center;

					h1 {
						font-size: 26px;
					}

					p {
						font-size: 24px;
					}
				}
			}

			.foto-mia {
				height: 400px;
			}
		}

		section.frase {
			padding: 20px 7px;
			text-align: center;

			h1 {
				font-size: 22px;
			}
		}
	}
</style>
