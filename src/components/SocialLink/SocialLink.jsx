import React, { useContext } from "react";
import "./SocialLink.css"
import {
    IoLogoFacebook,
    IoLogoLinkedin,
    IoLogoInstagram,
  } from "react-icons/io";
import { userContext } from "../../App";


const SocialLink = () => {
  const {personalInfo}=useContext(userContext)

  const socialLink = [
    {
      link:personalInfo?.facebook ,
      icon: <IoLogoFacebook />,
    },
    {
      link: personalInfo?.linkedIn,
      icon: <IoLogoLinkedin />,
    },
    {
      link:  personalInfo?.instagram,
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
