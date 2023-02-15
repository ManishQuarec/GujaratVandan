import React, { useEffect, useState } from "react";
import "./BreakingNew.css";
// import Marquee from "react-fast-marquee";
import axios from "axios";
<<<<<<< HEAD

import Marquee from "react-fast-marquee";


=======
>>>>>>> 3165ae9b147e564e9a55dbf7db83f6ceb2c703db
function BreakingNews() {
  const [newsData, setNewsData] = useState([]);



  useEffect(() => {
    console.count("breaking news");

    axios
      .get(process.env.REACT_APP_API_BASE_URL + "/allBreakingNews")
      .then(async (response) => {
        // console.log(response.data.response);
        await setNewsData(response.data.response);
        // console.log(response.data.response);
      });
  }, []);
  return (
    <div className="breakingnews-line">
      <div className="breaking-news">BREAKING NEWS</div>
      <div className="news">
<<<<<<< HEAD

        <Marquee pauseOnHover={true} text="swetha" style={{ width: "100%" }} speed={80} >

=======
        <marquee
         direction="left"  text="swetha" style={{ width: "100%" }}>
>>>>>>> 3165ae9b147e564e9a55dbf7db83f6ceb2c703db
          {newsData.map((news, index) => (
            <>
              {" "}
              &nbsp; &nbsp; <b key={index}>{news.Title}: </b>
              {news.News}
            </>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default BreakingNews;
