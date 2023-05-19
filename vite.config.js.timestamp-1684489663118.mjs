// vite.config.js
import { defineConfig } from "file:///home/runner/Mern/node_modules/vite/dist/node/index.js";
import react from "file:///home/runner/Mern/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0"
  },
  build: {
    outDir: "dist",
    optimizeDeps: false
    // Disable dependency pre-bundling
  },
  rollupOptions: {
    input: {
      main: "index.jsx"
    },
    entry: "index.jsx"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvTWVyblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL01lcm4vdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL01lcm4vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgfSxcbiAgIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgb3B0aW1pemVEZXBzOiBmYWxzZSwgLy8gRGlzYWJsZSBkZXBlbmRlbmN5IHByZS1idW5kbGluZ1xuICB9LFxuICByb2xsdXBPcHRpb25zOiB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIG1haW46ICdpbmRleC5qc3gnXG4gICAgfSxcblxuICBlbnRyeTogJ2luZGV4LmpzeCcsXG5cbn0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxTyxTQUFTLG9CQUFvQjtBQUNsUSxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQyxPQUFPO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUE7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsZUFBZTtBQUFBLElBQ2IsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUVGLE9BQU87QUFBQSxFQUVUO0FBQ0EsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
