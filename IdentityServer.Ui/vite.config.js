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
    port: 7001,
    strictPort: true,
 },
 server: {
  port: 7001,
  https: {
    key: './certs/localhost.key',
    cert: './certs/localhost.crt',
    passphrase: 'password',
  },
  strictPort: true,
  host: true,
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
  proxy: {
    '/api': {
      target: 'https://identityserverapi:7000',
      secure: false,
    },
    '/connect': {
      target: 'https://identityserverapi:7000',
      secure: false,
    },
    '/.well-known': {
      target: 'https://identityserverapi:7000',
      secure: false,
    },
    
  },
 },
});