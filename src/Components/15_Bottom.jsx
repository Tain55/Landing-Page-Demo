/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Images/logo.png";
import { TfiArrowTopRight } from "react-icons/tfi";

const Bottom = () => {
  const pStyle = {
    fontSize: "16px",
    fontWeight: "400",
    color: "white",
    background: "none",
  };
  return (
    <div>
      <div className="container d-flex justify-content-between mt-2 mb-5">
        <p style={pStyle}>© 2023 Aethermind. All Rights Reserved.</p>
        <div className="d-flex gap-5">
          <p style={pStyle}>Design by ideatedlab team</p>
          <p style={pStyle}>Powered by webflow</p>
        </div>
      </div>
      <div
        className="d-flex align-items-center mb-5 "
        style={{ background: "#1B1D22", height: "84px" }}
      >
        <div
          className="container d-flex justify-content-between align-items-center"
          style={{ background: "none" }}
        >
          <div
            className="d-flex align-items-center gap-2"
            style={{ background: "none" }}
          >
            <img src={logo} alt="" />
            <p
              style={{
                background: "none",
                color: "white",
                fontWeight: "600",
                fontSize: "20px",
                margin: "0px",
              }}
            >
              aethermind
            </p>
          </div>
          <div
            style={{ background: "none" }}
            className="d-flex align-items-center gap-3"
          >
            <button
              className="button "
              style={{
                background: "#438800",
                color: "white",
                fontSize: "18px",
                fontWeight: "600",
                height: "51px",
                width: "163px",
                borderRadius: "100px",
                border: "2px solid transparent",
                backgroundImage:
                  "linear-gradient(#1B1D22, #1B1D22), linear-gradient(90deg, #CCFB9D,#70D211)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              Try For Free
            </button>
            <div style={{ background: "none" }}>
              <button
                className="btn p"
                style={{
                  background: "linear-gradient(90deg, #70D211, #CCFB9D)",
                  color: "#0B0D12",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Get In Touch
              </button>

              <button
                className="btn"
                style={{
                  background: "linear-gradient(90deg, #70D211, #CCFB9D)",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "50px",
                }}
              >
                <TfiArrowTopRight
                  style={{ background: "none", color: "#0B0D12" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
