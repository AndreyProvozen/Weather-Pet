import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import babel from 'vite-plugin-babel';
import { fileURLToPath } from 'url';

export default defineConfig({
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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/index.scss";',
      },
    },
  },
});
