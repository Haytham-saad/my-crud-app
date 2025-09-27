let data = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { item } = req.body;
      if (item) {
        data.push(item);
        res.status(200).json({ success: true, data });
      } else {
        res.status(400).json({ success: false, message: "No item provided" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
