import React, { useEffect, useState } from "react";
import "./RightPhotoImage.css";
import axios from "axios";

function RightPhotoImage(name) {
  const [newsData, setNewsData] = useState([]);
  const [length, setLength] = useState();

  console.log(newsData);

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/allNewsData", {
        data: name.value.EngCategory,
      })
      .then(async (response) => {
        console.log(response.data.response.length);
        await setNewsData(response.data.response);
        setLength(response.data.response.length);
        // console.log(response.data.response);
      });
  }, []);

  return (
    <>
      <div className="head">
        <h4>{name.value.GujCategory}</h4>
        <p>વધુ વાંચો...</p>
      </div>

      {newsData.slice(length - 2, length).map((news, index) => {
        return (
          <>
            <a href={`/FullNews/${news._id}`} className="rtes">
              <div className="img-right">
                <img
                  src={"http://localhost:5000" + `/${news.Path}`}
                  alt="Image"
                />

                <p className="ShortNews">
                  {/* આબોહવા પરિવર્તન: આગથી વૈશ્વિક વૃક્ષોના નુકસાનનો આશ્ચર્યજનક દર */}
                  {news.NewsTittle}
                </p>
              </div>
            </a>
          </>
        );
      })}
      {/* <div className="img-right">
        <img

          src={require("../../Image/HomePageIMage/raspred1.png")} alt="Image"/>

        <p className="ShortNews">
          આબોહવા પરિવર્તન: આગથી વૈશ્વિક વૃક્ષોના નુકસાનનો આશ્ચર્યજનક દર
        </p>
      </div> */}
    </>
  );
}

// export default RightPhotoImage;
export default React.memo(RightPhotoImage);
