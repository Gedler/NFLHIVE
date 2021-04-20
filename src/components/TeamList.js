import React from "react"
import TeamPage from "./TeamPage"
import {Link} from "react-router-dom"


function TeamList({ teams, onSelectedTeam }) {
  

    console.log("TeamList")
    const teamLinks = teams.map(team => {

        return (

            <div key= {team.id}>
                   <Link to={`/${team.id}`} key={ team.id }>{team.name}</Link>
            </div> // returns that component into an A tag. Does this by default.
           

        )
    })
    return (
        <div>
            { teamLinks }
        </div>
    )



}



export default TeamList;