import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./Education.css";
import EducationCard from "./EducationCard";

import { educationData } from "../../data/educationData";

function Education() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="education"
      id="resume"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="education-body">
        <div className="education-image">
          <img
            src="https://res.cloudinary.com/dx1pvvqg7/image/upload/v1663734405/portfoliyo/Bibliophile-rafiki_njigva.png"
            alt=""
          />
        </div>
        <div className="education-description">
          <h1 style={{ color: theme.primary }}>Education</h1>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              image={edu.image}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
