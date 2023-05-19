import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    optimizeDeps: false, // Disable dependency pre-bundling
  },
  rollupOptions: {
    input: {
      main: './src/index.jsx'
    }
  },
  entry: './src/index.jsx'
})
