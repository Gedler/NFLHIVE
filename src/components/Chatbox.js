import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const Div = styled.div`
    margin-top: 6px;
    display: block;`

// const Form = styled.form`
//     display: block; 
//     `
const Chatbox = styled.input` 
display: block;
   width: 100%;
   box-sizing: border-box;
   background-color: ${props => props.bgcolor || "teal"};
   color: white;
   border-radius: 4px;
   margin: 2px;
   padding: 2px;` 

const ChatListDiv = styled.div` 
    height: 300px;
    overflow: auto;`
   


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

    const chatList = chat.map(function(comments){
        return ( 

            <Comment key= {comments.id}>
                <Comment.Content>
                    <Comment.Text>{comments.comment}</Comment.Text>
                </Comment.Content>
            </Comment>
        )
    })
    return ( 
        <Comment.Group>
        
            {chatList}s
        
            <Form reply onSubmit= {sendNewChat}>
                <Form.TextArea as='textarea' placeholder="Join Chat" value={userInput} onChange= {e=>setuserInput(e.target.value)}/>
                <Button content="add chat"/>
            </Form>
        </Comment.Group>
    )
}


export default ChatBox;
