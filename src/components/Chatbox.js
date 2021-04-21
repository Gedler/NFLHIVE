import React, {useState, useEffect} from "react"
import styled from 'styled-components'

const Div = styled.div`
    margin-top: 6px;
    display: block;`

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

    let chatList = chat.map(function(comments){
        return ( <div key= {comments.id}>
                <span>
                    <p>{comments.comment}</p>
                </span>
                </div>
        )
    })
    return ( 
            <Div>
                {chatList}
                <form onSubmit= {sendNewChat}>
                    <textarea placeholder="Start Chatting" value={userInput} onChange= {e=>setuserInput(e.target.value)}/>
                    <input type="submit"/>
                </form>
            </Div>
    )
}


export default ChatBox;
