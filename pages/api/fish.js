
export default function getAllFishFacts(req, res) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "Only GET requests accepted" });
  }
  res.status(200).json({ hello: "world", method: req.method });
}
