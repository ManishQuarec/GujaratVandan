import React from "react";
import "./SearchNews.css";
<<<<<<< HEAD
import NewsBlock from "../NewsBlock/NewsBlock";
import { useCookies  } from 'react-cookie'
import { useNavigate } from "react-router-dom";
=======
import { useCookies, useState } from "react-cookie";
>>>>>>> 125d4ea885acdb4183bff8c1b11f8e130389063e

function SearchNews() {
  const [cookies, setCookies] = useCookies("GujCategory");
  // const [data, setData]= useState()
  // console.log(cookies.GujCategory);
  let cookiesdata = cookies.GujCategory;
  console.log(cookiesdata);
<<<<<<< HEAD
  
  let navigate = useNavigate();

  const functionalData = (props) =>{
    console.log( props);
    navigate("/category/" +`${props}`, { replace: true })
    // navigate("/category/"+ `${props}`);
  }
  
=======

>>>>>>> 125d4ea885acdb4183bff8c1b11f8e130389063e
  return (
    <>
      <div className="Searchbar">
        <input type="text" placeholder="વિષય , શહેર કે રાજ્ય સર્ચ કરો" />
        <button className="Searchbarbtn">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div className="controlBox">
<<<<<<< HEAD
      {cookiesdata.map((news, index)=>{
        return (
          <>
        <div className="Searchitem" key={index}>
        <button className="BtnItems" onClick={(e) =>{functionalData(news.Category.EngCategory)}}>
          <i class="fa fa-globe"></i> {news.Category.GujCategory}
        </button>
        </div>
        
        
        </>
       )

     })}


        </div>
      
        {/* <NewsBlock value={{"unique":false} }/>  */}
=======
        {/* {cookiesdata.map((news, index) => { */}
        {/* // return ( */}
        {/* <div className="Searchitem"> */}
        {/* <button className="BtnItems"> */}
        {/* <i class="fa fa-globe"></i> {news.Category.GujCategory} */}
        {/* </button> */}
        {/* </div> */}
        {/* ); */}
        {/* })} */}
        <div className="Searchitem">
          <button className="BtnItems">
            <i class="fa fa-globe">અમદાવાદ</i>
          </button>
          <button className="BtnItems">
            <i class="fa fa-globe">ભાવનગર</i>
          </button>
          <button className="BtnItems">
            <i class="fa fa-globe">સુરત</i>
          </button>
          <button className="BtnItems">
            <i class="fa fa-globe">અમદાવાદ</i>
          </button>
          <button className="BtnItems">
            <i class="fa fa-globe">ભાવનગર</i>
          </button>
          <button className="BtnItems">
            <i class="fa fa-globe">ક્રાઇમ</i>
          </button>
          <button className="BtnItems">
            <i class="fa fa-globe">ભાવનગર</i>
          </button>
        </div>
      </div>
>>>>>>> 125d4ea885acdb4183bff8c1b11f8e130389063e
    </>
  );
}

export default SearchNews;
