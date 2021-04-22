import React from "react"
import styled from "styled-components";
import { Embed } from 'semantic-ui-react'

const Title = styled.h1`
    font-family: fantasy ;
    font-style: Copperplate ;
    font-size: 40px;
    font-weight: bold;`

const TeamWrapper = styled.div`
    color: black;
    width: 37.7%;
    text-align: center;
    `

const TeamElement = styled.div`
        margin: 4px;
        background: whitesmoke;
        font-weight: bold;
        padding: 6px;
        border: 2px solid black;
        border-radius: 4px;
        color: teal;
        text-align: left;
        `

const Video = styled.iframe`
    display: block;`


function TeamInfo({ selectedTeam }){

    const { name, logo, yearFounded, lastFiveGameScores } = selectedTeam

    const lastFiveGameInfo = lastFiveGameScores.map((gameScore, index)=> {
        return (
            <TeamElement key={ index }>
               
                    <p>{gameScore.opponent}</p>
                    <p>Home Score: {gameScore.homeScore}</p>
                    <p>Away Score: {gameScore.awayScore}</p>
                    <iframe title={index} src={gameScore.highlight.replace('watch?v=', "embed/")}/>
                               
                             
                             

                    {/* // src={gameScore.highlight.replace('watch?v=', "embed/")}></Embed> */}
              
            </TeamElement>
        )
    })

    return (
        <TeamWrapper>
            <Title>{ name }</Title>
            <img style={ {width: '100%', objectFit: 'contain'} } src={ logo } alt="team-logo"></img>
            <Title>Year Founded: { yearFounded }</Title>
            <Title>Last 5 Games</Title>
            <div>
                { lastFiveGameInfo }
            </div>
        </TeamWrapper>
    );
}


export default TeamInfo;