import React from "react";
import "./SingleProject.css";
import { Item  } from "react-photoswipe-gallery";
const SingleProject = ({ project }) => {


  console.log(project)
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center">
      <div className="img-container mb-3">
        <Item
        
          original={project.img}
          thumbnail={project.img}
          width={project?.Width ?project.Width: "1000" }
          height={project?.Height?project.Height: "700" }
          title={`Copyright © ${new Date().getFullYear()} all rights reserved by  ${project.title}`}
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
