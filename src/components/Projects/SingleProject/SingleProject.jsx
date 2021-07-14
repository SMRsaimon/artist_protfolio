import React from "react";
import "./SingleProject.css";
import { Item } from "react-photoswipe-gallery";
const SingleProject = ({ project }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center">
      <div className="img-container mb-3">
        <Item
          original={project.img}
          thumbnail={project.img}
          width="1024"
          height="768"
          title="author "
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
