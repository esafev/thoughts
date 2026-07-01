import type { APIRoute } from 'astro';

const siteURL = 'https://esafev.com';

function getTXT({ sitemapURL }: { sitemapURL: URL }) {
  const lines = [
    `User-agent: *`,
    `Allow: /`,
    `Sitemap: ${sitemapURL.href}`
  ];

  return lines.join('\n');
}

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site ?? siteURL);
  return new Response(getTXT({ sitemapURL }));
};
