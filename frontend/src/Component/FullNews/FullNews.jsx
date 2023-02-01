import React, { useEffect, useState } from "react";
import "./IMG-CSS/FullNews.css";
import BenIMG from "./IMG-CSS/BenImg.png";
import { Route, Routes, BrowserRouter, useParams  } from "react-router-dom";
import axios from "axios";

function FullNews() {
  let { userId } = useParams();
  console.log("userid", userId );
  const [newsData, setNewsData] = useState({});
  const [image, setImage]=useState("");
  const [tittle, setTittle]=useState("");
  const [news, setNews]=useState("")


console.log(image ,tittle, news  );
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/allNewsDataId", {data:userId})
      .then(async (response) => {
        console.log(response.data.response[0].Path);
        await setNewsData(response.data.response);
        await setImage(response.data.response[0].Path);
        await setTittle(response.data.response[0].NewsTittle);
        await setNews(response.data.response[0].News);
        

        // console.log(response.data.response);
      });
  }, []);

  return (
    <>
      <div className="FullNews">
        <a href="/State">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;
          ગુજરાતી / સમાચાર / સ્થાનિક / ગુજરાત / ગાંધીનગર / જેમને નિષ્ફળતા તરીકે
          બરતરફ કરવામાં આવ્યા હતા, સંસ્થાને તેમની જરૂર હતી...
        </a>
      </div>
      <div className="ImgSection">
        <img src={process.env.REACT_APP_API_URL + `${image}`} alt="" />
      </div>
      <div className="NewsContent">
        <h1>{tittle}</h1>
        <p>
         {news}
        </p>
      </div>
    </>
  );
}

export default FullNews;
