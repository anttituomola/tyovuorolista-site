import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { getFutureBlogPostPathnames } from './src/utils/blogPublishDate.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const futureBlogPostPathnames = getFutureBlogPostPathnames(
  path.join(__dirname, 'src/pages/posts')
);

// https://astro.build/config
export default defineConfig({
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
  integrations: [react(), icon(), sitemap({
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
      if (excludePatterns.some(pattern => page.includes(pattern))) {
        return false;
      }

      // Drop scheduled (future pubDate) posts — sitemap is build-time.
      try {
        const pathname = decodeURIComponent(new URL(page).pathname).replace(/\/$/, '') || '/';
        if (futureBlogPostPathnames.has(pathname)) {
          return false;
        }
      } catch {
        // Ignore malformed sitemap URLs
      }

      return true;
    }
  })]
});
