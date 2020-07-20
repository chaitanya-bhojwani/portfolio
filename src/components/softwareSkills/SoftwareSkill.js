import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            if (skills.fontAwesomeClassname) {
              return (
                <li className="software-skill-inline" name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            } else {
              if (skills.skillName==="Vert.x") {
                return (
                  <li className="software-skill-inline" name={skills.skillName}>
                    <div className="skill-image-div">
                      <div className="skill-image-vertx">
                      </div>
                    </div>
                    <p>{skills.skillName}</p>
                  </li>
                );
              }
              if (skills.skillName==="Kotlin") {
                return (
                  <li className="software-skill-inline" name={skills.skillName}>
                    <div className="skill-image-div">
                      <div className="skill-image-kotlin">
                      </div>
                    </div>
                    <p>{skills.skillName}</p>
                  </li>
                );
              }
              if (skills.skillName==="MongoDB") {
                return (
                  <li className="software-skill-inline" name={skills.skillName}>
                    <div className="skill-image-div">
                      <div className="skill-image-mongo">
                      </div>
                    </div>
                    <p>{skills.skillName}</p>
                  </li>
                );
              }
              if (skills.skillName==="Kafka") {
                return (
                  <li className="software-skill-inline" name={skills.skillName}>
                    <div className="skill-image-div">
                      <div className="skill-image-kafka">
                      </div>
                    </div>
                    <p>{skills.skillName}</p>
                  </li>
                );
              }
              if (skills.skillName==="MQTT") {
                return (
                  <li className="software-skill-inline" name={skills.skillName}>
                    <div className="skill-image-div">
                      <div className="skill-image-mqtt">
                      </div>
                    </div>
                    <p>{skills.skillName}</p>
                  </li>
                );
              }
              if (skills.skillName==="Google Cloud") {
                return (
                  <li className="software-skill-inline" name={skills.skillName}>
                    <div className="skill-image-div">
                      <div className="skill-image-gcloud">
                      </div>
                    </div>
                    <p>{skills.skillName}</p>
                  </li>
                );
              }
            }
          })}
        </ul>
      </div>
    </div>
  );
}
