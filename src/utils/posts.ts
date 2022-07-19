const getBlogPosts = () => 
  Object.values(import.meta.globEager('./posts/*.md'))
    .sort((a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf())
    .filter(a => !a.frontmatter.publshed);

export { getBlogPosts };