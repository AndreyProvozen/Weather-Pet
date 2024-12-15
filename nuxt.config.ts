import { defineNuxtConfig } from 'nuxt/config';
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: { shim: false, strict: true },
  modules: ['nuxt-icons', '@pinia/nuxt', '@nuxt/image', '@vueuse/nuxt'],
  imports: { dirs: ['@/stores', '@/utils'] },
  runtimeConfig: {
    public: {
      // TODO: move to server config
      MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
    },
  },
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  },
  components: [
    { pathPrefix: false, path: '@/atoms' },
    { pathPrefix: false, path: '@/components' },
  ],
  vite: {
    css: {
      preprocessorOptions: { scss: { api: 'modern', additionalData: `@use "@/assets/styles/index" as *;` } },
    },
    build: { target: 'esnext', sourcemap: true },
  },
  ssr: false,
  build: { analyze: true },
  nitro: { compressPublicAssets: true },
});
