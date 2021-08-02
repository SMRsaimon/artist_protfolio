import "bootstrap/dist/css/bootstrap.css";
import "./adminDeshbord/assets/css/demo.css";
import "./adminDeshbord/assets/scss/now-ui-dashboard.scss";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProjectContainer from "./components/Projects/ProjectContainer/ProjectContainer";
import { useEffect, useState } from "react";
import Contract from "./components/Contract/Contract";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import AdminLayout from "./adminDeshbord/layouts/Admin";
import LogIn from "./adminDeshbord/LogIn/LogIn";
import { createContext } from "react";
import PrivateRoute from "./adminDeshbord/LogIn/PrivateRoute";
import axios from "axios";

export const userContext = createContext();

function App() {
  const [projectImg, setProjectImg] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);
  const [loginUser, setLoginUser] = useState({});
  const [personalInfo, setPersonalInfo] = useState({});

  // Filter function for filter project images data and details

  const FilterProject = (data, fileName) => {
    return data.filter((x) => x.fileName === fileName);
  };

  const printText = {
    heading: "Print",
    text: "If you are looking for any image/ prints, feel free to contact me for details information, sizes and pricing.",
    text2: "Worldwide Shipping Available",
  };

  // get projectData from database

  useEffect(() => {
    axios.get("http://localhost:5000/projects/data/get").then((result) => {
      setProjectImg(result.data);
    });

    axios
      .get("http://localhost:5000/projects/details/data/getDetails")
      .then((result) => {
        setProjectDetails(result.data);
      });
      axios
      .get("http://localhost:5000/adminInformation/api/contractInformation/get")
      .then((result) => {
        setPersonalInfo(result.data[0]);
      });
  }, []);


console.log()
  return (
    <userContext.Provider value={{ loginUser, setLoginUser,personalInfo }}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/projects/In_Search_of_Lost_Tune">
            <ProjectContainer
              title="In Search of Lost Tune"
              projectImg={FilterProject(projectImg, "inSearchOf")}
              projectDetails={FilterProject(projectDetails, "inSearchOf")}
            />
          </Route>
          <Route exact path="/projects/The_Name_of_my_City">
            <ProjectContainer
          title="The Name of my City is Dust, Smoke and, Life"
              
              projectImg={FilterProject(projectImg, "theNameOfCity")}
              projectDetails={FilterProject(projectDetails, "theNameOfCity")}
            />
          </Route>
          <Route exact path="/projects/storiesFromTheSea">
            <ProjectContainer
              title="Stories From The Sea"
              projectImg={FilterProject(projectImg, "storiesFromTheSea")}
              projectDetails={FilterProject(
                projectDetails,
                "storiesFromTheSea"
              )}
            />
          </Route>
          <Route exact path="/projects/Joldash">
            <ProjectContainer
              title="Joldash"
              projectImg={FilterProject(projectImg, "Joldash")}
              projectDetails={FilterProject(projectDetails, "Joldash")}
            />
          </Route>
          <Route exact path="/projects/Counting_the_days">
            <ProjectContainer
              title="Counting the days"
              projectImg={FilterProject(projectImg, "countingTheDays")}
              projectDetails={FilterProject(projectDetails, "countingTheDays")}
            />
          </Route>

          <Route exact path="/works/sonali_bag">
            <ProjectContainer
              title="Sonali Bag"
              projectImg={FilterProject(projectImg, "SonaliBag")}
              projectDetails={FilterProject(projectDetails, "SonaliBag")}
            />
          </Route>

          <Route exact path="/works/portfolio">
            <ProjectContainer
              title="Portfolio"
              projectImg={FilterProject(projectImg, "portfolio")}
              projectDetails={FilterProject(projectDetails, "portfolio")}
            />
          </Route>
          <Route exact path="/print">
            <ProjectContainer
              title={printText}
              projectImg={FilterProject(projectImg, "print")}
              projectDetails={FilterProject(projectDetails, "print")}
            />
          </Route>

          <Route exact path="/reyad_abedin/contract">
            <Contract />
            <Footer />
          </Route>

          <Route exact path="/reyad_abedin/about">
            <About />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>

          <PrivateRoute path="/admin">
            <Route render={(props) => <AdminLayout {...props} />} />
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
