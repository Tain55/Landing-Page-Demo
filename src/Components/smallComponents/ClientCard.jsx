/* eslint-disable react/prop-types */
import img from "../../assets/Images/client.png";

const ClientCard = ({ quote, txt, name, position }) => {
  return (
    <div
      className="p-3"
      style={{
        width: "416px",
        minHeight: "314px",
        borderRadius: "24px",
        background: "#1e1e1e",
      }}
    >
      <p
        className="mt-3"
        style={{
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "32px",
          margin: "0px",
          color: "#ebebeb",
          background: "none",
        }}
      >
        <span style={{ color: "green", background: "none" }}>“</span>
        {quote}
        <span style={{ color: "green", background: "none" }}>”</span>
      </p>
      <p
        className="mt-4"
        style={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "21.76px",
          margin: "0px",
          color: "#3f3f3f",
          background: "none",
        }}
      >
        {txt}
      </p>
      <div className="d-flex gap-3 mt-3" style={{ background: "none" }}>
        <img style={{ background: "none" }} src={img} alt="" />
        <div
          className="d-flex flex-column"
          style={{ background: "none", margin: "0px" }}
        >
          <p
            style={{
              background: "none",
              margin: "0px",
              color: "white",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            {name}
          </p>
          <p
            style={{
              background: "none",
              margin: "0px",
              color: "#A7A7A7",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
