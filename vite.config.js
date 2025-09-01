import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/alabhya-portfolio/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 2000 // increases limit from 500 KB to 2 MB
  }
})