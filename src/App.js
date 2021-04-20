import './App.css';
import React, { useState, useEffect } from "react"
import TitleBanner from './components/TitleBanner';
import TeamList from './components/TeamList';
import TeamPage from './components/TeamPage';
import {Route, Switch} from "react-router-dom"


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

//make a new URL path that shows the components that are children on it (line 27)
//// dynamically makes new URL paths that show components children (line 31)
  return (
    <div className="App">
      <TitleBanner/>
      <TeamList teams = {teams} />
     <Switch>
        <Route exact path="/:id"> 
             <TeamPage/> 
        </Route>
   
      </Switch>
    </div>
  );
}

export default App;
