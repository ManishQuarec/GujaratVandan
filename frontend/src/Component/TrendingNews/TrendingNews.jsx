import React, { useEffect, useState } from "react";
import "./TrendingNews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import img from "../../Image/HomePageIMage/raspred1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TrendingNews() {
  const [resData, setResData] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    // await
    navigate("/FullNews/" + `${e}`, { replace: true });
  };
  // const data = resData.length;
  // console.log("ntt",resData.NewsTittle);
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/allNewsData", {
        data: "Top news",
      })
      .then(async (response) => {
        await setResData(
          response.data.response[response.data.response.length - 1]
        );
        // console.log("ntt",response.data);
      });
  }, []);

  return (
    <div
      className="FullHead"
      onClick={(e) => {
        handleClick(resData._id);
      }}
    >
      <h3>
        <span style={{ color: resData.Colored ? resData.Colored : "#000000" }}>
          {resData.NewsTittle}
        </span>{" "}
        <br />
        <span>{resData.NewsSubTittle}</span>
      </h3>

      {/* <img className="" src={img} alt="" /> */}
      <img src={process.env.REACT_APP_API_URL + `${resData.Path}`} alt="" />

      <div className="NewFooter">
        <div className="catted">{resData.GujCategory}</div>

        <div className="SocialIcon">
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
