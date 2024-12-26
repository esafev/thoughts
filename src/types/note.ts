type Frontmatter = {
  title: string;
  description: string;
  pubDate: Date;
  slug: string;
  published: boolean;
};

export type Note = {
  url: string;
  frontmatter: Frontmatter;
};
