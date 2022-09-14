<script>
	
</script>

<header>
	<nav>
		<li class="logo-btn-inicio">
			<a href="/">newreborn-web</a>
		</li>
		<ul class="izq-nav">
			<li>
				<a href="/precios">precios</a>
			</li>
			<li>
				<a href="/contacto">contacto</a>
			</li>
		</ul>
		<ul class="der-nav">
			<li>
				<a href="https://www.facebook.com/newrebornweb" target="_blank"
					><i class="fa-brands fa-facebook" /></a
				>
			</li>
			<li>
				<a href="https://www.instagram.com/new_reborn21/" target="_blank"
					><i class="fa-brands fa-instagram" /></a
				>
			</li>
			<li>
				<a
					href="https://api.whatsapp.com/send?phone=523223193798&text=%C2%A1Hola!%20Quiero%20cotizar%20precios."
					target="_blank"><i class="fa-brands fa-whatsapp" /></a
				>
			</li>
			<li>
				<a href="https://github.com/MadeOfDarkness" target="_blank"
					><i class="fa-brands fa-github" /></a
				>
			</li>
		</ul>
		<i class="fa-solid fa-bars" id="btn-nav"/>
	</nav>
</header>
<slot />

<footer>
	<div class="footer-izq">
		<p>NewReborn - Web &copy; 2022 | todos los derechos <br /> reservados</p>
	</div>
	<div class="logo-footer">
		<img src="/favicon.svg" alt="" />
		NewReborn - Web
	</div>
	<div class="footer-der">
		<nav>
			<ul>
				<li><a href="/">inicio</a></li>
				<li><a href="/precios">precios</a></li>
				<li><a href="/contacto">contacto</a></li>
			</ul>
		</nav>
	</div>
</footer>

<style lang="scss">
	:global(*) {
		padding: 0;
		box-sizing: border-box;
		margin: 0;
		/*outline: 1px solid limegreen !important;*/
	}
	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		background: #060606;
		color: rgb(240, 234, 234);
	}

	:global(header, main) {
		margin: 0 130px;
	}

	@media only screen and (max-width: 420px) {
		:global(header, main) {
			margin: 0;
		}
	}

	/*NAVBAR CSS*/
	nav {
		margin: 1.5rem 0;
	}

	nav,
	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.der-nav a {
		color: #ff0000;
		font-size: 20px;
		transition: all 0.35s;
	}

	.der-nav a:hover {
		color: rgb(240, 234, 234);
	}

	.izq-nav a {
		transition: all 0.35s;
	}

	.izq-nav a:hover {
		border-bottom: 1px solid #ff0000;
	}

	.logo-btn-inicio {
		font-size: 24px;
		font-weight: 600;
	}

	li {
		list-style: none;
		padding: 0 20px 0 0;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	/*FOOTER CSS*/
	footer {
		background: #111111;
		color: rgb(240, 234, 234);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 130px 2.5rem;
	}

	.logo-footer {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #ff0000;
	}

	.logo-footer img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-top: 1rem;
	}

	.footer-izq p {
		font-weight: 400;
		font-size: 14px;
		text-align: left;
	}

	.footer-der ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-items: center;
	}

	.footer-der li {
		float: right;
		padding: 0 20px;
	}

	.footer-der a {
		text-align: right;
		text-decoration: none;
		transition: all 0.35s;
	}

	.footer-der a:hover {
		border-bottom: 1px solid #ff0000;
	}

	@media only screen and (max-width: 420px) {
		footer {
			padding: 2rem 0 2.5rem;
			flex-direction: column-reverse;

			.footer-der li {
				padding: 0 20px;
			}

			.logo-footer {
				margin-bottom: 2rem;
			}
		}
	}
</style>
