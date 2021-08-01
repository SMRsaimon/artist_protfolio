import React, { useContext } from "react";
import { Container } from "reactstrap";

import PropTypes from "prop-types";
import { userContext } from "../../../App";

function Footer(props) {
  const {personalInfo}=useContext(userContext)
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        {/* Copyright @ 2021 All rights reserved by Riyad Abedin. Developed by Mensa Digiworld */}
        <div className="copyright">
        Copyright   &copy; {1900 + new Date().getYear()}, All rights reserved by {" "}
          <a href="https://www.reyadabedin.com/" target="_blank" rel="noopener noreferrer">
          {" "}  {personalInfo?.name}
          </a>
          {" "}  Developed by
          <a href="https://www.mensadigiworld.com/" target="_blank" rel="noopener noreferrer">
          {" "}   Mensa Digiworld
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
 