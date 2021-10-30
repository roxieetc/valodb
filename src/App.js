import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AgentList from './Components/AgentList';
import Homepage from './Components/Homepage';
import MapList from './Components/MapList';
import WeaponsList from './Components/Weapons';

function App() {
  return (
    <div className="App">
       <Router>
      <Route exact path='/' component={Homepage} />
      <Route exact path ="/agents" component={AgentList} />
      <Route exact path='/maps' component={MapList} />
      <Route exact path='/weapons' component={WeaponsList} />
      </Router>
    </div>
  );
}

export default App;
