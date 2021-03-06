import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AgentList from './Components/AgentList';
import Homepage from './Components/Homepage';
import MapList from './Components/MapList';
import WeaponsList from './Components/WeaponsList';
import PlayerCards from './Components/PlayerCards';
import AgentInfo from './Components/AgentInfo';
import Skins from './Components/Skins';
import Sprays from './Components/Sprays';
import Bundles from './Components/BundlesList';
import Icon from './valologo.png';
function App() {
  return (
    <div className="App">
      <Router>
        <div className="homeLinkContainer">
        <Link to={'/'}>
        <img src={Icon} alt="logo" className="homeLink"/>
        </Link>
        </div>
        <Route exact path='/' component={Homepage} />
        <Route exact path ='/agents' component={AgentList} />
        <Route exact path='/maps' component={MapList} />
        <Route exact path='/weapons' component={WeaponsList} />
        <Route exact path='/playercards' component={PlayerCards} />
        <Route exact path='/agents/:id' component={AgentInfo} />
        <Route exact path='/bundles' component={Bundles} />
        <Route exact path='/weapons/:id' component={Skins} />
        <Route exact path='/sprays' component={Sprays} />
      </Router>
    </div>
  );
}

export default App;
