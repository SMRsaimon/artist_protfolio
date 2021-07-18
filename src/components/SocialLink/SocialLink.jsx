import React from "react";
import "./SocialLink.css"
import {
    IoLogoFacebook,
    IoLogoLinkedin,
    IoLogoInstagram,
  } from "react-icons/io";


const SocialLink = () => {
  const socialLink = [
    {
      link: "https://www.facebook.com/ReyadAbedin1",
      icon: <IoLogoFacebook />,
    },
    {
      link: "https://www.linkedin.com/in/reyad-abedin-3321647b/",
      icon: <IoLogoLinkedin />,
    },
    {
      link: "https://www.instagram.com/reyad_abedin/",
      icon: <IoLogoInstagram />,
    },
  ];
  return (
    <>
      <ul className="d-flex ms-1 about-social-icon">
        {socialLink.map((x, index) => (
          <li key={index}>
            <a target="_blank" rel="noreferrer" className="icon" href={x.link}>
              {x.icon}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialLink;
