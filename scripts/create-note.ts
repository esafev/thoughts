import { join } from 'path';

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

async function createNote() {
  const args = process.argv.slice(2);

  const title = args[0] || 'A new title';
  const description = args[1] || 'A new description';
  const slug = createSlug(title);

  const [dateWithoutMS] = new Date().toISOString().split('.');
  const currentDate = `${dateWithoutMS}Z`;

  const frontmatter = `---
title: ${title}
pubDate: ${currentDate}
description: ${description}
slug: ${slug}
published: false
---

# Title
## Subtitle
Content goes here...
`;

  const filename = `${slug}.mdx`;
  const filepath = join(process.cwd(), 'src', 'content', 'notes', filename);

  const file = Bun.file(filepath);
  const exists = await file.exists();

  if (exists) {
    console.log('The draft note already exists, please use it');
    return;
  }

  await Bun.write(filepath, frontmatter);

  console.log([
    `Created new post: ${filename}`,
    `Path: ${filepath}`,
    `Slug: ${slug}`,
    `Published: false (change to true when ready)`
  ].join('\n'));
}

createNote();
