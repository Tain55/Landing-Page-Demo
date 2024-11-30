/* eslint-disable react/no-unescaped-entities */
import React from "react";
import bg from "../assets/Images/gradient.png";
import { GoArrowUpRight } from "react-icons/go";
import { FaBehance } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io5";

const LetsTalk = () => {
  const iconStyle = {
    background: "none",
    height: "24",
    width: "24",
    color: "white",
  };

  const pStyle = {
    background: "none",
    color: "white",
    fontWeight: "400",
    fontSize: "16px",
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        background: `url(${bg}) no-repeat center center/cover`,
        height: "70vh",
      }}
    >
      <p
        className="mt-5"
        style={{
          fontWeight: "600",
          fontSize: "80px",
          lineHeight: "87px",
          color: "#D9D9D9",
          background: "none",
        }}
      >
        Let's Talk
      </p>

      <div className="d-flex m-0" style={{ background: "none" }}>
        <button
          className="button"
          style={{
            background: "#438800",
            color: "#0B0D12",
            fontSize: "20px",
            fontWeight: "600",
            height: "52px",
            width: "186px",
            borderRadius: "100px",
            border: "none",
          }}
        >
          Start A Project
        </button>
        <button
          className="button "
          style={{
            background: "#438800",
            color: "white",
            fontSize: "20px",
            fontWeight: "600",
            height: "52px",
            width: "52px",
            borderRadius: "100px",
            border: "none",
          }}
        >
          <GoArrowUpRight style={{ background: "none", color: "#0B0D12" }} />
        </button>
      </div>
      <p
        className="mt-4"
        style={{
          fontWeight: "400",
          fontSize: "24px",
          lineHeight: "33px",
          color: "#B8B8B8",
          background: "none",
        }}
      >
        hello@aethermind.com
      </p>
      <div
        className="d-flex justify-content-between w-100 container mt-3"
        style={{ background: "none" }}
      >
        <div className="d-flex" style={{ background: "none", gap: "2.5vw" }}>
          <p style={pStyle}>Home</p>
          <p style={pStyle}>About Us</p>
          <p style={pStyle}>Services</p>
          <p style={pStyle}>Case Study</p>
          <p style={pStyle}>Plan</p>
        </div>
        <div className="d-flex gap-4" style={{ background: "none" }}>
          <FaBehance style={iconStyle} />
          <BiLogoFacebook style={iconStyle} />
          <TiSocialLinkedin style={iconStyle} />
          <IoLogoGithub style={iconStyle} />
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
