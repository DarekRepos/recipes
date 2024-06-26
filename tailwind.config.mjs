/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  'special-elite': ['"Special Elite"', 'cursive'],
			  'josefin-sans': ['"Josefin Sans"', 'sans-serif']
			},
			colors: {
			  'custom-yellow': '#fbd059'
			}
		  }
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
