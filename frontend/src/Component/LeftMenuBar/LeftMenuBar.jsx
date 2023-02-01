import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import './LeftMenuBar.css';

function LeftMenuBar() {
  return (
    <div className="category-section">
      <a
       style={{ textDecoration: "none", color: "#000" }}
        href="/category/Homeandabroad"
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          દેશ-વિદેશ
        </div>
      </a>
      <a
       style={{ textDecoration: "none", color: "#000" }}
        href="/category/India"
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          ભારત
        </div>
      </a>
      <a
       style={{ textDecoration: "none", color: "#000" }}
        href="/category/politics"
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          રાજકારણ
        </div>
      </a>
      <a
       style={{ textDecoration: "none", color: "#000" }}
        href="/category/Game-world"
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          રમત-ગમત
        </div>
      </a>
      <a
       style={{ textDecoration: "none", color: "#000" }}
        href="/category/Business"
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          વ્યાપાર
        </div>
      </a>
      <a
       style={{ textDecoration: "none", color: "#000" }}
        href="/category/Crime"
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          ક્રાઇમ
        </div>
      </a>
      <a
       style={{ textDecoration: "none", color: "#000" }}
        href="/category/Education"
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          મનોરંજન
        </div>
      </a>
      <a
       style={{ textDecoration: "none", color: "#000" }}
        href="/category/Education"
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          શિક્ષણ
        </div>
      </a>
      <a
       style={{ textDecoration: "none", color: "#000" }}
        
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          અજબગજબ
        </div>
      </a>
      <a
       style={{ textDecoration: "none", color: "#000" }}
        href="/category/piety"
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          ધર્મભક્તિ
        </div>
      </a>
      <a
       style={{ textDecoration: "none", color: "#000" }}
        href="/category/Lifestyle"
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          લાઇફ સ્ટાઇલ
        </div>
      </a>
      <a
       style={{ textDecoration: "none", color: "#000" }}
        href="/category/Technology"
      >
        <div className="category">
          <FontAwesomeIcon  icon={faEarth}></FontAwesomeIcon>
          ટેક્નોલોજી
        </div>
      </a>
    </div>
  );
}

export default LeftMenuBar;
