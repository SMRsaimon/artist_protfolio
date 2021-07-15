import React from "react";
import Sidebar from "../../Navigation/Sidebar";
import SingleProject from "../SingleProject/SingleProject";
import "./ProjectContainer.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { CustomGallery,DefaultLayout } from "react-photoswipe-gallery";
import { useRef } from "react";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";


const ProjectContainer = ({ projectImg,title }) => {
  const layoutRef = useRef()
  return (
    <>
      <div className="container-fluid product-container pb-5">
        <Sidebar />
        <div className="container">
          <h3 className="text-center text-Capitalize p-5 project-title">{title}</h3>
          <div className="row d-flex justify-content-center">
            <CustomGallery layoutRef={layoutRef} ui={PhotoSwipeUI_Default}>
              {projectImg.map((x) => (
                <SingleProject project={x} key={x.id} />
              ))}
            </CustomGallery>
            <DefaultLayout
      shareButton={false}
      zoomButton={false}
     
      
      ref={layoutRef}
      
    />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;
