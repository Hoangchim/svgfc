export default async () => {
  return new Response(JSON.stringify({
    project: process.env.FB_PROJECT_ID || "missing",
    email: process.env.FB_CLIENT_EMAIL || "missing",
    key: process.env.FB_PRIVATE_KEY ? "exists" : "missing"
  }))
}
