import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import react from '@vitejs/plugin-react'; // Si usas React (opcional)

export default defineConfig({
  plugins: [
    react(), // Solo si usas React
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  build: {
    outDir: 'dist',  
    emptyOutDir: true 
  }
});