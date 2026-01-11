import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimize for SEO and performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'react-icons'],
        },
      },
    },
    // Generate source maps for debugging
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 600,
  },
})
