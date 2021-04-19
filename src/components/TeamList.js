import React from "react"
import TeamPage from "./TeamPage"
import { NavLink } from "react-router-dom"



function TeamList({ teams, onSelectedTeam }) {
  

    console.log("TeamList")
    const teamLinks = teams.map(team => {

        return (
                   
            <li onClick={ ()=> onSelectedTeam(team) } key={ team.id }>{team.name}</li>
           

        )
    })
    return (
        <ul>
            { teamLinks }
        </ul>
    )



}



export default TeamList;