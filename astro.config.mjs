import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eleyama.com',
  output: 'static',
  trailingSlash: 'always',
  // CSSをHTMLに埋め込まず別ファイルにする（_headers のCSP style-src 'self' に合わせる）
  build: { inlineStylesheets: 'never' },
  devToolbar: { enabled: false }
});
