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
			},
			screens: {
				'sm': '40em',  // 640px
				'md': '48em',  // 768px
				'lg': '64em',  // 1024px
				'xl': '80em',  // 1280px
			  },
		  }
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
