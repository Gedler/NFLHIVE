import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import { Button, Comment, Form } from 'semantic-ui-react'

// const Div = styled.div`
//     margin-top: 6px;
//     display: block;`

// const Chatbox = styled.input` 
// display: block;
//    width: 100%;
//    box-sizing: border-box;
//    background-color: ${props => props.bgcolor || "teal"};
//    color: white;
//    border-radius: 4px;
//    margin: 2px;
//    padding: 2px;` 

const ChatListDiv = styled.div` 
    height: 300px;
    overflow: auto;
    border-radius: 6px;
    background-color: whitesmoke;
    `
   


function ChatBox({id}){
    
    const [userInput, setuserInput] = useState("")
    const [chat, setChat] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:4000/chatbox`)
            .then(res => res.json())
            .then(function(displayChat){
                let filterChat = displayChat.filter(function(obj){
                    return obj.teamsId === id
                })
                setChat(filterChat)
            })
    }, [id])


    function sendNewChat(e){ 
        e.preventDefault();
        let newChatSubmit = {
            teamsId: id,
            comment: userInput
        }
        fetch("http://localhost:4000/chatbox", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newChatSubmit)
        })
        .then(res => res.json()) 
        .then(function(newChat){
        setChat([...chat, newChat])
        })
        setuserInput("")  
    }

    function deleteComment(e) {
        const id = e.target.name

        fetch(`http://localhost:4000/chatbox/${id}`, {
            method: "DELETE",
        })

        const filteredComments = chat.filter(comment => {
            return comment.id !== parseInt(id)
        })

        setChat(filteredComments)

    }

    const chatList = chat.map(function(comments){
        
        return ( 

            <Comment key= {comments.id}>
                <Comment.Content>
                    <Comment.Text>{comments.comment}</Comment.Text>
                    <Button onClick={ deleteComment } name={ comments.id } labelPosition="right">X</Button>
                </Comment.Content>
            </Comment>
        )
    })
    return ( 
        <Comment.Group>
            <ChatListDiv>
                {chatList}
            </ChatListDiv>
        
            <Form reply onSubmit= {sendNewChat}>
                <Form.TextArea as='textarea' placeholder="Join Chat" value={userInput} onChange= {e=>setuserInput(e.target.value)}/>
                <Button content="add chat"/>
            </Form>
        </Comment.Group>
    )
}


export default ChatBox;
