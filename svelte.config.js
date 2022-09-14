import netlify from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: netlify({ edge: true })
	},
	preprocess: preprocess({ defaults: { style: 'scss' } })
};

export default config;
