import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// vite.config.js

export default {
  build: {
    rollupOptions: {
      external: ["C:/Users/jaimi/Desktop/RJ/PORTFOLIO/public/portfo_img.jpg"]
    }
  }
}
