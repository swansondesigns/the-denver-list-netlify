module.exports = {
	content: [
		'./index.htm', // Stand in for front-page.php in the main project
		'./src/**/*.js', // Include all PHP and JS files in the src directory and subdirectories
	],
	theme: {
		extend: {
			keyframes: {
				fadeInDown: {
					'0%': { opacity: 0, transform: 'translateY(-10px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				fadeInLeft: {
					'0%': { opacity: 0, transform: 'translateX(-10px)' },
					'100%': { opacity: 1, transform: 'translateX(0)' },
				},
				filterAnimateIn: {
					'0%': { right: '7rem', opacity: 0 },
					'100%': { right: '0', opacity: 1 },
				},
			},
			animation: {
				fadeInDown: 'fadeInDown 0.5s ease forwards',
				fadeInLeft: 'fadeInLeft 0.5s ease forwards',
				filterAnimateIn: 'filterAnimateIn 0.6s ease forwards',
			},
		},
	},
	darkMode: 'selector',
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/container-queries'), require('@tailwindcss/forms')],
};
