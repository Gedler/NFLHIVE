import React, { useState, useEffect } from 'react'
import EventForm from "./EventForm";


function Events({ selectedTeam }){
    const [events, setEvents] = useState([])

    useEffect( () => {
        fetch(`http://localhost:4000/upcomingEvents`)
        .then(res => res.json())
        .then(eventsArray => setEvents(eventsArray))
    }, [])

    const filterEventsList = events.filter(event=> {
        return event.teamsId === selectedTeam.id
    })

    const eventsList = filterEventsList.map( event => {
        return (
            <div key={ event.id }>
                <span> 
                    <p>{event.title}</p>
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.opponent}</p>
                    <p>{event.location}</p>
                    <p>{event.comments}</p>
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