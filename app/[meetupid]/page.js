"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Details = () => {
  const params = useParams();
  const meetupId = params.meetupid;

  const [meetup, setMeetup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeetup() {
      try {
        const response = await axios.get(`/api/meetup/${meetupId}`);
        setMeetup(response.data);
      } catch (error) {
        console.error("Error fetching meetup:", error);
      } finally {
        setLoading(false);
      }
    }

    if (meetupId) {
      fetchMeetup();
    }
  }, [meetupId]);

  if (loading) return <h1>Loading...</h1>;
  if (!meetup) return <h1>Meetup not found</h1>;

  return (
    <div>
      <Card style={{ width: "80%", height: "80%" }}>
        <Image src={meetup.image} width={520} height={100} />
        <h2>{meetup.title}</h2>
        <h3>{meetup.address}</h3>
      </Card>
    </div>
  );
};

export default Details;
