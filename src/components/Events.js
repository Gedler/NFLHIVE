import React, { useState, useEffect } from 'react'
import EventForm from "./EventForm";
import CommentsList from './CommentsList'


function Events({ selectedTeam }){
    const [events, setEvents] = useState([])
    console.log(events)

    function onCommentSubmit(updatedEvent) {
        console.log(updatedEvent)
        const filterEvents = events.map(event => {
            if(event.id === updatedEvent.id){
                event = updatedEvent
            }
            return event
        })
        console.log(filterEvents)
        setEvents(filterEvents)
    }

    function deleteEventPost(e) {
        let filteredDelete = events.filter(event => {

            return parseInt(e.target.name) !== event.id
        })

        fetch(`http://localhost:4000/upcomingEvents/${e.target.name}`, {
            method: "delete", })

        setEvents(filteredDelete)
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
                    <p>Title: {event.title}</p>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Description: {event.opponent}</p>
                    <p>Location: {event.location}</p>
                    <p>Comments: {event.comments}</p>
                    <button name={event.id} onClick={deleteEventPost}>Delete</button>
                </span>
                <CommentsList id={event.id} eventDetails={ event } onCommentSubmit={ onCommentSubmit }/>
            </div>
        )
    })

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
        { eventsList }
        </div>
    )

}





export default Events;