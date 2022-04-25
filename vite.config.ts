import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '/src'),
      '#': path.resolve(__dirname, '/__mocks__'),
      '@': path.resolve(__dirname, '/src/lib'),
    },
  },
})
