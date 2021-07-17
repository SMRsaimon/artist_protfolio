import React from "react";
import "./About.css";
import Sidebar from "../Navigation/Sidebar";
import profilePic from "../../resource/img/bio-img/Bio Photo.jpg";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io";

const About = () => {
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

  const bioContent = [
    {
      P: `There is a strong presence and understanding of Reyad Abedin’s
         surroundings in his work. His work is drawn from the notions
         of memories, place, time and space alongside reflecting upon
         the relationships between human & nature, environment &
         landscapes. He is driven by research-led, self-initiated
         projects that push him both as an artist and as an individual.
         He need to question, understanding, and access the world close
         to him. His works aim to tell and inspire stories.`,
    },
    {
      P: ` Reyad Abedin Journey with photography started when he is a
         higher secondary student. After receiving a degree in apparel
         manufacturing management, serious passion for photography
         leads him to decide, pursue photography as a profession.
         Following an interest in storytelling, he studied at Counter
         Foto-A Center for Visual Arts, at Dhaka, Bangladesh.
         Currently, he is based in Bangladesh working as an independent
         photographer.`,
    },
    {
      P: ` His work recognized by many International organizations and
         magazines, including International center for Photography
         museum, Sony World Photography Organizations (Student grant
         Winner), Ian Parry Scholarship, Format photography Festival,
         Format Magazine, Sunday Times Magazine, etc.`,
    },
  ];
  return (
    <>
      <div id="about" className="container-fluid">
        <Sidebar />

        <div className="container pt-5">
          <h1>Bio</h1>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="about-img-container py-3 mb-5 ">
                <img src={profilePic} class="img-thumbnail" alt="..."></img>
                <div className="d-flex justify-content-center">
                  <ul className="d-flex ms-1 about-social-icon">
                    {socialLink.map((x, index) => (
                      <li key={index}>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="icon"
                          href={x.link}
                        >
                          {x.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-container">
                {bioContent.length <= 3 &&
                  bioContent.map((x, index) => <p key={index}>{x.P}</p>)}
              </div>
            </div>

            <div className="col-md-12">
              <div className="content-container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  tempora quas voluptatem minima fugiat doloremque officia. Enim
                  est magnam voluptate necessitatibus cum hic beatae debitis
                  expedita omnis dignissimos, et at rem laborum amet, unde,
                  exercitationem magni quis facilis nisi consectetur nulla ad
                  fugit quas. Est, officia labore dolor hic distinctio esse
                  neque praesentium recusandae repudiandae. Perspiciatis natus
                  maiores ut mollitia maxime consectetur ipsam cupiditate
                  nostrum iure, rem doloremque sunt? At voluptates praesentium,
                  quasi ipsa omnis molestias? Aut, eaque. Vel, similique! Quam
                  culpa suscipit quae architecto soluta voluptas sed nobis? Quae
                  obcaecati, necessitatibus aperiam unde exercitationem
                  consequuntur magnam impedit saepe inventore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
