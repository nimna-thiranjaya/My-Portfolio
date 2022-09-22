import React, { useContext } from "react";

import "./About.css";
import { ThemeContext } from "../../contexts/ThemeContext";

function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>Who I am</h2>
          <p style={{ color: theme.tertiary80 }}>
            My name is Nimna Thiranjaya. i'm 22 years old and i'm funny man XD
            😆
            <br />
            <br />
            Currently, I am a 3rd year 2nd semester undergraduate student at Sri
            Lanka Institute of Information Technology, graduating with a BSc
            (Hons) in Software Engineering and also I'm intern Full-Stack
            software Engineer at ICTA of sri lanka
          </p>
        </div>
        <div className="about-img">
          <img
            src="https://res.cloudinary.com/dx1pvvqg7/image/upload/v1663733453/portfoliyo/Webinar-pana_ec4dbu.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
