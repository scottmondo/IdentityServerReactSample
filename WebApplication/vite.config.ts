import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl({
      certDir: '../',
    }),
  ],
  preview: {
    port: 7002,
    strictPort: true,
 },
 server: {
  port: 7002,
  strictPort: true,
  host: true,
  origin: 'https://webapplication:7002',
 },
});