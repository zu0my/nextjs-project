const POST = async (req: Request) => {
  const request = await req.json();
  console.log(request);

  return new Response("OK");
};

export { POST };
