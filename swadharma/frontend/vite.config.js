import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Proxy /api to the backend during development
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})