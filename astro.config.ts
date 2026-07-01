import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://esafev.com",
  output: "static",
  markdown: {
    processor: unified(),
  },
  integrations: [sitemap(), mdx()]
});
