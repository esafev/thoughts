import rss from '@astrojs/rss';

import { getBlogPosts } from '../utils/posts';

const get = () => rss({
  title: 'Vlad Esafev',
  description: 'Not causing trouble, not touching anything, fixing the primus',
  site: import.meta.env.SITE,
  items: getBlogPosts(),
});

export { get };