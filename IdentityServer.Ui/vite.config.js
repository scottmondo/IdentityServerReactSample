import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl({
      certFile: '../localhost.crt',
      keyFile: '../localhost.key',
      pfxFile: '../localhost.pfx',
      passphrase: 'password',
    }),
  ],
  preview: {
    port: 7001,
    strictPort: true,
 },
 server: {
  port: 7001,
  strictPort: true,
  host: true,
  allowedHosts: true,
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