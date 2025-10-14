export const runtime = "nodejs";

export const savedTokens = new Set<string>();

export async function POST(request: Request) {
  const { token } = await request.json();
  savedTokens.add(token);
  console.log("savedToken: ", token);

  return new Response("Token saved", { status: 200 });
}
