export default function getFishFactById(req, res) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "Only GET requests accepted" });
  }
  res.json({ byId: req.query.id, message: "getFishFactById" });
}
