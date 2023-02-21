import React, { useEffect, useState } from "react";
import "./VideoSlider.css";
import axios from "axios";

function VideoSlider() {
  const [newsData, setNewsData] = useState([]);
  console.log();
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/allNewsData", {
        data: "Trending News",
      })
      .then(async (response) => {
        // console.log(response.data.response);
        await setNewsData(response.data.response);
        // console.log(response.data.response);
      });
  }, []);
  document.title = "Gujarat Vandan ";

  console.warn(newsData);

  return (
    <div className="trending-news">
      <div className="head">
        <h4>ટ્રેન્ડિંગ ન્યૂઝ</h4>
        <p>વધુ વાંચો...</p>
      </div>
      <br />

      {/* <div id="slideshow">
        <div className="slide-wrapper">
          {newsData.map((news, index) => (
            <>
              {console.log(news.Path)}
              <a href="/index.html" key={index}>


            
                <img
                  className="SliderIMG"
                  src={process.env.REACT_APP_API_URL + `${news.Path}`}

                  alt=""
                />
                <div key={index} className="bottom-left">
                  {news.NewsTittle}
                </div>
              </a>
            </>
          ))}
        </div>
      </div> */}

      {/* New Slider Start */}
      <div className="containerSlider">
        <div className="content">
          <div className="slideshow">
            <button className="slide-btn slide-btn-1"></button>
            <button className="slide-btn slide-btn-2"></button>
            <button className="slide-btn slide-btn-3"></button>
            <button className="slide-btn slide-btn-4"></button>
           
            <div className="slideshow-wrapper">
         
              <div className="slide">
              {/* {newsData.map((news, index) => (
            <> */}
                <img
                  className="slide-img"
                  src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80"
                  alt=""
                />
                <p className="Textdata">જેની સાથે લગ્ન કર્યા એ 5000 કાર ચોરનારની પત્ની અને સહ આરોપી, નોનવેજ અને બિયર પીવાની છે શોખીન</p>
                {/* </>
          ))} */}
              </div>  
            
              <div className="slide">
                <img
                  className="slide-img"
                  alt=""
                  src="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"
                />
                <p className="Textdata">જેની સાથે લગ્ન કર્યા એ 5000 કાર ચોરનારની પત્ની અને સહ આરોપી, નોનવેજ અને બિયર પીવાની છે શોખીન</p>
              </div>
              <div className="slide">
                <img
                  className="slide-img"
                  alt=""
                  src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                />
                <p className="Textdata">જેની સાથે લગ્ન કર્યા એ 5000 કાર ચોરનારની પત્ની અને સહ આરોપી, નોનવેજ અને બિયર પીવાની છે શોખીન</p>
              </div>
              <div className="slide">
                <img
                  className="slide-img"
                  alt=""
                  src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80"
                />
                <p className="Textdata">જેની સાથે લગ્ન કર્યા એ 5000 કાર ચોરનારની પત્ની અને સહ આરોપી, નોનવેજ અને બિયર પીવાની છે શોખીન</p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      {/* New Slider END */}
    </div>
  );
}

export default React.memo(VideoSlider);
