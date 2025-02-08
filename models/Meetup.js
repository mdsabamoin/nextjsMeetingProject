import mongoose from "mongoose";

const MeetupSchema = new mongoose.Schema({
  title: String,
  image: String,
  address: String,
  description: String,
});

const Meetup = mongoose.models.Meetup || mongoose.model("Meetup", MeetupSchema);

export default Meetup;
