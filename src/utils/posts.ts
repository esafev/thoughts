// TODO: Type it
function getBlogPosts () {
  return Object.values(import.meta.glob('../pages/posts/*.md', { eager: true }))
  .sort((a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf())
  .filter(a => !a.frontmatter.publshed);
};

export { getBlogPosts };