import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Se compila a /docs (GitHub Pages) con rutas relativas.
// index.html  -> presentación por clics sincronizada con el guion
// anterior.html -> versión previa (video de 40 planos)
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { headers: { 'Cache-Control': 'no-store' } },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        anterior: resolve(__dirname, 'anterior.html'),
      },
    },
  },
});
