import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/frontendsolicitudes/', // Ensure this matches your repository name
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173 // or any port you prefer
  },
  build: {
    outDir: 'build', // Ensure this matches the directory used in the deploy script
  },
});