import "bootstrap/dist/css/bootstrap.css";
import "./adminDeshbord/assets/css/demo.css";
import "./adminDeshbord/assets/scss/now-ui-dashboard.scss";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProjectContainer from "./components/Projects/ProjectContainer/ProjectContainer";
import { projectData } from "./resource/projectData";
import { useEffect, useState } from "react";
import Contract from "./components/Contract/Contract";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import AdminLayout from "./adminDeshbord/layouts/Admin"

function App() {
  const [projectImg, setProjectImg] = useState(projectData);

  const inSearchOf = projectImg.filter((x) => x.fileName === "inSearchOf");
  const Dhaka = projectImg.filter((x) => x.fileName === "Dhaka");
  const theNameOfCity = projectImg.filter(
    (x) => x.fileName === "theNameOfCity"
  );
  const Joldash = projectImg.filter((x) => x.fileName === "Joldash");
  const SonaliBeg = projectImg.filter((x) => x.fileName === "SonaliBeg");
  const countingTheDays = projectImg.filter(
    (x) => x.fileName === "countingTheDays"
  );
  const portfolio = projectImg.filter((x) => x.fileName === "portfolio");
  const print = projectImg.filter((x) => x.fileName === "print");

  const printText = {
    heading: "Print",
    text: "If you are looking for any image/ prints, feel free to contact me for details information, sizes and pricing.",
    text2: "Worldwide Shipping Available",
  };
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/projects/In_Search_of_Lost_Tune">
          <ProjectContainer
            title="In Search of Lost Tune"
            projectImg={inSearchOf}
          />
        </Route>
        <Route exact path="/projects/The_Name_of_my_City">
          <ProjectContainer
            title="The Name of my City is Dust, Smoke and, Life"
            projectImg={theNameOfCity}
          />
        </Route>
        <Route exact path="/projects/dhaka">
          <ProjectContainer title="Dhaka" projectImg={Dhaka} />
        </Route>
        <Route exact path="/projects/Joldash">
          <ProjectContainer title="Joldash" projectImg={Joldash} />
        </Route>
        <Route exact path="/projects/Counting_the_days">
          <ProjectContainer
            title="Counting the day"
            projectImg={countingTheDays}
          />
        </Route>

        <Route exact path="/works/sonali_bag">
          <ProjectContainer title="Sonali Beg" projectImg={SonaliBeg} />
        </Route>

        <Route exact path="/works/portfolio">
          <ProjectContainer title="Portfolio" projectImg={portfolio} />
        </Route>
        <Route exact path="/print">
          <ProjectContainer title={printText} projectImg={print} />
        </Route>

        <Route exact path="/reyad_abedin/contract">
          <Contract />
          <Footer />
        </Route>

        <Route exact path="/reyad_abedin/about">
          <About />
        </Route>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      
      </Switch>
    </Router>
  );
}

export default App;
