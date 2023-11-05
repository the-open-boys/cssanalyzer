import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: false,
  },
  // Sticking to Nx convention of src subdirectory for source files
  dir: {
    assets: 'src/assets',
    layouts: 'src/layouts',
    middleware: 'src/middleware',
    modules: 'src/modules',
    pages: 'src/pages',
    plugins: 'src/plugins',
    public: 'src/public',
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  vite: {
    plugins: [nxViteTsPaths()],
  },
});
