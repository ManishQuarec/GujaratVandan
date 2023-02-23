import React, { useEffect, useState } from "react";
import "./IMG-CSS/FullNews.css";
import BenIMG from "./IMG-CSS/BenImg.png";
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import axios from "axios";
import NewsBlock from "../NewsBlock/NewsBlock";
function MyComponent({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

function FullNews() {
  let { userId } = useParams();
  console.log("userid", userId);
  const [newsData, setNewsData] = useState({});
  const [image, setImage] = useState("");
  const [tittle, setTittle] = useState("");
  const [subTittle, setSubTittle] = useState("");
  const [news, setNews] = useState("");
  const [colored, setColored] = useState("");

  //  const data = (dat) => {
  //   React.createElement(

  //   {dat}
  //   )
  //  }

  // function createMarkup(text) { return {__html: text}; };

  console.log(news);
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/allNewsDataId", {
        data: userId,
      })
      .then(async (response) => {
        console.log("new", response.data.response[0]);
        await setNewsData(response.data.response);
        await setImage(response.data.response[0].Path);
        await setTittle(response.data.response[0].NewsTittle);
        await setNews(response.data.response[0].News);
        await setSubTittle(response.data.response[0].NewsSubTittle);
        await setColored(response.data.response[0].Colored);
        // console.log(response.data.response);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="datt">
        <div className="FullNews">
          {/* <a href="/State">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;
          ગુજરાતી / સમાચાર / સ્થાનિક / ગુજરાત / ગાંધીનગર / 
        </a> */}
          <div className="NewsContent">
            <h1>
              <font style={{ color: colored ? colored : "#000000" }}>
                {" "}
                {tittle.slice(0, 52)}{" "}
              </font>{" "}
              {/* {subTittle.split(" ").splice(0, 20).join(" ")} */}
              {subTittle}
            </h1>
          </div>
        </div>
        <div className="ImgSection">
          <img src={process.env.REACT_APP_API_URL + `${image}`} alt="" />
        </div>
        <div className="NewsContent">
          {/* <h1>{tittle}</h1> */}
          {/* <>{news}</> */}
          <MyComponent htmlContent={news} />
          {/* <data dat={news}/> */}
        </div>
        <NewsBlock style={{ width: "auto" }} value={{ unique: true }} />
      </div>
    </>
  );
}

export { FullNews, MyComponent };
