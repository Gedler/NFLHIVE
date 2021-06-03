import React, {useState} from "react"
import styled from 'styled-components'
import {Form} from 'semantic-ui-react'

const FormText = styled.h1`
    font-size: 40px;
    font-weight: bolder;`

const Input = styled.input`
   display: block;
   width: 100%;
   box-sizing: border-box;
   background-color: rgba(255, 255, 255, 88%);
   color: teal;
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
         like: 0
      }
      
      handleFormSubmit(newFormSubmit)

      setUserTitle('')
      setLocationInput('')
      setUserTime('')
      setUserDate('')
      setDescription('')
   }
    

    return (

      <Form size='mini' onSubmit= {handleSubmit} id="teamform">
         <FormText>New Event</FormText>
         <Form.Field>
         <input type="text"  name="post"  placeholder="Post Title" value={usertitle} onChange={(e)=>setUserTitle(e.target.value)}/> 
         </Form.Field>
         <Form.Field>
         <input type="text" name="location" placeholder="Place your location here" value={locationInput} onChange={(e)=>setLocationInput(e.target.value)}/>
         </Form.Field>
         <Form.Field>
         <input type="text" name="time" placeholder="What will be the time for your event?"  value={usertime} onChange={(e)=>setUserTime(e.target.value)}/>
         </Form.Field>
         <Form.Field>
         <input type="text" name="date" placeholder="What will be the date for your event?"  value={userdate} onChange={(e)=>setUserDate(e.target.value)}/>
         </Form.Field>
         <Form.Field>
         <textarea type="text" name="description" placeholder="Place event description here"  value={description} onChange={(e)=> setDescription(e.target.value)}/>
         </Form.Field>
         <Form.Field>
         <Input value="Add Event" type="submit"/>
         </Form.Field>
         
      </Form>
   
    )
}




export default EventForm;

