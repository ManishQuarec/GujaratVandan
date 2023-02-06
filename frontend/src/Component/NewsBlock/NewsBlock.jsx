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
  console.log(props.value.data);
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
            .post(process.env.REACT_APP_API_BASE_URL + "/allNewsData", {data:cat})
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

      {newsData.map((news, index) => {
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
                    {/* સુરક્ષાદળો સાથેની અથડામણમાં */}
                    {/* <span style={{ color: "#ff0000" }}>જમ્મુ-કાશ્મીરના</span>{" "} */}
                    {/* અરનિયામાં એક આતંકીને ઠાર */}
                  </h3>
                  <p>
                    {/* મોહમ્મદ અલી હુસૈન નામના આતંકીને સુરક્ષાદળોએ ઠાર કર્યો છે તો બીજી
              બાજુ ટોફ ગામમાં એક પાકિસ્તાની ડ્રોનથી છોડવામાં આવેલા હથિયાર અને
              દારૂગોળા જપ્ત કરવામાં આવ્યા છે. આ માહિતી પોલીસ દ્વારા આપવામાં આવી
              છે. */}

                    {news.News}
                  </p>
                  <div className="footer">
                    {/* <div className="icon"> */}
                    {/* <h4> */}
                    <FontAwesomeIcon
                      href="#"
                      icon={faGlobe}
                      style={{
                        fontSize: "100%",
                        color: "#3b5998",
                        // marginTop: "10%",
                      }}
                    ></FontAwesomeIcon>
                    &nbsp;
                    <span style={{ fontWeight: "900" }}>
                      {news.GujCategory}{" "}
                    </span>
                    <FontAwesomeIcon
                      href="#"
                      icon={faLink}
                      style={{
                        fontSize: "100%",
                        color: "#3b5998",
                        float: "right",
                        paddingRight: "1%",
                      }}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      href="#"
                      icon={faFacebook}
                      style={{
                        fontSize: "100%",
                        color: "#3b5998",
                        float: "right",
                        paddingRight: "1%",
                      }}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      href="#"
                      icon={faTwitter}
                      style={{
                        fontSize: "100%",
                        color: "#3b5998",
                        float: "right",
                        paddingRight: "1%",
                      }}
                    ></FontAwesomeIcon>
                    {/* </h4> */}
                    {/* </div> */}
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
export default React.memo(NewsBlock)


