import React, {useState} from "react"

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
             }
             handleFormSubmit(newFormSubmit)

    }
    

    return (

            <form onSubmit= {handleSubmit} id="teamform">
            <input type="text"  name="post"  placeholder="Post Title" value={usertitle} onChange={(e)=>setUserTitle(e.target.value)}/> 
            <input type="text" name="location" placeholder="Place your location here" value={locationInput} onChange={(e)=>setLocationInput(e.target.value)}/>
            <input type="text" name="time" placeholder="What will be the time for your event?"  value={usertime} onChange={(e)=>setUserTime(e.target.value)}/>
            <input type="text" name="date" placeholder="What will be the date for your event?"  value={userdate} onChange={(e)=>setUserDate(e.target.value)}/>
            <textarea type="text" name="description" placeholder="Place event description here"  value={description} onChange={(e)=> setDescription(e.target.value)}/>
            <input type="submit"/>
            </form>
            



    )
}




export default EventForm;

