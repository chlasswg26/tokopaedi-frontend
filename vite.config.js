import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~react-image-gallery': path.resolve(__dirname, 'node_modules/react-image-gallery')
    }
  },
  build: {
    chunkSizeWarningLimit: 1600
  }
})
