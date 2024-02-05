import {defineConfig} from 'vite'
import { resolve } from 'path'

export default defineConfig({
	plugins: [],
	build: {
		rollupOptions: {
		  input: {
			main: resolve(__dirname, 'index.html'),
			pbnj: resolve(__dirname, 'food_pages/pbnj.html'),
			shwarma: resolve(__dirname, 'food_pages/shwarma.html'),
			tacos: resolve(__dirname, 'food_pages/tacos.html'),
		  },
		},
	  },
})