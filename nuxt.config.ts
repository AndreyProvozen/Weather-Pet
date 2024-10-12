import { fileURLToPath } from 'url';
import { defineNuxtConfig } from 'nuxt/config';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import babel from 'vite-plugin-babel';

export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@nuxtjs/stylelint-module', '@nuxt/typescript-build'],
  typescript: { shim: false },
  components: [{ pathPrefix: false, path: '~/components' }],
  vite: {
    plugins: [
      vue(),
      svgLoader(),
      babel({
        babelConfig: {
          presets: ['@babel/preset-env', '@babel/preset-typescript'],
          plugins: [
            [
              'transform-imports',
              {
                '@/atoms': { transform: 'src/atoms/${member}', preventFullImport: true },
                '@/components': { transform: 'src/components/${member}', preventFullImport: true },
                '@/sections': { transform: 'src/sections/${member}', preventFullImport: true },
              },
            ],
          ],
        },
      }),
    ],
    resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
    server: { open: true },
    css: { preprocessorOptions: { scss: { api: 'modern', additionalData: '@import "@/assets/styles/index.scss";' } } },
    build: { target: 'esnext' },
  },
});
