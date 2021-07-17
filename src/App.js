import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProjectContainer from "./components/Projects/ProjectContainer/ProjectContainer";
import { projectData } from "./resource/projectData";
import { useState } from "react";
import Contract from "./components/Contract/Contract";
import About from "./components/About/About";

function App() {

  const  [projectImg, setProjectImg] = useState(projectData)
  const inSearchOf=projectImg.filter(x=>x.fileName==="inSearchOf")
  const Dhaka=projectImg.filter(x=>x.fileName==="Dhaka")
  const theNameOfCity=projectImg.filter(x=>x.fileName==="theNameOfCity")
  const Joldash=projectImg.filter(x=>x.fileName==="Joldash")
  const SonaliBeg=projectImg.filter(x=>x.fileName==="SonaliBeg")

  





  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/projects/In_Search_of_Lost_Tune" >
          <ProjectContainer title="In Search of Lost Tune" projectImg={inSearchOf} />
        </Route>
        <Route exact path="/projects/The_Name_of_my_City" >
          <ProjectContainer title="The Name of my City is Dust, Smoke and, Life"  projectImg={Dhaka} />
        </Route>
        <Route exact path="/projects/dhaka" >
          <ProjectContainer title="Dhaka" projectImg={theNameOfCity} />
        </Route>
        <Route exact path="/projects/Joldash" >
          <ProjectContainer title="Joldash" projectImg={Joldash} />
        </Route>
        <Route exact path="/projects/Counting_the_days" >
          <ProjectContainer title="Counting the day" projectImg={SonaliBeg} />
        </Route>
        <Route exact path="/reyad_abedin/contract" >
          <Contract/>
        </Route>
        <Route exact path="/reyad_abedin/about" >
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
