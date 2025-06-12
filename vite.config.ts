import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/globals.scss";`,
      },
    },
  },
  optimizeDeps: {
    exclude: ['@mui/material', '@mui/icons-material'],
  },
});