import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      

      <Home/>
      <Switch>
        {/* <Route path='/overview' exact component={} /> */}
       
      </Switch>
      
    </Router>
  );
}

export default App;
