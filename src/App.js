import './App.css';
import React, { useState, useEffect } from "react"
import TitleBanner from './components/TitleBanner';
import TeamList from './components/TeamList';
import TeamPage from './components/TeamPage';
import {Route, Switch} from "react-router-dom"
import styled from "styled-components";

const MainPage = styled.div`
    background-color: rgba(0, 0, 255, 70%);
    display: inline-flex;
    vertical-align: middle;
    width: 100%;`

function App() {
  const [teams, setTeams] = useState([]) 

    useEffect(() => {
        fetch(`http://localhost:4000/teams`)
        .then(res => res.json())
        .then(teamArray => setTeams(teamArray))
    },[])

  

//make a new URL path that shows the components that are children on it (line 27)
//// dynamically makes new URL paths that show components children (line 31)
  return (
    <div className="App">
      <TitleBanner/>
      <MainPage>
        <TeamList teams = {teams} />
        <Switch>
          <Route exact path="/:id"> 
              <TeamPage/> 
          </Route>
        </Switch>
      </MainPage>
    </div>
  );
}

export default App;
