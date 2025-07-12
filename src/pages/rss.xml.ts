import rss from "@astrojs/rss";

import { getNotes } from "@/utils/notes";

export async function GET({ site }) {
  const notes = await getNotes();
  return rss({
    title: "Vlad Esafev",
    description: "Not causing trouble, not touching anything, fixing the primus",
    site,
    items: notes.map((note) => ({
      link: `notes/${note.slug}`,
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.pubDate,
    })),
  });
}
