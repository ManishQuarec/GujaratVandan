import React from "react";
import "./RightPhotoImage.css";

function RightPhotoImage() {
  return (
    <>
      <div className="head">
        <h4>રસપ્રદ</h4>
        <p>વધુ વાંચો...</p>
      </div>
      <div className="img-right">
        <img
          src={require("../../Image/HomePageIMage/raspred1.png")}
          style={{ height: "222px", width: "267px", border: "1px solid #000" }}
        />
        <p className="ShortNews">
          આબોહવા પરિવર્તન: આગથી વૈશ્વિક વૃક્ષોના નુકસાનનો આશ્ચર્યજનક દર
        </p>
      </div>
      <div className="img-right">
        <img
          src={require("../../Image/HomePageIMage/raspred1.png")}
          style={{ height: "222px", width: "267px", border: "1px solid #000" }}
        />
        <p className="ShortNews">
          આબોહવા પરિવર્તન: આગથી વૈશ્વિક વૃક્ષોના નુકસાનનો આશ્ચર્યજનક દર
        </p>
      </div>
    </>
  );
}

export default RightPhotoImage;
