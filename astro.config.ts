import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

const config = {
  site: 'https://esafev.com',
  integrations: [
    preact(), 
    sitemap(), 
    robotsTxt()
  ]
};

export default defineConfig(config);
