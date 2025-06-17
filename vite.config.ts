import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['prop-types', 'react-is', '@mui/material/styles'],
    exclude: ['@mui/icons-material'],
  },
});