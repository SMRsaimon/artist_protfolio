import React, { useContext, useEffect, useState } from "react";
import "./About.css";
import Sidebar from "../Navigation/Sidebar";
import profilePic from "../../resource/img/bio-img/BioPhoto.jpg";
import SocialLink from "../SocialLink/SocialLink";
import Footer from "../Footer/Footer";
import { userContext } from "../../App";
import axios from "axios";

const About = () => {
  const { personalInfo } = useContext(userContext);

  const [bioInfo, setBioInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/bioInfo/api/bioInformation/get")
      .then((res) => {
        setBioInfo(res.data);
      })
      .catch((err) => {
        
      });
  }, []);

  return (
    <>
      <div id="about" className="container-fluid">
        <Sidebar />

        <div className="container pt-5">
          <h1 className="text-center pb-3 text-md-left  home-heading text-capitalize">
            {personalInfo?.name && personalInfo.name}
          </h1>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="about-img-container py-3 mb-5 ">
                <img
                  src={personalInfo?.profileImg}
                  class="img-thumbnail"
                  alt="..."
                ></img>
                <div className="d-flex justify-content-center">
                  <SocialLink />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-container">
                {bioInfo.length <= 3 && bioInfo.length > 0
                  ? bioInfo.map((x, index) => <p key={index}>{x.bioInformation}</p>)
                  : bioInfo
                      .slice(0, 3)
                      .map((x, index) => <p key={index}>{x.bioInformation}</p>)}
              </div>
              <a
                className="btn btn-outline-light p-2 download-resume"
                target="_blanck"
                href={personalInfo?.resume}
              >
                {" "}
                Download Resume{" "}
              </a>
            </div>

            <div className="col-md-6">
              <div className="content-container">
                {bioInfo.length >= 4 &&
                  bioInfo.slice(3, bioInfo.length).map((x, index) => (
                    <>
                      {x.heading && (
                        <h3 className="text-capitalize">{x.heading}</h3>
                      )}

                      <p key={index}>{x.bioInformation}</p>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
