import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Nav from "../../Component/Nav/Nav";
import Bottom from "../../Component/BottomNAV/Bottom"
import BreakingNews from "../../Component/BreakingNews/BreakingNews";
import LeftMenuBar from "../../Component/LeftMenuBar/LeftMenuBar";
import AppStore from "../../Component/AppStore/AppStore";
import VideoSlider from "../../Component/VideoSlider/VideoSlider";
import NewsBlock from "../../Component/NewsBlock/NewsBlock";
import ImageData from "../../Component/ImageData/ImageData";
import ShortNews from "../../Component/ShortNews/ShortNews";
import RightPhotoImage from "../../Component/RightPhotoImage/RightPhotoImage";
import SocialMediaLeft from "../../Component/SocialMediaLeft/SocialMediaLeft";

import FullNews from "../../Component/FullNews/FullNews";
import searchNews from "../../Component/SearchNews/SearchNews";
import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import EPapers from "../../Component/E-Papers/Papers";
import TrendingNews from "../../Component/TrendingNews/TrendingNews";
import axios from "axios";

function HomePage(props) {
  document.title = "Gujarat Vandan - Home";
  return (
    <>
      <Helmet>
        <meta property="og:image" content="https://pbs.twimg.com/media/FUJUNyQUUAIPURc.jpg" />
      </Helmet>
      <TrendingNews/>

      {/* <VideoSlider /> */}
      {/* <ImageData value={{ GujCategory: "રાજકારણ", EngCategory: "politics" }} />
      <ImageData value={{ GujCategory: "વ્યાપાર", EngCategory: "Business" }} /> */}
      <NewsBlock value={{ unique: true }} />
      {/* <NewsBlock value={{ unique: true }} />
      <NewsBlock value={{ unique: true }} />
      <NewsBlock value={{ unique: true }} /> */}
    </>
  );
}

// export default HomePage;
export default React.memo(HomePage);
