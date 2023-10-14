import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import mdx from '@astrojs/mdx';

const config = {
  site: 'https://esafev.com',
  integrations: [
    preact(), 
    sitemap(), 
    robotsTxt(),
    mdx()
  ]
};

export default defineConfig(config);
