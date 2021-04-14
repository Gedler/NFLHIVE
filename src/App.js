import logo from './logo.svg';
import './App.css';
import TitleBanner from './components/TitleBanner';
import TeamList from './components/TeamList';
import TeamPage from './components/TeamPage';


function App() {
  return (
    <div className="App">
      <TitleBanner/>
      <TeamList/>
      <TeamPage/>
    </div>
  );
}

export default App;
