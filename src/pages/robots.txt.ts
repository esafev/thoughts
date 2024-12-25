function getTXT({ sitemapURL }: { sitemapURL: URL }) {
  const lines = [
    `User-agent: *`,
    `Allow: /`,
    `Sitemap: ${sitemapURL.href}`
  ];

  return lines.join('\n');
}

export function GET({ site }): Response {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getTXT({ sitemapURL }));
}
