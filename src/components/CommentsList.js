import React, { useState } from 'react'

function CommentsList ({ id, eventDetails, onCommentSubmit }) {
    const [newComment, setNewComment] = useState('')
    console.log(newComment)
    function handleNewComment(e) {
        setNewComment(e.target.value)
    }

    function handleCommentSubmit (e) {
        e.preventDefault()
        fetch(`http://localhost:4000/upcomingEvents/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({...eventDetails, comments: [...eventDetails.comments, newComment] })
        })
        .then(res => res.json())
        .then(updatedEvent => onCommentSubmit(updatedEvent))

    }
    
    return (
        <form onSubmit={ handleCommentSubmit } > 
            <textarea onChange={ handleNewComment } value={ newComment } placeholder="Add New Comment"></textarea>
            <input type="submit" value="Add New Comment"/>
        </form>
    )

}

export default CommentsList 