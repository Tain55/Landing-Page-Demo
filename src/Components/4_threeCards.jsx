import img from "../assets/Images/Group_6.png";
import { IoStar } from "react-icons/io5";
import card2Img from "../assets/Images/card2.png";

const ThreeCards = () => {
  return (
    <div
      className="row justify-content-center gap-2 d-flex align-items-end py-5"
      style={{ background: "none" }}
    >
      {/* box:1 */}
      <div
        className="container"
        style={{
          maxWidth: "370px",
          position: "relative",
          height: "365px",
          borderRadius: "24px",
          overflow: "hidden",
          background: "linear-gradient(130deg, #92C38A80 , #141F1380)",
        }}
      >
        <div
          className="d-flex flex-column justify-content-between h-100"
          style={{
            padding: "16px",
            color: "white",
            background: "none",
          }}
        >
          <div
            className="d-flex justify-content-between mt-4"
            style={{ background: "none" }}
          >
            <p
              style={{
                fontWeight: "600",
                fontSize: "20px",
                color: "#ECECEC",
                margin: "0px",
                lineHeight: "15px",
                background: "none",
              }}
            >
              RATING
            </p>
            <div className="d-flex gap-3 " style={{ background: "none" }}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "56px",
                  color: "#F1F1F1",
                  margin: "0px",
                  lineHeight: "35px",
                  background: "none",
                }}
              >
                4.5
              </p>
              <IoStar
                style={{
                  background: "none",
                  color: "#FEB700",
                }}
              />
            </div>
          </div>

          <div
            className="d-flex flex-column gap-3"
            style={{ background: "none" }}
          >
            <div style={{ height: "1px", background: "#505050" }}></div>

            <div
              className="d-flex justify-content-between mb-2 mt-1"
              style={{ height: "52px", background: "none" }}
            >
              <img src={img} alt="" style={{ background: "none" }} />
              <div
                className="d-flex flex-wrap"
                style={{ width: "163px", background: "none" }}
              >
                <p style={{ background: "none" }}>
                  Master Organizer and Team Synergist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* box:2 */}
      <div
        className="container"
        style={{
          maxWidth: "370px",
          position: "relative",
          height: "301px",
          borderRadius: "24px",
          overflow: "hidden",
          backgroundColor: "orange",
          background: `url(${card2Img}) no-repeat center center`,
          backgroundSize: "auto",
        }}
      ></div>

      {/* box:3 */}
      <div
        className="d-flex flex-column justify-content-between p-3"
        style={{
          maxWidth: "370px",
          position: "relative",
          height: "301px",
          borderRadius: "24px",
          overflow: "hidden", // Ensures content stays inside the container
          background: "linear-gradient(to bottom, #718A6D4D , #5562534D)",
        }}
      >
        <p
          className="mt-4"
          style={{
            color: "#BBBBBB",
            fontSize: "14px",
            fontWeight: "400",
            background: "none",
          }}
        >
          Streamlined strategies and expert guidance for optimal project
          outcomes.
        </p>
        <div style={{ background: "none" }}>
          <p
            style={{
              color: "white",
              fontSize: "56px",
              fontWeight: "600",
              background: "none",
              margin: "0px",
            }}
          >
            250+
          </p>
          <p
            style={{
              color: "#BBBBBB",
              fontSize: "20px",
              fontWeight: "400",
              background: "none",
            }}
          >
            Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
