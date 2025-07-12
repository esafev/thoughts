import { getCollection } from 'astro:content';

async function getNotes() {
  const notes = await getCollection('notes');
  
  // Sort notes by publication date (newest first) and filter out unpublished ones
  return notes
    .filter(note => note.data.published)
    .sort((a, b) => {
      return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
    });
}

export { getNotes };
