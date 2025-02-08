import { MongoClient, ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const meetupId = params.meetupid;

  if (!ObjectId.isValid(meetupId)) {
    return new Response(JSON.stringify({ message: "Invalid Meetup ID" }), { status: 400 });
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

  client.close();

  if (!meetup) {
    return new Response(JSON.stringify({ message: "Meetup not found" }), { status: 404 });
  }

  return new Response(JSON.stringify(meetup), { status: 200 });
}
