import { AstroUserConfig, defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/static";

const config: AstroUserConfig = {
  site: "https://esafev.com",
  output: "static",
  integrations: [preact(), sitemap(), robotsTxt(), mdx()],
  adapter: vercel({
    imageService: true,
  }),
};

export default defineConfig(config);
