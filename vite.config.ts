import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ecommerce-product-page/",
  plugins: [react({
    babel: {
      plugins: ["babel-plugin-styled-components"],
    },
  })],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
})
