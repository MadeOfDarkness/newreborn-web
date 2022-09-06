<script lang="ts">
	let pattern = [
		{
			nombre: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,48}",
			correo: "[a-zA-Z0-9._]{1,254}@(gmail|hotmail|live|outlook|yahoo|alumnos|.udg)+(\.)(com|gob|mx|net)"
		}
	];
</script>

<svelte:head><title>NewReborn - Web | Contacto</title></svelte:head>
<main>
	<h1 class="titulo-contacto">¡Contáctame para cualquier <span>duda</span> o <span>aclaración</span>!</h1>
	<section class="info-contacto">
		<div class="info-contacto-textos">
			<h1>Áreas de servicio</h1>
			<p>
				Abarcamos todo Puerto Vallarta y Bahía de Banderas <br> Contáctanos para agendar una cita e ir hasta <br> tu domicilio particular, negocio u oficina. <br> O llámanos para agenda una cita por videoconferencia o por teléfono.
			</p>
			<i class="fa-solid fa-phone i-izq"><a href="tel:+523223193798">&nbsp; 322 319 3798</a></i> <br />
			<h1>Horario de atención</h1>
			<p>
				<i class="fa-solid fa-calendar-days" /> Lunes a Viernes <br />&nbsp;&nbsp;&nbsp; • 7:00 a.m.
				- 3:00 p.m. <br>&nbsp;&nbsp;&nbsp; Sabado <br />&nbsp;&nbsp;&nbsp; • 7:00 a.m.
				- 12:00 p.m. 
			</p>
			<p><i class="fa-solid fa-store-slash" /> Domingo <br />&nbsp;&nbsp;&nbsp; • Sin servicio</p>
		</div>
		<div class="formContacto-contenedor">
			<form action="https://formsubmit.co/zurdoxluis5@gmail.com" target="_blank" class="form" method="POST">
				<input type="hidden" name="_template" value="table">
				{#each pattern as combi }
					<input class="input" type="text" name="name" id="name" placeholder="Nombre" pattern="{combi.nombre}" title="Nombre vacío/no válido (demasiado corto o largo)." required>
					<input class="input" type="email" name="email" id="email" placeholder="Email" required pattern="{combi.correo}" title="Escribe un correo electrónico válido. Ejemplo: xxxx@gmail.com">
					<input type="hidden" name="_autoresponse" value="Muchas gracias por el mensaje, a la brevedad te responderé!">
					<textarea class="input" name="textarea" id="msg" cols="30" rows="10" placeholder="Mensaje" required title="No puede estar vacío este campo y solo se permiten 300 caracteres." minlength="1" maxlength="300"></textarea>
				{/each}
				<input class="input" type="submit" value="Enviar">
			</form>
		</div>
	</section>
</main>
<section class="mapa-vallarta">
	<!-- svelte-ignore a11y-missing-attribute -->
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119478.4497333058!2d-105.2945647725239!3d20.641018225872518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842145635063c87f%3A0x79cfbf9985bf5274!2sPuerto%20Vallarta%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1662231080909!5m2!1ses-419!2smx"
		height="400"
		style="border:0; width: 100%;"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>
</section>

<style lang="scss">
	.titulo-contacto {
		text-align: center;
		margin-top: 4rem;

		span {
			color: #ff0000;
			border-bottom: 1px solid rgb(240, 234, 234);
		}
	}

	.formContacto-contenedor {
		width: 45%;
		overflow: hidden;
		margin: auto;
		padding: 0 0 80px 0;
	}

	.formContacto-contenedor .form {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}

	.formContacto-contenedor .form .input {
		font-family: 'Poppins', sans-serif;
		background: rgba(34, 34, 34, 1);
		border: 0;
		color: rgb(240, 234, 234);
		outline: none;
		border: 1px solid #ff0000;
		padding: 20px 10px;
		cursor: text;
	}

	.formContacto-contenedor .form .input::-webkit-input-placeholder {
		color: rgb(240, 234, 234);
	}

	.formContacto-contenedor .form .input:-ms-input-placeholder {
		color: rgb(240, 234, 234);
	}

	.formContacto-contenedor .form .input::-ms-input-placeholder {
		color: rgb(240, 234, 234);
	}

	.formContacto-contenedor .form .input::placeholder {
		color: rgb(240, 234, 234);
	}

	.formContacto-contenedor .form input[type='text'],
	.formContacto-contenedor .form input[type='email'] {
		display: inline-block;
		width: 40%;
		margin-bottom: 30px;
	}

	.formContacto-contenedor .form textarea {
		font-family: 'Poppins', sans-serif;
		width: 100%;
		margin-bottom: 15px;
	}

	.formContacto-contenedor .form input[type='submit'] {
		width: 120px;
		text-align: center;
		padding: 14px 0;
	}

	.formContacto-contenedor .form input[type='submit']:hover {
		cursor: pointer;
		color: #ffffff;
		background: #000000;
	}

	section.info-contacto {
		margin: 5rem 65px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		-webkit-box-align: flex-start;
		-ms-flex-align: flex-start;
		align-items: flex-start;
	}

	.info-contacto-textos {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}

	section.info-contacto .info-contacto-textos h1 {
		font-size: 24px;
		font-weight: 500;
	}

	section.info-contacto .info-contacto-textos p {
		font-weight: 300;
	}

	section.info-contacto .info-contacto-textos a {
		text-decoration: none;
		color:  inherit;
		font-size: 16px;
		font-weight: 400;
		font-family: 'Poppins', sans-serif;		
	}

	.info-contacto-textos i {
		margin-top: 10px;
	}
</style>
