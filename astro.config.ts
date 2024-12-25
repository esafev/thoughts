import { AstroUserConfig, defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";

const config: AstroUserConfig = {
  site: "https://esafev.com",
  output: "static",
  integrations: [sitemap(), robotsTxt(), mdx()]
};

export default defineConfig(config);
