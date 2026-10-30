import { readFile } from 'node:fs/promises';
import type { APIRoute, GetStaticPaths } from 'astro';
import satori from 'satori';
import sharp from 'sharp';

import { SITE_DESCRIPTION, SITE_TITLE } from '@/consts';
import { getNotes } from '@/lib/notes';

const font = await readFile('public/fonts/BerkeleyMonoVariable.woff2');

export const getStaticPaths = (async () => {
  const notes = await getNotes();
  return [
    { params: { slug: 'index' }, props: { title: SITE_DESCRIPTION } },
    { params: { slug: 'notes' }, props: { title: 'Notes' } },
    ...notes.map((note) => ({
      params: { slug: note.id },
      props: { title: note.data.title },
    })),
  ];
}) satisfies GetStaticPaths;

// Colors are the klein theme from global.css: a shared image can't follow the viewer's color scheme
export const GET: APIRoute = async ({ props }) => {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          padding: 80,
          background: '#0a2675',
          color: '#e6ebfa',
          fontFamily: 'Berkeley Mono',
        },
        children: [
          { type: 'div', props: { style: { fontSize: 64, lineHeight: 1.25 }, children: props.title } },
          { type: 'div', props: { style: { fontSize: 28, color: '#9fb0e0' }, children: SITE_TITLE } },
        ],
      },
    },
    { width: 1200, height: 630, fonts: [{ name: 'Berkeley Mono', data: font }] },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
