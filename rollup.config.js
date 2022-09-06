import typescript from '@rollup/plugin-typescript';
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
		typescript({ sourceMap: !production }),
		svelte({
			preprocess: sveltePreprocess(),
			sourceMap: !production,
			postcss: {
				plugins: [require('autoprefixer')()]
			},
			scss: {
				prependData: `@import 'src/styles/variables.scss';`
			},
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: (css) => {
				css.write('public/bundle.css');
			}
		})
	]
};
