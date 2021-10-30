import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AgentList from './Components/AgentList';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="App">
       <Router>
      <Route exact path='/' component={Homepage} />
      <Route exact path ="/agents" component={AgentList} />
      </Router>
    </div>
  );
}

export default App;
