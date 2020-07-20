import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import {greeting, workExperiences} from "../../portfolio";

function Header() {
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#techStacks">Tech Stacks</a>
          </li>
          { exp === true &&
            <li>
              <a href="#workExperience">Work Experiences</a>
            </li>
          }
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#gitProjects">Github Projects</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#organizations">Organizations</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
