import React from "react";
import Sidebar from "../../Navigation/Sidebar";
import SingleProject from "../SingleProject/SingleProject";
import "./ProjectContainer.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { CustomGallery, DefaultLayout } from "react-photoswipe-gallery";
import { useRef } from "react";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";

import Footer from "../../Footer/Footer";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ProjectContainer = ({ projectImg, title, projectDetails }) => {
  const layoutRef = useRef();
  return (
    <>
      <div className="container-fluid product-container pb-5">
        <Sidebar />
        <div className="container">
          {title?.heading ? (
            <>
              <div className="text-center print-img-container">
                <h3 className="text-center text-Capitalize p-5 project-title">
                  {" "}
                  {title.heading}
                </h3>
              </div>
              <p className="text-center"> {title?.text}</p>
              <p className="text-center">{title?.text2}</p>
            </>
          ) : (
            <h3 className="text-center text-Capitalize p-5 project-title">
              {title}
            </h3>
          )}

          <div className="row d-flex justify-content-center">
            <CustomGallery layoutRef={layoutRef} ui={PhotoSwipeUI_Default}>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 760: 2, 1000: 3, 1400: 4 }}
                className="ResponsiveMasonry"
              >
                <Masonry>
                  {projectImg.length > 0 ? (
                    projectImg.map((x) => (
                      <SingleProject project={x} key={x.id} />
                    ))
                  ) : (
                    <>
                      <h4 className="comming-soon-text text-success">
                        Comming Soon......
                      </h4>
                    </>
                  )}
                  {projectImg.length <= 5 && projectImg.length !== 0 && (
                    <>
                      <div className="col-md-12 d-flex justify-content-center">
                        Work in Progress......
                      </div>
                    </>
                  )}
                </Masonry>
              </ResponsiveMasonry>
            </CustomGallery>
            <DefaultLayout
              shareButton={false}
              zoomButton={false}
              ref={layoutRef}
            />
          </div>
          <hr />
          <div className="row mt-5">
            {projectDetails.length > 0 &&
              projectDetails.map((x) => (
                <>
                  <div className="col-md-10 offset-md-1">
                    {x.title && (
                      <h3 className="text-center text-Capitalize project-title p-3">
                        {x.title}
                      </h3>
                    )}
                  </div>
                  <div className="col-md-10 offset-md-1 projectDescription">
                    <p> {x.description}</p>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectContainer;
