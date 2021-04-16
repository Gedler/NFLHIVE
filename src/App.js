import './App.css';
import React, { useState, useEffect } from "react"
import TitleBanner from './components/TitleBanner';
import TeamList from './components/TeamList';
import TeamPage from './components/TeamPage';


function App() {
  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:4000/teams`)
        .then(res => res.json())
        .then(teamArray => setTeams(teamArray))
    },[])

  function handleSelectedTeam(team) {
    setSelectedTeam(team)
  }

  return (
    <div className="App">
      <TitleBanner/>
      <TeamList teams={ teams } onSelectedTeam={ handleSelectedTeam }/>
      { selectedTeam ? <TeamPage selectedTeam={ selectedTeam }/> : null }
    </div>
  );
}

export default App;
