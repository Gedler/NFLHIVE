import React, { useState, useEffect } from 'react'
import EventForm from "./EventForm";
import styled from 'styled-components'
import ChatBox from './Chatbox'




const SubmiitedHeader = styled.h1`
    font-family: fantasy ;
    font-style: Copperplate ;
    font-size: ${prop => prop.size || "60px"};`

const EventsBox = styled.div`
    display: inline-flex;
    `

const EventsList = styled.p`
    margin: 2px;
    color: teal;
    font-weight: bold;
    word-wrap: normal;
    `

const EventElement = styled.div`
        width: 400px;
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
    width: 400px;
    overflow: auto;`

function Events({ selectedTeam }){
    const [like, setLike] = useState(0)
    const [events, setEvents] = useState([])
    console.log(events)

    function deleteEventPost(e) {
        const filteredDelete = events.filter(event => {

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

    function handleNewLike(e) {
        
        setLike(like + 1)
        const id = e.target.name

        fetch(`http://localhost:4000/upcomingEvents/${id}`, {
            method: "PATCH",
            headers: {"content-type" : "application/json"}, 
            body: JSON.stringify({
                    like: like
            })
        })
                .then(res => res.json())
                .then(function(newlike){
                    console.log("I've been clicked!")
                })

    } 

    const eventsList = filterEventsList.map( event => { 
         // return the teams that match the teamsAPI for ALL TEAMS.
        return (
            <EventElement key={ event.id }>
                <span> 
                    <EventsList>Title: {event.title}</EventsList>
                    <EventsList>Date: {event.date}</EventsList>
                    <EventsList>Time: {event.time}</EventsList>
                    <EventsList>Description: {event.opponent}</EventsList>
                    <EventsList>Location: {event.location}</EventsList>
                    <button name={event.id} onClick={handleNewLike}>  likes: {parseInt(event.like)}</button>
        
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
                    selectedTeam={selectedTeam}
                    handleFormSubmit= {handleFormSubmit}
                />
                <SubmiitedHeader font-size= "20px">Fan Chat</SubmiitedHeader>
                <ChatBox
                        id = {selectedTeam.id}
                        />
            </div>
        <div style={{flexGrow: 1}}>
            <SubmiitedHeader style={{textAlign:'center'}}>Upcoming Events</SubmiitedHeader>
            <EventsListScroll>
                { eventsList }
            </EventsListScroll>
        </div>
        </EventsBox>
    )

}





export default Events;