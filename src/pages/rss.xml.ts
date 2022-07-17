import rss from '@astrojs/rss';

const get = () => rss({
  title: 'Vlad Esafev',
  description: 'Not causing trouble, not touching anything, fixing the primus',
  site: import.meta.env.SITE,
  items: import.meta.glob('./posts/*.md'),
});

export { get };