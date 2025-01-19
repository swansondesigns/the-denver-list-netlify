import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const config = {
	plugins: [tailwindcss, autoprefixer, ...(process.env.NODE_ENV === 'production' ? [cssnano({ preset: 'default' })] : [])],
};

export default config;
