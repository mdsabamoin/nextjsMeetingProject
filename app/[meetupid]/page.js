"use client"
import { useParams } from "next/navigation";
import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";


const details = ()=>{

  const params = useParams();
  const meetupId = params.meetupid;

  console.log("meetupid from params",meetupId);
  const DUMMY_MEETUPS =[
    {id:"m1",title:"My first meeting",image:"https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",address:"Verginia 408,Mango,Jamshedpur"},
    {id:"m2",title:"My second meeting",image:"https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",address:"New York ,Manhattan"},
    {id:"m3",title:"My third meeting",image:"https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",address:"Australia , 8984"},
    {id:"m4",title:"My fourth meeting",image:"https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",address:"Washington DC,USA"},
    {id:"m5",title:"My fifth meeting",image:"https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",address:"Turkey,Egypt"},
  
  ]   

  const meetup = DUMMY_MEETUPS.find((m) => m.id.toString() === meetupId);
  console.log("meetup",meetup)
  if (!meetup) {
    return <h1>Meetup not found</h1>;
  }

    return <div>
        <Card style={{ width: '80%',height:"80%" }}>
      <Image src={meetup.image} width={520} height={100}/>
      <h2>{meetup.title}</h2>
      <h3>{meetup.address}</h3>
      
    </Card>
    </div>


}

export default details;