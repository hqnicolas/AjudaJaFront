import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    allowedHosts: ['ajudaja.acoder.com.br'],
  },
  define: {
    'import.meta.env.VITE_API_BASE_URL': JSON.stringify('https://n3.acoder.com.br/'),
  },
})