import React from "react"
import ChatBox from "./Chatbox";
import Events from "./Events";
import TeamInfo from "./TeamInfo";

function TeamPage({ selectedTeam }) {


    return (
            <div>
            <TeamInfo selectedTeam={ selectedTeam }/>
            <Events selectedTeam={ selectedTeam }/> 
            <ChatBox/>
            </div>
    )


}

export default TeamPage;