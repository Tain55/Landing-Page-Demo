// import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import logo from "../assets/Images/logo.png";

const Header = () => {
  return (
    <div style={{ background: "none" }}>
      <div
        className="container-fluid d-flex align-items-center justify-content-between py-4"
        style={{ background: "none" }}
      >
        <div
          className="d-flex align-items-center gap-2 col-2"
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
          className="d-flex gap-0"
          style={{
            backgroundColor: "#75737A26",
            paddingLeft: "50px",
            paddingRight: "50px",
            borderRadius: "30px",
          }}
        >
          {["Home", "About Us", "Service", "Case Study", "Plan"].map(
            (item, index) => (
              <button
                key={index}
                className="btn"
                style={{
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  color: "white",
                }}
              >
                {item}
              </button>
            )
          )}
        </div>

        <div className="col-2">
          <button
            className="btn p"
            style={{
              background: "linear-gradient(90deg, #70D211, #CCFB9D)",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "20px",
            }}
          >
            Get In Touch
          </button>

          <button
            className="btn"
            style={{
              background: "linear-gradient(90deg, #70D211, #CCFB9D)",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "50px",
            }}
          >
            <TfiArrowTopRight style={{ background: "none" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
