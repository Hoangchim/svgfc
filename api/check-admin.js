export default async (req) => {

  try {

    const ADMIN_IDS = String(process.env.ADMIN_IDS || "")
      .split(",")
      .map(id => Number(id.trim()));

    const url = new URL(req.url);

    const userId = Number(
      url.searchParams.get("userId")
    );

    return new Response(
      JSON.stringify({
        isAdmin: ADMIN_IDS.includes(userId)
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (err) {

    return new Response(
      JSON.stringify({
        success: false,
        error: String(err)
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  }

}
