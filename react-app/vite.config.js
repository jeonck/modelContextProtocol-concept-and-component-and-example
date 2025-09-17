import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/modelContextProtocol-concept-and-component-and-example/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})