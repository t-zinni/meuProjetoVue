import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: [
      'swipe-back-4WETACBP',   // Substitua pelo nome correto se necessário
      'index9-L2CUPTJB',       // Substitua pelo nome correto se necessário
      'hardware-back-button-I6V7GVKJ'    // Use o nome correto conforme o erro específico que você encontrou
    ]
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
