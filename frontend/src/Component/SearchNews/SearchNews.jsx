import React from "react";
import "./SearchNews.css";
import { useCookies, useState } from 'react-cookie'

function SearchNews() {
  const [cookies, setCookies] = useCookies('GujCategory');
  // const [data, setData]= useState()
  // console.log(cookies.GujCategory);
  let cookiesdata  = cookies.GujCategory
  console.log(cookiesdata);
  
  return (
    <>
      <div className="Searchbar">
        <input type="text" placeholder="વિષય , શહેર કે રાજ્ય સર્ચ કરો" />
        <button className="Searchbarbtn">
          <i class="fa fa-search"></i>
        </button>
        </div>
      <div className="controlBox">
      {cookiesdata.map((news, index)=>{
        return (
        <div className="Searchitem">
        <button className="BtnItems">
          <i class="fa fa-globe"></i> {news.Category.GujCategory}
        </button>
        </div>
        
       )

     })}
        </div>
      
     
    </>
  );
}

export default SearchNews;
