import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Meetup from "@/models/Meetup";
import { MongoClient } from "mongodb";


export async function POST(req) {
  try {
    const data = await req.json();

    await connectDB();
    const newMeetup = new Meetup(data);
    await newMeetup.save();

    return NextResponse.json({ message: "Meetup added successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add meetup" }, { status: 500 });
  }
}


export async function GET() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return new Response(JSON.stringify(meetups), { status: 200 });
}
