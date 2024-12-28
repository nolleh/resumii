import type { RequestHandler } from './$types';
import { getYmdt } from '$lib/util';
import { SaveBody } from '$lib/dto';

export const POST: RequestHandler = async ({ url, request }) => {
  const body: SaveBody = await request.json();

  const regexForStripHTML = /(<([^>]+)>)/gi;
  const filename =
    body.user?.name?.replaceAll(regexForStripHTML, '').trim() + '_' + getYmdt(new Date()) + '.json';

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-type': 'application/json',
      'Content-Disposition': `attachment; filename="${filename}"`
    }
  });
};
