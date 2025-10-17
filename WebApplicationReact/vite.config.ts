import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  preview: {
    port: 7003,
    strictPort: true,
 },
 server: {
  port: 7003,
  https: {
    key: './localhost.key',
    cert: './localhost.crt',
    passphrase: 'password',
  },
  strictPort: true,
  host: true,
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
 },
});