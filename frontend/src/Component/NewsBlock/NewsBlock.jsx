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
  const [url, setUrl] = useState(window.location.href);
  function handleCopyUrl() {
    navigator.clipboard.writeText(url);
    alert("URL copied to clipboard!");
  }
  console.log("datassss", props.value.unique);
  const navigate = useNavigate();
  const [newsDatas, setNewsDatas] = useState([]);

  let { userId, cat } = useParams();
  console.log("dataser", newsDatas);

  const handleClick = (e) => {
    setNewsDatas([]);
    // await
    navigate("/FullNews/" + `${e}`, { replace: true });
  };

  useEffect(() => {
    // await setNewsDatas([])
    console.warn(cat);
    setNewsDatas([]);
    {
      props.value.unique == true
        ? axios
            .post(process.env.REACT_APP_API_BASE_URL + "/allNews")
            .then(async (response) => {
              // console.log(response.data.response);
              await setNewsDatas(response.data.response);

              console.log("res1");
            })
        : axios
            .post(process.env.REACT_APP_API_BASE_URL + "/allNewsData", {
              data: cat,
            })
            .then(async (response) => {
              // console.log(response.data.response);
              await setNewsDatas(response.data.response);
              console.log("res2");
              // console.log(response.data.response);
            });
    }
  }, []);

  return (
    <>
      <div className="head">
        <h4>હેડલાઇન્સ</h4>
        <p>વધુ વાંચો...</p>
      </div>

      {newsDatas
        .slice(0)
        .reverse()
        .map((news, index) => {
          console.log(process.env.REACT_APP_API_URL + `${news.Path}`);
          console.log(news._id);

          return (
            // <a href={`/FullNews/${news._id}`} className="ntres">
            <div
              className="BlockHead"
              onClick={(e) => {
                handleClick(news._id);
              }}
            >
              <div className="headlines">
                <div className="headlines-right">
                  <img
                    src={process.env.REACT_APP_API_URL + `${news.Path}`}
                    alt={"data"}
                  />
                </div>
                <div className="headlines-left">
                  <h3>{news.NewsTittle}</h3>
                  <p>{news.News}</p>
                  <div className="footer">
                    <FontAwesomeIcon
                      className="globelicon"
                      href="#"
                      icon={faGlobe}
                    ></FontAwesomeIcon>
                    &nbsp;
                    <span className="CatName">{news.GujCategory} </span>
                    <FontAwesomeIcon
                      onClick={handleCopyUrl}
                      className="SocialGlobelIcns"
                      href="/FullNews"
                      icon={faLink}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      onClick={handleCopyUrl}
                      className="SocialGlobelIcns"
                      href="#"
                      icon={faFacebook}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      onClick={handleCopyUrl}
                      className="SocialGlobelIcns"
                      href="#"
                      icon={faTwitter}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </div>
            // </a>
          );
        })}
    </>
  );
}

// export default NewsBlock;
export default React.memo(NewsBlock);
