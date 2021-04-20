import React, {useState, useEffect} from "react"
import ChatBox from "./Chatbox";
import Events from "./Events";
import TeamInfo from "./TeamInfo";
import {useParams} from "react-router-dom";


function TeamPage() {
    //console.log(team)

    const [team, setTeam] = useState(null)
    const [isloaded, setIsLoaded] = useState(false)
    const {id} = useParams()

    useEffect(()=> {
            fetch(`http://localhost:4000/teams/${id}`) 
                .then(res => res.json())
                .then(function(selectedTeam){
                        setTeam(selectedTeam)
                        setIsLoaded(true)

                })

    }, [id])

    if (isloaded === false) {
        return ( 
            <h2>loading...</h2> 
        )
    }


    return (
        <div>
        <TeamInfo selectedTeam={ team }/>
        <Events selectedTeam={ team }/> 
        <ChatBox
            id = {id}
        />
        </div>
    )


}

export default TeamPage;