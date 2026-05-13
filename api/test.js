export default async () => {
  return new Response(JSON.stringify({
    project: process.env.CLIENT_ID || "missing",
    email: process.env.API_KEY || "missing",
    key: process.env.CHECKSUM_KEY || "missing",
    Admin: key: process.env.ADMIN_IDS || "missing"
  }))
}
