import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    proxy: {
      '/login': {
        target: 'http://localhost:3001', // Alterar para o novo endpoint
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/login/, ''), // Regra de reescrita para corresponder ao endpoint de destino
      },
    },
  },
});