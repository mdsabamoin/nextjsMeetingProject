"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import MeetupList from "@/components/meetups/MeetupList"; // Ensure correct import

function HomePage() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function fetchMeetups() {
      try {
        const response = await axios.get("/api/meetup");
        setMeetups(response.data);
      } catch (error) {
        console.error("Error fetching meetups:", error);
      }
    }

    fetchMeetups();
  }, []);

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </div>
  );
}

export default HomePage;
