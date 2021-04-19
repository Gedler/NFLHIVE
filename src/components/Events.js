import React, { useState, useEffect } from 'react'
import EventForm from "./EventForm";


function Events({ selectedTeam }){
    const [events, setEvents] = useState([])


function deleteEventPost(e) {
    fetch(`http://localhost:4000/upcomingEvents/${e.target.name}`, {
        method: "delete", })
        let filteredDelete = events.filter(event => {
            // console.log(e.target.name)
           
            return e.target.name !== event.id

        })
        setEvents(filteredDelete)
         console.log(e.target.name)
        

    
    
}
    useEffect( () => {
        fetch(`http://localhost:4000/upcomingEvents`)
        .then(res => res.json())
        .then(eventsArray => setEvents(eventsArray))
    }, [])

    const filterEventsList = events.filter(event=> { // Filtering the upComingEvents API
        return event.teamsId === selectedTeam.id  // return the teams that match the same ID from the teamsAPI. TeamsAPI was imported as a prop.
    })

    const eventsList = filterEventsList.map( event => {  // return the teams that match the teamsAPI for ALL TEAMS.
        return (
            <div key={ event.id }>
                <span> 
                    <p>{event.title}</p>   
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.opponent}</p>
                    <p>{event.location}</p>
                    <p>{event.comments}</p>
                    <button name= {event.id} onClick= {deleteEventPost}>Delete</button>
                </span>
            </div>
        )
    })
    console.log("Events")

    function handleFormSubmit(newFormSubmit) { 
        fetch("http://localhost:4000/upcomingEvents", {
            method: "POST",
            headers: {"content-type" : "application/json"}, 
            body: JSON.stringify(newFormSubmit)
        })
                .then(res => res.json())
                .then(function(newFormUpload){
                    setEvents([...events, newFormUpload])
                })
    }


    return ( 
        <div>
        <EventForm
            selectedTeam= {selectedTeam}
            handleFormSubmit= {handleFormSubmit}
        />
        { eventsList}
        </div>
    )

}





export default Events;