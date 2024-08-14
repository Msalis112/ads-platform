import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [mkcert(), react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/video": {
        target: 'https://www.douyin.com/video',
        changeOrigin: true,
      } 
    },
    https: {},
  },
  base:"/ads-platform/"
})
