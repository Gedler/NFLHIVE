import React, { useState } from "react"
import {Link} from "react-router-dom"
import styled from "styled-components";

const SideBar = styled.div`
    position: left;
    background-color: white;
    margin: 2%;
    margin-top: 0;
    width: 200px;
    writing-mode: horizontal-tb;
    padding: 10px;
    height: fit-content;
    color: white;`


const StyledLink = styled(Link)`
    display: block;
    background: teal;
    box-sizing: border-box;
    padding: 6px;
    border: 2px solid black;
    border-radius: 4px;
    cursor: pointer;
    transition: 200ms ease;
    color: white;
    font-weight: bold;
    text-decoration: none;
    &:hover {
    background: white;
    color: green;
    }
    &:focus {
    background: white;
    color: red;
    }`
    
const SearchBar = styled.input`
    margin: auto;
    padding: 2px;
    display: block;
    box-sizing: border-box;
    width: auto;`

function TeamList({ teams }) {
    const [search, setSearch] = useState('')

    const filteredTeams = teams.filter(team=>{

        return team.name.toLowerCase().includes(search.toLowerCase())
    })

    const teamLinks = filteredTeams.map(team => {

        return (
            <StyledLink to={`/${team.id}`} key={ team.id }>{team.name}</StyledLink>
        )
    })

    function handleSearch (e) {
        setSearch(e.target.value)
    }
    
    return (
        <SideBar>
            <SearchBar as='form'>
                <SearchBar type='text' value={ search } placeholder="Search Your Team" onChange={ handleSearch }></SearchBar>
            </SearchBar>
            { teamLinks }
        </SideBar>
    )



}



export default TeamList;