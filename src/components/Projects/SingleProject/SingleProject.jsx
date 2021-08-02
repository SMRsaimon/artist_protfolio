import React from "react";
import "./SingleProject.css";
import { Item } from "react-photoswipe-gallery";
const SingleProject = ({ project }) => {
  let width = 1000;
  let height = 700;

  if (project?.vertical === "false" && project?.squire === "true") {
    width = 900;
    height = 900;
  }
  if (project?.vertical === "true" && project?.squire === "false") {
    width = 900;
    height = 1200;
  }
  
  return (
    <div className="col-xl-3 col-lg-4 col-md-6  ">
      <div className="img-container mb-3">
        <Item
          original={project.img}
          thumbnail={project.img}
          width={width}
          height={height}
          title={`Copyright © ${new Date().getFullYear()} all rights reserved by  ${
            project.title
          }`}
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={project.img} alt="img" />
          )}
        </Item>
      </div>
    </div>
  );
};

export default SingleProject;
