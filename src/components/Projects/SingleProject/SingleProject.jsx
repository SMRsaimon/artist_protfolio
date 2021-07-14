import React from "react";
import { Image } from "react-bootstrap";
import "./SingleProject.css";
import {  Item } from "react-photoswipe-gallery";
const SingleProject = ({ project }) => {
  
  return (
    <div className="col-lg-3 col-md-3 d-flex justify-content-center">
      <div className="img-container mb-3">
      <Item
     original={project.img}
      thumbnail={project.img}
      width="1024"
      height="768"
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
