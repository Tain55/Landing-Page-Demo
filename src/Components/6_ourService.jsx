/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OurService = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="my-5">
      <p
        className="d-flex justify-content-center"
        style={{ fontSize: "48px", fontWeight: "600", color: "white" }}
      >
        Our Services
      </p>
      <div className="d-flex justify-content-center mt-5">
        <button
          className={`btn col-3 mx-2 ${hovered === "1" ? "col-4" : ""}`}
          onMouseEnter={() => setHovered("1")}
          onMouseLeave={() => setHovered(null)}
          style={{
            transition: "all 0.3s ease",
            backgroundColor: hovered === "1" ? "#CACACA" : "#181818",
            color: "#fff",
            height: "528px",
            textAlign: hovered === "1" ? "left" : "center",
            paddingLeft: hovered === "1" ? "20px" : "0",
          }}
        >
          <div
            className={`p-3 d-flex flex-column align-items-start justify-content-start gap-2 ${
              hovered === "1" ? "text-white" : ""
            }`}
            style={{ background: "none" }}
          >
            <p
              style={{
                background: "none",
                fontSize: hovered === "1" ? "30px" : "28px",
                fontWeight: "700",
                color: hovered === "1" ? "#000" : "#fff",
              }}
            >
              Design
            </p>
          </div>
        </button>

        <button
          className={`btn col-3 mx-2 ${hovered === "2" ? "col-4" : ""}`}
          onMouseEnter={() => setHovered("2")}
          onMouseLeave={() => setHovered(null)}
          style={{
            transition: "all 0.3s ease",
            backgroundColor: hovered === "2" ? "#CACACA" : "#181818",
            color: "#fff",
            height: "528px",
            textAlign: hovered === "2" ? "left" : "center",
            paddingLeft: hovered === "2" ? "20px" : "0",
          }}
        >
          <div
            className={`p-3 d-flex flex-column align-items-start justify-content-start gap-2 ${
              hovered === "2" ? "text-white" : ""
            }`}
            style={{ background: "none" }}
          >
            <p
              style={{
                background: "none",
                fontSize: hovered === "2" ? "30px" : "28px",
                fontWeight: "700",
                color: hovered === "2" ? "#000" : "#fff",
              }}
            >
              Development
            </p>
          </div>
        </button>

        <button
          className={`btn col-3 mx-2 ${hovered === "3" ? "col-4" : ""}`}
          onMouseEnter={() => setHovered("3")}
          onMouseLeave={() => setHovered(null)}
          style={{
            transition: "all 0.3s ease",
            backgroundColor: hovered === "3" ? "#CACACA" : "#181818",
            color: "#fff",
            height: "528px",
            textAlign: hovered === "3" ? "left" : "center",
            paddingLeft: hovered === "3" ? "20px" : "0",
          }}
        >
          <div
            className={`p-3 d-flex flex-column align-items-start justify-content-start gap-2 ${
              hovered === "3" ? "text-white" : ""
            }`}
            style={{ background: "none" }}
          >
            <p
              style={{
                background: "none",
                fontSize: hovered === "3" ? "30px" : "28px",
                fontWeight: "700",
                color: hovered === "3" ? "#000" : "#fff",
              }}
            >
              SEO & Marketing
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default OurService;
