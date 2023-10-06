// TODO: Type it
function getNotes () {
  return Object.values(import.meta.glob('../pages/notes/*.md', { eager: true }))
  .sort((a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf())
  .filter(a => !a.frontmatter.publshed);
};

export { getNotes };