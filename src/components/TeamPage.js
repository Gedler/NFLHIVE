import React from "react"
import ChatBox from "./Chatbox";
import Events from "./Events";
import TeamInfo from "./TeamInfo";

function TeamPage({ team }) {
    //console.log(team)

    const { id, sportsDbId, name, division, logo, yearFounded, lastFiveGameScores} = team

    


    return (
        <div>
        <TeamInfo team={ team }/>
        <Events team={ team }/> 
        <ChatBox/>
        </div>
    )


}

export default TeamPage;