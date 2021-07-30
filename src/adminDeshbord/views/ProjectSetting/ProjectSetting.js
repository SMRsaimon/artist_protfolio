import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PanelHeader from '../../components/PanelHeader/PanelHeader';
import "./ProjectSetting.css"
import UpdateProjects from './UpdateProjects';
const ProjectSetting = () => {

    const [projectImg,setProjectImg]=useState([])

    
  const inSearchOf = projectImg.filter((x) => x.fileName === "inSearchOf");
  const storiesFromTheSea = projectImg.filter(
    (x) => x.fileName === "storiesFromTheSea"
  );
  const theNameOfCity = projectImg.filter(
    (x) => x.fileName === "theNameOfCity"
  );
  const Joldash = projectImg.filter((x) => x.fileName === "Joldash");
  const SonaliBeg = projectImg.filter((x) => x.fileName === "SonaliBag");
  const countingTheDays = projectImg.filter(
    (x) => x.fileName === "countingTheDays"
  );
  const portfolio = projectImg.filter((x) => x.fileName === "portfolio");
  const print = projectImg.filter((x) => x.fileName === "print");

// get projectData from database

useEffect(() => {
   

    axios.get("http://localhost:5000/projects/data/get").then((result) => {
        setProjectImg(result.data);
    });    
   
  }, []);

    return (

        <>
        <PanelHeader
        size="sm"
        content={
          <div className="header text-center">
            <h2 className="title">Projects Setting</h2>
          </div>
        }
      />
      <div className="content">
         <div className="row ">
              <h3 className="text-center  text-capitalize text-primary py-5">JolDash</h3>
          {
            Joldash.length>0 &&  Joldash.map(x=><  UpdateProjects key={x.id} imgData={x}   />)
          }
         </div>
         <div className="row ">
              <h3 className="text-center  text-capitalize text-primary py-5">inSearchOf</h3>
          {
            inSearchOf.length>0 &&   inSearchOf.map(x=><  UpdateProjects key={x.id}  imgData={x}  />)
          }
         </div>
               
        </div>

        </>
    );
};

export default ProjectSetting;