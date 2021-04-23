import React, { useState } from 'react'
import styled from 'styled-components'

const EventsList = styled.p`
    margin: 2px;
    color: teal;
    font-weight: bold;
    word-wrap: normal;
    `

function EventCard({ event, onDelete }) {
    const [like, setLike] = useState(event.like)

    function handleNewLike(e) {
        
        const id = e.target.name

        fetch(`http://localhost:4000/upcomingEvents/${id}`, {
            method: "PATCH",
            headers: {"content-type" : "application/json"}, 
            body: JSON.stringify({
                    like: like + 1
            })
        })
        .then(res => res.json())
        .then(newEvent => {
            setLike(newEvent.like)
        })
    } 

    function deleteEventPost(e) {

        fetch(`http://localhost:4000/upcomingEvents/${e.target.name}`, {
            method: "delete", })

        onDelete(e.target.name)
    }

    return (
        <span>
            <EventsList>Title: {event.title}</EventsList>
            <EventsList>Date: {event.date}</EventsList>
            <EventsList>Time: {event.time}</EventsList>
            <EventsList>Description: {event.opponent}</EventsList>
            <EventsList>Location: {event.location}</EventsList>
            <button name={event.id} onClick={handleNewLike}>  Likes: { like }</button>
            <EventsList as="button" name={event.id} onClick={deleteEventPost}>Delete</EventsList>
        </span>
    )
}


export default EventCard 