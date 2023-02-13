import React, { useEffect, useState } from "react";
import "./VideoSlider.css";
import axios from "axios";

function VideoSlider() {
  const [newsData, setNewsData] = useState([]);
  console.log();
  useEffect(() => {

    axios.post(process.env.REACT_APP_API_BASE_URL+"/allNewsData" ,{data:"Trending News"}).then(async (response) => {
      // console.log(response.data.response);
      await setNewsData(response.data.response);
      // console.log(response.data.response);
    });

  }, []);

  console.warn(newsData)

  return (
    <div className="trending-news">
      <div className="head">
        <h4>ટ્રેન્ડિંગ ન્યૂઝ</h4>
        <p>વધુ વાંચો...</p>
      </div>
      <br />

      <div id="slideshow">
        <div className="slide-wrapper">

        {newsData.map((news, index) => (
            <>
              {console.log(news.Path)}
              <a href="/index.html" key={index}>
                <img className="SliderIMG"
                  // style={{ height: "400px", width: "800px" }}
                  src={process.env.REACT_APP_API_URL+ `/${news.Path}`}
                  // src={"http://localhost:5000/Media/2023/1/13/jpg.jpg"}
                  alt=""
                />

                <div key={index} className="bottom-left">
                  {news.NewsTittle}
                </div>
              </a>
              
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(VideoSlider);
