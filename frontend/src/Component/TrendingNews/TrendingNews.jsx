import React from "react";
import "./TrendingNews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import img from "../../Image/HomePageIMage/raspred1.png";

function TrendingNews() {
  return (
    <div className="FullHead">
      <h3>
        <span className="idcolor">NIA raids at 72 places in 8 states of the country:</span> <br />
        <span>
          action against Kulwinder Sidhu of Gandhidham, probe into terror
          funding; Got a connection with Pakistan
        </span>
      </h3>

      <img className="" src={img} alt="" />

      <div className="NewFooter">
        <div>India</div>

        <div  className="SocialIcon">
          <FontAwesomeIcon
           className="SocialIconed"
            href="#"
            icon={faLink}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="SocialIconed"
            href="#"
            icon={faFacebook}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="SocialIconed"
            href="#"
            icon={faTwitter}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}

export default TrendingNews;
