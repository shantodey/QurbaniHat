const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const targetUrl = `${BACKEND_URL}${url.pathname}${url.search}`;
  const headers = new Headers(req.headers);
  headers.delete("host");

  try {
    const res = await fetch(targetUrl, {
      method: req.method,
      headers,
      ...(req.method !== "GET" && req.method !== "HEAD" ? { body: await req.blob() } : {}),
      redirect: "manual",
    });
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: res.headers });
  } catch {
    return Response.json({ error: "Backend unavailable" }, { status: 503 });
  }
}

export const GET = handler;
export const POST = handler;