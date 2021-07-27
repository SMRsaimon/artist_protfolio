import React from "react";
import SocialLink from "../SocialLink/SocialLink";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12  d-flex justify-content-center">
            <div className="social-icon">

             <SocialLink/>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
              <div className="copy-right-text">
                     <p> Copyright @ {new Date().getFullYear()} All rights reserved by Reyad Abedin
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
