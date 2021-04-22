import React, {useState, useEffect} from "react"
import Events from "./Events";
import TeamInfo from "./TeamInfo";
import {useParams} from "react-router-dom";
import styled from "styled-components";

const MainContent = styled.div`
        display: inline-flex;
        background-color: teal;
        font: copperplate;
        margin-bottom: 2%;
        margin-right: 2%;
        width: auto;
        box-sizing: border-box;
        `


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
        <MainContent>
            <TeamInfo selectedTeam={ team }/>
            <div style={{flexGrow: 1}}>
                <Events selectedTeam={ team }/> 
            </div>
        </MainContent>
    )


}

export default TeamPage;