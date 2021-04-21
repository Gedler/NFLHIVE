import React, { useState, useEffect } from 'react'
import EventForm from "./EventForm";
import styled from 'styled-components'
import ChatBox from './Chatbox'

const EventsBox = styled.div`
    display: inline-flex;`

const EventsList = styled.p`
    margin: 2px;
    color: blue;`

const EventElement = styled.div`
        margin: 4px;
        background: dodgerblue;
        border: 2px solid black;
        border-radius: 4px;
        color: white;
        text-align: left;
        `


function Events({ selectedTeam }){
    const [events, setEvents] = useState([])
    console.log(events)

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
            <EventElement key={ event.id }>
                <span> 
                    <EventsList>Title: {event.title}</EventsList>
                    <EventsList>Date: {event.date}</EventsList>
                    <EventsList>Time: {event.time}</EventsList>
                    <EventsList>Description: {event.opponent}</EventsList>
                    <EventsList>Location: {event.location}</EventsList>
                    <EventsList>Comments: {event.comments}</EventsList>
                    <EventsList as="button" name={event.id} onClick={deleteEventPost}>Delete</EventsList>
                </span>
            </EventElement>
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
        <EventsBox>
            <div>
                <EventForm
                    selectedTeam= {selectedTeam}
                    handleFormSubmit= {handleFormSubmit}
                />
                <h2>Fan Chat</h2>
                <ChatBox
                        id = {selectedTeam.id}
                        />
            </div>
        <div>
            <h4 style={{textAlign:'center'}}>Upcoming Events</h4>
            { eventsList }
        </div>
        </EventsBox>
    )

}





export default Events;