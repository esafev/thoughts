import type { Note } from '@/types/note';

function getNotes(): Note[] {
  const notes: Note[] = Object.values(import.meta.glob("../pages/notes/*.mdx", { eager: true }));

  return notes
    .sort(
      (a, b) =>
        new Date(b.frontmatter.pubDate).valueOf() -
        new Date(a.frontmatter.pubDate).valueOf(),
    )
    .filter((a) => a.frontmatter.published);
}

export { getNotes };
