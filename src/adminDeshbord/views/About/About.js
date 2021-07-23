import React from "react";
import "./About.css";
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import { useState } from "react";
import AboutForm from "./AboutForm";
import AboutPersonalDataForm from "./AboutPersonalDataForm";
function About() {
  




  return (
    <>
      <PanelHeader
        size="sm"
        content={
          <div className="header text-center">
            <h2 className="title">About</h2>
          </div>
        }
      />
      <div className="content">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <AboutForm   />
          </div>
          <div className="col-md-8 offset-md-2">
         <AboutPersonalDataForm/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
