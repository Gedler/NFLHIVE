import React, { useState } from "react"
import {Link} from "react-router-dom"
import styled from "styled-components";

const SideBar = styled.div`
        position: left;
        background-color: rgba(255, 67, 88);
        margin: 2%;
        margin-top: 0;
        width: 200px;
        writing-mode: horizontal-tb;
        padding: 10px;`

const Button = styled.button`
        background: dodgerblue;
        padding: 6px;
        border: 2px solid black;
        border-radius: 4px;
        cursor: pointer;
        transition: 200ms ease;
        color: white;
        text-decoration: none;
        &:hover {
        background: darkmagenta;
        color: white;
        }
        &:focus {
        background: hotpink;
        color: white;
        }`

    function TeamList({ teams }) {
        const [search, setSearch] = useState('')
        

        console.log("TeamList")
        const filteredTeams = teams.filter(team=>{
            return team.name.toLowerCase().includes(search.toLowerCase())
        })

        const teamLinks = filteredTeams.map(team => {

            return (

                <Button as="div" key= {team.id}>
                    <Link style={{fontFamily: 'serif', textDecoration: 'none', color: 'blue'}} to={`/${team.id}`} key={ team.id }>{team.name}</Link>
                </Button> // returns that component into an A tag. Does this by default.
            
            )
        })

    function handleSearch (e) {
        setSearch(e.target.value)
    }
    
    return (
        <SideBar>
            <form>
                <input type='text' value={ search } placeholder="Search Your Team" onChange={ handleSearch }></input>
            </form>
            { teamLinks }
        </SideBar>
    )



}



export default TeamList;