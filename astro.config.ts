import { AstroUserConfig, defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

const config: AstroUserConfig = {
  site: "https://esafev.com",
  output: "static",
  integrations: [sitemap(), mdx()]
};

export default defineConfig(config);
