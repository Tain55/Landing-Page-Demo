import CaseStudyCard from "./smallComponents/CaseStudyCard";
import img1 from "../assets/Images/caseStudies/case1.png";
import img2 from "../assets/Images/caseStudies/case2.png";
import img3 from "../assets/Images/caseStudies/case3.png";
import img4 from "../assets/Images/caseStudies/case4.png";
import icon1 from "../assets/Images/Ellipse30.png";
import icon2 from "../assets/Images/Ellipse29.png";

const CaseStudies = () => {
  const year = "2024";
  const name = "Ecom Mart";
  const heading = "Ecom-Mart Organic Food Store App & Website";
  const bigHeading = {
    fontSize: "56px",
    fontWeight: "600",
    lineHeight: "45px",
    margin: "0px",
    color: "white",
    zIndex: 3,
  };
  const smallHeading = {
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "32.68px",
    margin: "0px",
    color: "white",
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column col-12  gap-3 position-relative"
      style={{
        transform: "translateY(-100px)",
        background: "none",
        marginBottom: "10px",
      }}
    >
      <img src={icon1} style={{ transform: "translateY(195px)", zIndex: 1 }} />
      <img src={icon2} style={{ transform: "translateY(40px)", zIndex: 2 }} />
      {/* Big Heading */}
      <p className="position-relative" style={bigHeading}>
        Case Studies
      </p>
      <p className="mb-5" style={smallHeading}>
        Explore Our Portfolio of Success Stories
      </p>

      <div className="d-flex gap-3">
        <div className="col-6">
          <CaseStudyCard img={img1} year={year} name={name} heading={heading} />
          <CaseStudyCard img={img2} year={year} name={name} heading={heading} />
        </div>
        <div className="col-6" style={{ marginTop: "125px" }}>
          <CaseStudyCard img={img3} year={year} name={name} heading={heading} />
          <CaseStudyCard img={img4} year={year} name={name} heading={heading} />
        </div>
      </div>
      <button
        className="button "
        style={{
          color: "white",
          fontSize: "18px",
          fontWeight: "600",
          height: "51px",
          width: "136px",
          borderRadius: "100px",
          border: "2px solid #FFFFFF",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        See All
      </button>
    </div>
  );
};

export default CaseStudies;
