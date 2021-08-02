import React from "react";


import PanelHeader from "../../components/PanelHeader/PanelHeader";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";
import "./Projects.css";

const Projects = () => {
  
  return (
    <>
      <PanelHeader
        size="sm"
        content={
          <div className="header text-center">
            <h2 className="title">Projects</h2>
          </div>
        }
      />
      <div className="content">
        <div className="row">
          <div className="col-md-8 offset-md-2 mb-4">
              <ProjectImage/>
          
          </div>


          <div className="col-md-8 offset-md-2">
              <h2 className=" brand-text">About Project Details</h2>
          
          </div>
          <div className="col-md-8 offset-md-2">
              <ProjectDescription/>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
