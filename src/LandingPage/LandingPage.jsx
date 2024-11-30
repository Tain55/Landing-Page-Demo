// import React from "reactp";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./../Components/1_header";
import Heading from "../Components/2_heading";
import TwoButtons from "./../Components/3_twoButtons";
import ThreeCards from "./../Components/4_threeCards";
import WelcomeText from "./../Components/5_welcomeText";
import LeverageAI from "./../Components/7_leverageAI";
import ThreeFeatures from "../Components/8_threeFeatures";
import CaseStudies from "../Components/10_caseStudies";
import OurService from "../Components/6_ourService";
import Companies from "../Components/11_Companies";
import Clients from "../Components/12_Clients";
import MostUsed from "../Components/13_mostUsed";
import LetsTalk from "../Components/14_LetsTalk";
import Bottom from "../Components/15_Bottom";
import BG from "../assets/Images/Background.png";

const LandingPage = () => {
  return (
    <div>
      <div
        className="w-100"
        style={{
          // background: "yellow",
          background: `url(${BG}) no-repeat top center`,
          backgroundSize: "auto",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <div className="container" style={{ background: "none" }}>
          <Header />
          <Heading />
          <TwoButtons />
          <ThreeCards />
        </div>
      </div>
      <div className="container">
        <WelcomeText />
        <OurService />
        <LeverageAI />
        <ThreeFeatures />
        <CaseStudies />
      </div>
      <Companies />
      <div className="container">
        <Clients />
      </div>
      <MostUsed />
      <LetsTalk />
      <Bottom />
    </div>
  );
};

export default LandingPage;
