import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [
<<<<<<< HEAD
    vue() // <-- Essencial para o Vite ler os arquivos .vue sem quebrar
=======
    vue(),
>>>>>>> f409b0837a134d8fdd7c74f55bc07821392fa5d9
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})