import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  output: "server",
  adapter: vercel(),
  site: 'https://www.tyovuorolista.fi/',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: "fi",
    locales: ["fi", "en", "sv"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [react(), sitemap()]
});