/* eslint-disable react/prop-types */
import { FaCircle } from "react-icons/fa6";

const CaseStudyCard = ({ img, year, name, heading }) => {
  const smallText = {
    fontSize: "16px",
    fontWeight: "400",
    color: "#BBBBBB",
    margin: "0px",
  };
  const headingStyle = {
    fontWeight: "700",
    fontSize: "24px",
    color: "#ffffff",
  };
  return (
    <div className="d-flex flex-column justify-content-center">
      <img className="col-12" style={smallText} src={img} />
      <div className="d-flex  mt-3 justify-content-left align-items-center gap-2">
        <p style={smallText}>{year}</p>
        <FaCircle style={{ height: "10px", width: "10px", color: "#BBBBBB" }} />
        <p style={smallText}>{name}</p>
      </div>
      <div className="col-12 mt-3 mb-5" style={headingStyle}>
        {heading}
      </div>
    </div>
  );
};

export default CaseStudyCard;
