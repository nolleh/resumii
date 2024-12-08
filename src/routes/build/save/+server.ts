import { get } from 'svelte/store';
import type { RequestHandler } from './$types';
import { getYmdt } from '$lib/util';
import {
  User,
  Summary,
} from '$lib/store';

export const POST: RequestHandler = async ({ url, request }) => {
  class Body {
    user: User | null = null;
    summary: Summary | null = null;

    constructor(payload: Partial<Body>) {
      Object.assign(this, payload);
    }
  };

  const body: Body = await request.json();

  const regexForStripHTML = /(<([^>]+)>)/ig;
  const filename = body.user?.name?.replaceAll(regexForStripHTML, '').trim() + "_" + getYmdt(new Date()) + ".json";

  console.log(body);
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-type': "application/json",
      'Content-Disposition': `attachment; filename="${filename}"`
    },
  });
};
