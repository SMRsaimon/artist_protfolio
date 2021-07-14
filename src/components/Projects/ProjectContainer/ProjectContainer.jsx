import React from "react";
import Sidebar from "../../Navigation/Sidebar";
import SingleProject from "../SingleProject/SingleProject";
import "./ProjectContainer.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery } from "react-photoswipe-gallery";


const ProjectContainer = ({ projectImg }) => {
  return (
    <>
      <div className="container-fluid product-container">
        <Sidebar />
        <div className="container">
          <div className="row d-flex justify-content-center">
            <Gallery>
              {projectImg.map((x, index) => (
                <SingleProject project={x} key={index} />
              ))}
            </Gallery>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;
