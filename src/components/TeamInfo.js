import React from "react"
import styled from "styled-components";

const TeamWrapper = styled.div`
    color: blue;
    width: 45%;
    `

const TeamElement = styled.div`
        margin: 4px;
        background: dodgerblue;
        padding: 6px;
        border: 2px solid black;
        border-radius: 4px;
        color: white;
        text-align: left;
        `

function TeamInfo({ selectedTeam }){

    const { name, logo, yearFounded, lastFiveGameScores } = selectedTeam

    const lastFiveGameInfo = lastFiveGameScores.map((gameScore, index)=> {
        return (
            <TeamElement key={ index }>
                <span>
                    <p>{gameScore.opponent}</p>
                    <p>Home Score: {gameScore.homeScore}</p>
                    <p>Away Score: {gameScore.awayScore}</p>
                    <iframe src={gameScore.highlight.replace('watch?v=', "embed/")} title={index}></iframe>
                </span>
            </TeamElement>
        )
    })

    return (
        <TeamWrapper>
            <h3 style={{textAlign: 'center'}}>{ name }</h3>
            <img style={ {width: '100%', objectFit: 'contain'} } src={ logo } alt="team-logo"></img>
            <h4 style={{textAlign: 'center'}}>{ yearFounded }</h4>
            <h5>Last 5 Games</h5>
            <div>
                { lastFiveGameInfo }
            </div>
        </TeamWrapper>
    );
}


export default TeamInfo;