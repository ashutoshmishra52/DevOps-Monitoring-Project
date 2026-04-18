export async function GET() {
  return Response.json({
    cpu: "35%",
    instances: 3
  });
}
