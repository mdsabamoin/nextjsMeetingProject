import MeetupList from "@/components/meetups/MeetupList";


function HomePage (){
  const DUMMY_MEETUPS =[
    {id:"m1",title:"My first meeting",image:"https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",address:"Verginia 408,Mango,Jamshedpur"},
    {id:"m2",title:"My second meeting",image:"https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",address:"New York ,Manhattan"},
    {id:"m3",title:"My third meeting",image:"https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",address:"Australia , 8984"},
    {id:"m4",title:"My fourth meeting",image:"https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",address:"Washington DC,USA"},
    {id:"m5",title:"My fifth meeting",image:"https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",address:"Turkey,Egypt"},
  
  ]

  return <MeetupList  meetups={DUMMY_MEETUPS}/>
}

export default HomePage;