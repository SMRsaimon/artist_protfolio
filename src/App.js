import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProjectContainer from "./components/Projects/ProjectContainer/ProjectContainer";

function App() {



  



  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/projects/In_Search_of_Lost_Tune" >
          <ProjectContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
