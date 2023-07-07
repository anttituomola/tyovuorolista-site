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
  integrations: [react(), sitemap()]
});