
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/one-of-one/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
