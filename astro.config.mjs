import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://esafev.com',
  experimental: {
    integrations: true,
  },
  integrations: [
    preact(), 
    sitemap(), 
    robotsTxt()
  ]
});
