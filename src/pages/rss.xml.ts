import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { render } from "astro:content";
import { experimental_AstroContainer } from "astro/container";
import mdxRenderer from "@astrojs/mdx/server.js";

import { getNotes, getNoteSlug } from "@/lib/notes";

const siteURL = "https://esafev.com";
const markdownDeprecationWarning = "`markdown.gfm` and `markdown.smartypants` are deprecated";

async function createContainer() {
  const warn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === "string" && args[0].includes(markdownDeprecationWarning)) {
      return;
    }

    warn(...args);
  };

  try {
    return await experimental_AstroContainer.create();
  } finally {
    console.warn = warn;
  }
}

const container = await createContainer();
container.addServerRenderer({ renderer: mdxRenderer, name: 'mdx' });

export const GET: APIRoute = async ({ site }) => {
  const notes = await getNotes();
  return rss({
    title: "Vlad Esafev",
    description: "Not causing trouble, not touching anything, fixing the primus",
    site: site ?? siteURL,
    items: await Promise.all(
      notes.map(async (note) => {
        const { Content } = await render(note);
        const htmlContent = await container.renderToString(Content);

        return {
          link: `notes/${getNoteSlug(note)}`,
          title: note.data.title,
          description: note.data.description,
          pubDate: note.data.pubDate,
          content: htmlContent
        };
      })
    ),
  });
};
