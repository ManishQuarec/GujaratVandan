import React, { useEffect, useState } from "react";
import "./NewsBlock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import img from "../../Image/HomePageIMage/raspred1.png";
// import FullNews from "../../Component/FullNews/FullNews";
import { useNavigate } from "react-router-dom";
import { FullNews, MyComponent } from "../../Component/FullNews/FullNews";
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
    // <a href={`/FullNews/${news._id}`} className="ntres">
    <>
      {newsDatas
        .slice(0)
        .reverse()
        .map((news, index) => (
         
          <div
            className="BlockHead"
            onClick={(e) => {
              handleClick(news._id);
            }}
          >
             {console.log(news.EngCategory)}
            <div className="refl">
              <div className="headlines-right">
                <img
                  // src={img}
                  src={process.env.REACT_APP_API_URL + `${news.Path}`}
                  alt={"data"}
                />
              </div>
              <div className="headlines-left">
                {/* <h3>{news.NewsTittle}</h3> */}
                {/* {dts(news.EngCategory)} */}
                <h3>
                  <font style={{ color: news.Colored ? news.Colored:"#000000"}}>
                    
                    {news.NewsTittle.slice(0, 52)}
                  </font>
                  {news.NewsSubTittle.split(" ").splice(0, 20).join(" ")}
                  {/* {news.NewsTittle} */}

                  {/* <MyComponent htmlContent={news.NewsTittle.split(" ").splice(0,20).join(" ")}/> */}
                </h3>
                {/* <p>{news.News}</p> */}
                {/* <p>{news.News}</p> */}
                {/* <MyComponent htmlContent={news.News}/> */}
              </div>
            </div>

            <div className="NewFooter2">
              <div className="cated">{news.GujCategory}</div>

              <div className="SocialIcon2">
                <FontAwesomeIcon
                  className="SocialIconed1"
                  href="#"
                  icon={faLink}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="SocialIconed2"
                  href="#"
                  icon={faFacebook}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="SocialIconed2"
                  href="#"
                  icon={faTwitter}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

// export default NewsBlock;
export default React.memo(NewsBlock);
