import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import "../ComingSoon/Coming";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlayCircle,
  faSearch,
  faNewspaper,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
    <div className="insideContainer">
      <div className="Container">
        
        <input type="checkbox" id="check" />

        <div className="logo">
        <a href="/">
          <img src={require("../../Image/HomePageIMage/Logo.png")} alt="Logo" />
          </a>
          {/* <div className="date">
            {date.toLocaleDateString()} {date.toLocaleTimeString()}
          </div> */}
          <div className="date">
            {date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear()}{" "}
            {date.toLocaleTimeString()}
          </div>
        </div>
        <label htmlFor="check" className="Icones">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </label>
        <div className="navmenu">
          <ul>
            <a style={{ textDecoration: "none", color: "#000" }} href="/">
              <li className="link">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>હોમ
              </li>
            </a>
            <a style={{ textDecoration: "none", color: "#000" }} href="/Coming">
              <li className="link">
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>વીડિઓ
              </li>
            </a>
            <a style={{ textDecoration: "none", color: "#000" }} href="/Coming">
              <li className="link">
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>સર્ચ કરો
              </li>
            </a>
            <a
              style={{ textDecoration: "none", color: "#000" }}
              href="/EPapers"
            >
              <li className="link">
                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>ઇ-પેપર્સ
              </li>
            </a>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
}

// export default Nav;
export default React.memo(Nav);
