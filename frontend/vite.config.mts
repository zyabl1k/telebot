import react from '@vitejs/plugin-react'
import * as path from 'path';
import { defineConfig } from 'vite'
// import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 3000,
  },
});
