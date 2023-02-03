import React, { useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import "./LeftMenuBar.css";
import axios from "axios";
import { useCookies } from 'react-cookie'

import { Link } from "react-router-dom";


function LeftMenuBar() {
  const [resData, setResData] = useState([]);
  const [cookies, setCookies] = useCookies('GujCategory');

  let cookiesdata  = cookies.GujCategory
  console.log(cookiesdata);

  // useEffect(() => {

    
  //   axios.get("http://localhost:5000/call/GetCategory").then((response) => {
  //     setResData(response.data);
  //     console.log(response.data);
  //     setCookies('GujCategory', JSON.stringify(response.data))
  //   });

  //   return () => {};
  // }, []);

  useEffect(() => {

    if ( ! cookies.GujCategory) {
      axios.get("http://localhost:5000/call/GetCategory").then((response) => {
      setResData(response.data);
      console.log(response.data);
      setCookies('GujCategory', JSON.stringify(response.data))
    });
    }


  }, []);

  console.log(resData);


  return (
    
      <div className="category-section">
        {(! cookies.GujCategory ? resData :  cookiesdata) .map((news, index)=>{
          return(
            <>
            <a
          style={{ textDecoration: "none", color: "#000" }}
          href={`/category/${news.Category.EngCategory}`}
        >
          <div className="category" >
            <FontAwesomeIcon icon={faEarth}></FontAwesomeIcon>
            {news.Category.GujCategory}
          </div>
        </a>
            </>
          )
        })}
        
        
      </div>
  
    
  );
}

// export default LeftMenuBar;

export default React.memo(LeftMenuBar);
