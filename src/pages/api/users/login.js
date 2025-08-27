export default function login(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      message: "Hello from server"
    });
  }

  if (req.method === "POST") {
    const { name, email, password } = req.body;
    return res.status(200).json({
      success: true,
      data: { name, email, password }
    });
  }

  res.status(405).json({ error: "Method Not Allowed" });
}

