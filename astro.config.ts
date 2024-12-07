import { AstroUserConfig, defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import cloudflare from '@astrojs/cloudflare';

const config: AstroUserConfig = {
  site: "https://esafev.com",
  output: "static",
  integrations: [preact(), sitemap(), robotsTxt(), mdx()],
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
};

export default defineConfig(config);
