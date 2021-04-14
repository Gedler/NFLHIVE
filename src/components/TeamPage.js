import ChatBox from "./Chatbox";
import Events from "./Events";
import TeamInfo from "./TeamInfo";

function TeamPage() {
    console.log("TeamPage")


    return (
        <div>
        <Events/> 
        <TeamInfo/>
        <ChatBox/>
        </div>
    )


}

export default TeamPage;