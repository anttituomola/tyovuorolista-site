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
  build: {
    // Inline all CSS into the HTML: removes 4 render-blocking requests that
    // PSI flags as the largest remaining LCP/FCP cost (~600 ms on mobile).
    inlineStylesheets: "always"
  },
  adapter: vercel({
    // Vercel Image Optimization: edge-cached and persists across deployments,
    // unlike the default /_image function whose cache purges on every deploy.
    imageService: true,
    imagesConfig: {
      sizes: [80, 160, 320, 600, 750, 1080, 1920],
      domains: []
    }
  }),
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
        '/register',
        '/api/',
        '/_image',
        // Merged posts — URLs 301 to hub pages, keep out of sitemap
        '/posts/tyovuoron_maksimipituus_ravintola-alalla',
        '/posts/tyovuoron_minimipituus_ravintola-alalla',
        '/posts/pisin_sallittu_tyopaiva_ravintola-alalla',
        '/posts/kuinka_pitka_tauko_tyovuorojen_valilla',
        '/posts/koska_tyovuorolista_pitaa_julkaista',
        '/posts/tyovuorolista_kaksi_viikkoa_ennen_kaupan_alalla'
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
        // English alias URLs canonicalize to /en/* — keep one copy in the sitemap
        if (pathname === '/about' || pathname === '/privacy' || pathname === '/contact') {
          return false;
        }
      } catch {
        // Ignore malformed sitemap URLs
      }

      return true;
    }
  })]
});
