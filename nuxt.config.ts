import { defineNuxtConfig } from 'nuxt/config';
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: { shim: false, strict: true },
  modules: ['nuxt-icons', '@pinia/nuxt'],
  imports: { dirs: ['@/stores'] },
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
  components: [
    { pathPrefix: false, path: '@/components' },
    { pathPrefix: false, path: '@/atoms' },
  ],
  vite: {
    server: { open: true },
    css: { preprocessorOptions: { scss: { api: 'modern', additionalData: '@import "@/assets/styles/index.scss";' } } },
    build: { target: 'esnext', sourcemap: true },
  },
  build: { analyze: true },
  nitro: { compressPublicAssets: true },
});
