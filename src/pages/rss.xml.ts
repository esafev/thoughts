import rss from "@astrojs/rss";

import { getNotes } from "@utils/notes";

export function GET(context) {
  return rss({
    title: "Vlad Esafev",
    description:
      "Not causing trouble, not touching anything, fixing the primus",
    site: context.site,
    items: getNotes().map((note) => ({
      link: `notes/${note.frontmatter.slug}`,
      title: note.frontmatter.title,
      description: note.frontmatter.description,
      pubDate: note.frontmatter.pubDate,
    })),
  });
}
