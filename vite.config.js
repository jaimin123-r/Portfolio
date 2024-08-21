import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    rollupOptions: {
      external: ["https://drive.google.com/file/d/1fCJXd753WYnLFS3p1jK8eqTJjJ56RVpv/view?usp=drive_link"]
    }
  }
})
