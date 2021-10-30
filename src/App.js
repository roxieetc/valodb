import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AgentList from './Components/AgentList';
import Homepage from './Components/Homepage';
import MapList from './Components/MapList';

function App() {
  return (
    <div className="App">
       <Router>
      <Route exact path='/' component={Homepage} />
      <Route exact path ="/agents" component={AgentList} />
      <Route exact path='/maps' component={MapList} />
      </Router>
    </div>
  );
}

export default App;
