export default async () => {
  return new Response(JSON.stringify({
    project: process.env.CLIENT_ID || "missing",
    email: process.env.API_KEY || "missing",
    key: process.env.CHECKSUM_KEY ? "exists" : "missing"
  }))
}
