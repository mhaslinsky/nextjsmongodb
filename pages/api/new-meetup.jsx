import { MongoClient } from "mongodb";

// /api/new-meetup

async function Handler(req, res) {
  //req contains data about incoming request
  //res needed for sending back a response (node, express)

  if (req.method === "POST") {
    const data = req.body;

    //const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://mhaslinsky:pwBynA1m5JYhCmO8@cluster0.37zg8.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    //wrap in try catch to handle errors, like connection errors, or db write issues

    console.log(result);
    client.close();

    res.status(201).json({ message: "meetup inserted!" });
  }
}

export default Handler;
