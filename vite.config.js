import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_URL,
    server: {
      port: process.env.VITE_PORT
    },
    preview: {
      port: process.env.VITE_PREVIEW_PORT
    }
  })
};
