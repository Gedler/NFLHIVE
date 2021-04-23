import React from "react"
import styled from "styled-components";

const Title = styled.h1`
    font-size: ${props => props.secondary || '30px'};
    font-weight: 100%;`


const TeamWrapper = styled.div`
    margin: auto;
    color: white;
    width: 25vw;
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


function TeamInfo({ selectedTeam }){

    const { name, logo, yearFounded, lastFiveGameScores } = selectedTeam

    const lastFiveGameInfo = lastFiveGameScores.map((gameScore, index)=> {
        return (
            <TeamElement key={ index }>
               
                    <p>{gameScore.opponent}</p>
                    <p>Home Score: {gameScore.homeScore}</p>
                    <p>Away Score: {gameScore.awayScore}</p>
                    <a href={gameScore.highlight}>Highlight Video</a>
                    {/* <iframe src={gameScore.highlight.replace('watch?v=', "embed/")} title={ index } /> */}
              
            </TeamElement>
        )
    })

    return (
        <TeamWrapper>
            <div>
                <Title>{ name }</Title>
            </div>
            <img style={ {width: '100%', objectFit: 'contain'} } src={ logo } alt="team-logo"></img>
            <Title secondary='20px'>Year Founded: { yearFounded }</Title>
            <Title secondary='18px'>Last 5 Games</Title>
            <div>
                { lastFiveGameInfo }
            </div>
        </TeamWrapper>
    );
}


export default TeamInfo;