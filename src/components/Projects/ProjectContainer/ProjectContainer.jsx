import React from "react";
import Sidebar from "../../Navigation/Sidebar";
import SingleProject from "../SingleProject/SingleProject";
import "./ProjectContainer.css";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { CustomGallery, DefaultLayout } from "react-photoswipe-gallery";
import { useRef } from "react";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
import printIMG from "../../../resource/img/print-img/logo.png";
import comingSoon from "../../../resource/img/print-img/comingsoon2.jpg";
import onGoing from "../../../resource/img/print-img/ongoing.jpg";
import Footer from "../../Footer/Footer";
import { Image } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ProjectContainer = ({ projectImg, title }) => {
  const layoutRef = useRef();
  return (
    <>
      <div className="container-fluid product-container pb-5">
        <Sidebar />
        <div className="container">
          {title?.heading ? (
            <>
              <div className="text-center print-img-container">
                <h3 className="text-center text-Capitalize p-5 project-title"> {title.heading}</h3>
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
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900:3, 1400:4 }}
                className="ResponsiveMasonry"
              >
                <Masonry  >
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
                      <h4 className="text-center text-success p-5">
                        On going......
                      </h4>
                      <div className="col-md-12 d-flex justify-content-center">
                       
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectContainer;
