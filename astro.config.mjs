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
  // Aligns with Layout.astro canonical URLs (no trailing slash); avoids duplicate /path vs /path/.
  trailingSlash: 'never',
  i18n: {
    defaultLocale: "fi",
    locales: ["fi", "en", "sv"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [react(), sitemap({
    // Exclude pages that shouldn't be indexed
    filter: (page) => {
      const excludePatterns = [
        '/not-available',
        '/en/not-available',
        '/sv/not-available',
        '/kayttoohjeet',
        '/api/',
        '/_image'
      ];
      return !excludePatterns.some(pattern => page.includes(pattern));
    }
  })]
});