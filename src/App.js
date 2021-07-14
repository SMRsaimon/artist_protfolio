import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProjectContainer from "./components/Projects/ProjectContainer/ProjectContainer";
import img1 from "./resource/img/project_img/1.jpg"
import img2 from "./resource/img/project_img/2.jpg"
import img3 from "./resource/img/project_img/3.jpg"
import img4 from "./resource/img/project_img/4.jpg"
import img5 from "./resource/img/project_img/5.jpg"
import img6 from "./resource/img/project_img/6.jpg"
import img7 from "./resource/img/project_img/7.jpg"
import img8 from "./resource/img/project_img/8.jpg"

function App() {


   const projectImg=[{img:img1},{img:img2}, {img:img3}, {img:img4},{img:img5}, {img:img6},{img:img7},{img:img8}]





  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/projects/In_Search_of_Lost_Tune" >
          <ProjectContainer projectImg={projectImg} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
