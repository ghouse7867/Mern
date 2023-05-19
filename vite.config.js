import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },build: {
    outDir: 'dist', // Output directory for the built files
    assetsDir: 'assets', // Directory for static assets
    // You can add more build options as needed
  },
  rollupOptions: {
      input: {
        main: './src/index.jsx' // Specify your main entry file here
      }
  }
})
