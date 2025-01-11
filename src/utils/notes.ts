import type { Note } from '@/types/note';

function getNotes(): Note[] {
  // Get all MDX files from notes directory
  const notes: Note[] = Object.values(import.meta.glob("../pages/notes/*.mdx", { eager: true }));

  // Sort notes by publication date (newest first) and filter out unpublished ones
  return notes
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.pubDate);
      const dateB = new Date(b.frontmatter.pubDate); 
      return dateB.valueOf() - dateA.valueOf();
    })
    .filter((note) => note.frontmatter.published);
}

export { getNotes };
