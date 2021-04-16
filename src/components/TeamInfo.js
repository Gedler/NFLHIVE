import React from "react"
function TeamInfo({ team }){
    const { name, logo, yearFounded, lastFiveGameScores } = team

    const lastFiveGameInfo = lastFiveGameScores.map((gameScore, index)=> {
        return (
            <li key={ index }>
                <span>
                    <p>{gameScore.opponent}</p>
                    <p>{gameScore.score}</p>
                    {/* <iframe src={gameScore.highlight} alt="highlight-video"></iframe> */}
                </span>
            </li>
        )
    })

    return (
        <div>
            <h3>{ name }</h3>
            <img style={ {width: "200px"} } src={ logo } alt="team-logo"></img>
            <h4>{ yearFounded }</h4>
            <ul>
                { lastFiveGameInfo }
            </ul>
        </div>
    );
}


export default TeamInfo;