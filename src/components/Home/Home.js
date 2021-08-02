import React, { useContext } from "react";
import { userContext } from "../../App";
import Footer from "../Footer/Footer";
import Sidebar from "../Navigation/Sidebar";
import SocialLink from "../SocialLink/SocialLink";
import "./Home.css";

const Home = () => {

  const {personalInfo}=useContext(userContext)
  return (
    <>
      <div id="home" className="container-fluid">
        <Sidebar />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center home-heading text-capitalize">
              { personalInfo?.name}
              </h1>
            </div>
            <div className="col-md-12">
              <h3 className="text-center home-title">Photographer</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
