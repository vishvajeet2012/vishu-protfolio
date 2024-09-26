import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // Mark /src/main.jsx as an external module to prevent Rollup from bundling it
      external: ['/src/main.jsx'],
    },
  },
});
