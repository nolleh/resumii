import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
	// css: {
	//   preprocessorOptions: {
	//     scss: {
	//       additionalData: `
	//               @use '$lib/style/variables' as vr;
	//               @use '$lib/style/mixins' as mx;
	//       `,
	//       includePaths:['$lib/style']
	//     }
	//   }
	// }
});
