import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@shared': path.resolve(__dirname, 'src/shared'),
			'@entities': path.resolve(__dirname, 'src/entities'),
			'@features': path.resolve(__dirname, 'src/features'),
			'@widgets': path.resolve(__dirname, 'src/widgets'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@app': path.resolve(__dirname, 'src/app'),
		},
	},
});
