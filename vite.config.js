import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages, set the base to your repo name
export default defineConfig({
  base: '/Recipe-App/',
  plugins: [react()],
});
