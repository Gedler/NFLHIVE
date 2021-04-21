import React, {useState} from "react"
import styled from 'styled-components'


const Input = styled.input`
   display: block;
   width: 100%;
   box-sizing: border-box;
   background-color: rgba(255, 67, 88);
   color: whitesmoke;
   border-radius: 4px;
   margin: 2px;
   padding: 2px;`

function EventForm({selectedTeam, handleFormSubmit}) {
   console.log("EventForm")

   const [usertitle, setUserTitle] = useState("")
   const [locationInput, setLocationInput] = useState("")
   const [usertime, setUserTime] = useState("")
   const [userdate, setUserDate] = useState("")
   const [description, setDescription] = useState("")

   function handleSubmit(e) {
      e.preventDefault()
      let newFormSubmit = {
         teamsId: selectedTeam.id,
         title:  usertitle,
         location: locationInput,
         opponent: description,
         date: userdate,
         time: usertime,
         comments: []
      }
      
      handleFormSubmit(newFormSubmit)
   }
    

    return (

      <form onSubmit= {handleSubmit} id="teamform">
         <Input as="label">New Event</Input>
         <Input type="text"  name="post"  placeholder="Post Title" value={usertitle} onChange={(e)=>setUserTitle(e.target.value)}/> 
         <Input type="text" name="location" placeholder="Place your location here" value={locationInput} onChange={(e)=>setLocationInput(e.target.value)}/>
         <Input type="text" name="time" placeholder="What will be the time for your event?"  value={usertime} onChange={(e)=>setUserTime(e.target.value)}/>
         <Input type="text" name="date" placeholder="What will be the date for your event?"  value={userdate} onChange={(e)=>setUserDate(e.target.value)}/>
         <Input as="textarea" type="text" name="description" placeholder="Place event description here"  value={description} onChange={(e)=> setDescription(e.target.value)}/>
         <Input type="submit"/>
      </form>
   
    )
}




export default EventForm;

