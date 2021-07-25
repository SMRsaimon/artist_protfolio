import React from "react";
import { Container } from "reactstrap";

import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        {/* Copyright @ 2021 All rights reserved by Riyad Abedin. Developed by Mensa Digiworld */}
        <div className="copyright">
        Copyright   &copy; {1900 + new Date().getYear()}, All rights reserved by {" "}
          <a href="#" target="_blank" rel="noopener noreferrer">
          {" "}  Reyad  Abedin
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
 