// TODO: Type it
function getNotes() {
  return Object.values(
    import.meta.glob("../pages/notes/*.mdx", { eager: true }),
  )
    .sort(
      (a, b) =>
        new Date(b.frontmatter.pubDate).valueOf() -
        new Date(a.frontmatter.pubDate).valueOf(),
    )
    .filter((a) => a.frontmatter.published);
}

export { getNotes };
