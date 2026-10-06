import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eleyama.com',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false }
});
