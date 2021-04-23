import React, { useState, useEffect } from 'react'
import EventForm from "./EventForm";
import styled from 'styled-components'
import ChatBox from './Chatbox'
import EventCard from './EventCard';




const SubmitedHeader = styled.h1`
    font-size: ${prop => prop.size || "40px"};
    font-weight: bolder;
    color: white;
    `

const EventsBox = styled.div`
    display: flex;
    `

const EventElement = styled.div`
        width: 240px;
        word-wrap: normal;
        margin: 4px;
        background: whitesmoke;
        border: 2px solid black;
        border-radius: 4px;
        color: teal;
        text-align: left;
        flex: 1;
        `

const EventsListScroll = styled.div`
    height: 800px;
    overflow: auto;`

function Events({ selectedTeam }){
    const [events, setEvents] = useState([])
    console.log(events)

    useEffect( () => {
        fetch(`http://localhost:4000/upcomingEvents`)
        .then(res => res.json())
        .then(eventsArray => setEvents(eventsArray))
    }, [])

    const filterEventsList = events.filter(event=> { // Filtering the upComingEvents API

        return event.teamsId === selectedTeam.id  // return the teams that match the same ID from the teamsAPI. TeamsAPI was imported as a prop.
    })

    function onDelete(deleteId){
        const filteredDelete = events.filter(event => {

            return parseInt(deleteId) !== event.id
        })

        setEvents(filteredDelete)
    }

    const eventsList = filterEventsList.map( event => { 
         // return the teams that match the teamsAPI for ALL TEAMS.
        return (
            <EventElement key={ event.id }>
                <span> 
                    <EventCard event={ event } onDelete={ onDelete }></EventCard>
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
                    selectedTeam={selectedTeam}
                    handleFormSubmit= {handleFormSubmit}
                />
                <SubmitedHeader font-size= "20px">Fan Chat</SubmitedHeader>
                <ChatBox
                        id = {selectedTeam.id}
                        />
            </div>
        <div>
            <SubmitedHeader style={{textAlign:'center'}}>Upcoming Events</SubmitedHeader>
            <EventsListScroll>
                { eventsList }
            </EventsListScroll>
        </div>
        </EventsBox>
    )

}





export default Events;