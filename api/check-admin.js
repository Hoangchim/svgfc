export default async function handler(req, res) {
  try {

    const ADMIN_IDS = String(process.env.ADMIN_IDS || "")
      .split(",")
      .map(id => Number(id.trim()));

    const userId = Number(req.query?.userId);

    return res.status(200).json({
      isAdmin: ADMIN_IDS.includes(userId)
    });

  } catch (err) {

    return res.status(500).json({
      success: false,
      error: String(err)
    });

  }
}
