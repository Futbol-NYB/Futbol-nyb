import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Futbol-nyb/', // 👈 usa exactamente el nombre del repo
  plugins: [vue()],
})
