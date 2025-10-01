import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

const __filename = fileURLToPath(import.meta.url); //obtenemos ruta absoluta
const __dirname = dirname(__filename); //carpeta donde se encuentra

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname); //cargamos variables desde entorno evn.

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'https://app.zoddak.com',
          changeOrigin: true,
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('API-TOKEN', env.VITE_API_TOKEN);
            });
          },
        },
        '^/download': {
          target: 'https://admin.zoddak.com',
          changeOrigin: true,
        },
        '^/media': {
          target: 'https://app.zoddak.com',
          changeOrigin: true,
        },
      },
    },
  };
});
