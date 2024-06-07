import clientPromise from "../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db("mydatabase");

  switch (req.method) {
    case "POST":
      const user = await db.collection("users").insertOne(req.body);
      res.status(201).json(user.ops[0]);
      break;
    case "GET":
      const users = await db.collection("users").find({}).toArray();
      res.status(200).json(users);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
};
