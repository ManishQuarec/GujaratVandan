import React, { useEffect, useState } from "react";
import "./NewsBlock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
// import FullNews from "../../Component/FullNews/FullNews";
import { useNavigate } from "react-router-dom";
import {FullNews, MyComponent} from "../../Component/FullNews/FullNews";
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
            <div
              className="BlockHead"
              onClick={(e) => {
                // handleClick(news._id);
              }}
            >
              <div className="headlines">
                <div className="headlines-right">
                  <img
                    // src={process.env.REACT_APP_API_URL + `${news.Path}`}
                    alt={"data"}
                  />
                </div>
                <div className="headlines-left">

                  {/* <h3>{news.NewsTittle}</h3> */}
                  <h3>સુરત આવતાં-જતાં લોકો આ ખાસ વાંચજો:BJP MLA-બસ ઓપરેટરો આમને-સામને, આવતીકાલથી લક્ઝરી બસ શહેરમાં નહીં પ્રવેશે, 10 લાખથી વધુ લોકોને અસર </h3>
                  {/* <p>{news.News}</p> */}
                  {/* <p>{news.News}</p> */}
                  {/* <MyComponent htmlContent={news.News}/> */}
                  <div className="footer">
                    {/* <FontAwesomeIcon
                      className="globelicon"
                      href="#"
                      icon={faGlobe}
                    ></FontAwesomeIcon> */}
                    &nbsp;
                    {/* <span className="CatName">{news.GujCategory} </span> */}
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
        }
//         )}
//     </>
//   );
// }

// export default NewsBlock;
export default React.memo(NewsBlock);
