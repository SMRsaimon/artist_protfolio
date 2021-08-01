import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { userContext } from "../../App";
import SocialLink from "../SocialLink/SocialLink";
import "./Footer.css";

const Footer = () => {
  const {personalInfo}=useContext(userContext)
  const [img,setImg]=useState([])


 useEffect(() => {


  
  axios.get("http://localhost:5000/projects")
  .then(result=>{

    setImg(result.data)
    console.log(result.data)
  })
   
 }, [])

 console.log(img)


  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row">

          <div className="cil-md-12">
            { img.length>0 &&
              img.map(x=>  <div>

                <h1>{x.fileName}</h1>
                <img src={`${x.img}`} alt="jnkl" />
              </div> )
            }
          </div>
          <div className="col-md-12  d-flex justify-content-center">
            <div className="social-icon">

             <SocialLink/>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
              <div className="copy-right-text">
                     <p> Copyright @ {new Date().getFullYear()} All rights reserved by {personalInfo?.name}
.
                     Developed by  <a href="https://www.mensadigiworld.com">Mensa Digiworld</a> </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
