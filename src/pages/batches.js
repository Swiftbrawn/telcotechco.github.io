// src/pages/api/batches.js
export default function handler(req, res) {
    if (req.method === "GET") {
      const batches = [
        { id: 1, name: "Batch A", date: "September 2024", image: "/we.jpg" },
        { id: 2, name: "Batch B", date: "November 2024", image: "/Digita.jpg" },
      ];
      res.status(200).json(batches);
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  