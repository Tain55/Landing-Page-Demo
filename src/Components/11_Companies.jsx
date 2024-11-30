/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../assets/Images/Companies/forbes.png";
import img2 from "../assets/Images/Companies/fortune.png";
import img3 from "../assets/Images/Companies/tc.png";
import img4 from "../assets/Images/Companies/wsj.png";
import img5 from "../assets/Images/Companies/ft.png";
import img6 from "../assets/Images/Companies/cnbc.png";
import bg from "../assets/Images/Companies/Bg.png";

const Companies = () => {
  return (
    <div className="w-100 " style={{ height: "50vh" }}>
      <div
        className="d-flex align-items-center "
        style={{
          height: "100%",
          background: `url(${bg}) no-repeat center center/cover`,
        }}
      >
        <div
          className="container d-flex justify-content-between align-items-center flex-wrap"
          style={{ background: "none" }}
        >
          <img src={img1} alt="Forbes" className="m-2" />
          <img src={img2} alt="Fortune" className="m-2" />
          <img src={img3} alt="TC" className="m-2" />
          <img src={img4} alt="WSJ" className="m-2" />
          <img src={img5} alt="FT" className="m-2" />
          <img src={img6} alt="CNBC" className="m-2" />
          <img src={img1} alt="Forbes" className="m-2" />
          <img src={img2} alt="Fortune" className="m-2" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
