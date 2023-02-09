import React, { useEffect, useState } from "react";
import "./NewsBlock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FullNews from "../../Component/FullNews/FullNews";
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";

function NewsBlock(props) {
  console.log(props.value.unique);
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  let { userId, cat } = useParams();
  // console.log(newsData);

  useEffect(() => {
    {
      props.value.unique
        ? axios
            .post(process.env.REACT_APP_API_BASE_URL + "/allNews")
            .then(async (response) => {
              // console.log(response.data.response);
              await setNewsData(response.data.response);

              // console.log(response.data.response);
            })
        : axios
            .post(process.env.REACT_APP_API_BASE_URL + "/allNewsData", {
              "data": cat,
            })
            .then(async (response) => {
              // console.log(response.data.response);
              await setNewsData(response.data.response);

              // console.log(response.data.response);
            });
    }

    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/allNews")
      .then(async (response) => {
        // console.log(response.data.response);
        await setNewsData(response.data.response);

        // console.log(response.data.response);
      });
  }, []);

  return (
    <>
      <div className="head">
        <h4>હેડલાઇન્સ</h4>
        <p>વધુ વાંચો...</p>
      </div>

      {newsData.slice(0).reverse().map((news, index) => {
        console.log(process.env.REACT_APP_API_URL + `${news.Path}`);
        console.log(news._id);

        return (
          <a href={`/FullNews/${news._id}`} className="ntres">
            <div className="BlockHead">
              <div className="headlines">
                <div className="headlines-right">
                  <img
                    src={process.env.REACT_APP_API_URL + `${news.Path}`}
                    alt={"data"}
                  />
                </div>
                <div className="headlines-left">
                  <h3>
                    {news.NewsTittle}
                  </h3>
                  <p>
                    {news.News}
                  </p>
                  <div className="footer">
                    <FontAwesomeIcon
                      className="globelicon"
                      href="#"
                      icon={faGlobe}
                    ></FontAwesomeIcon>
                    &nbsp;
                    <span className="CatName">{news.GujCategory} </span>
                    <FontAwesomeIcon
                      className="SocialGlobelIcns"
                      href="#"
                      icon={faLink}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      className="SocialGlobelIcns"
                      href="#"
                      icon={faFacebook}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      className="SocialGlobelIcns"
                      href="#"
                      icon={faTwitter}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}

// export default NewsBlock;
export default React.memo(NewsBlock);
