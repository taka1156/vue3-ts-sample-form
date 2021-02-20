import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
// https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom
// https://zenn.dev/konnyaku256/scraps/6e8f78642cde2c#comment-d7b575d6d29c05
export default defineConfig({
  publicDir: process.env.NODE_ENV === 'production' ? '/vitejs-sample/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  },
  build: {
    assetsDir: './'
  },
  plugins: [vue()]
});
