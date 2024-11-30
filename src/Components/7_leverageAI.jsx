/* eslint-disable react/no-unescaped-entities */
import image from "../assets/Images/robotHand.png";
const LeverageAI = () => {
  return (
    <div className="d-flex gap-">
      <div className="col-6">
        <img src={image} />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-left col-6 p-4">
        <p
          className="text-white"
          style={{
            fontSize: "56px",
            fontWeight: "600",
            margin: "0px",
            lineHeight: "76px",
          }}
        >
          Leverage AI to do more with less effort
        </p>
        <p className="fs-10 fw-bold text-white my-3">
          Sprout processes an average of 600M messages a day
        </p>
        <p className="fs-10 fw-normal text-white my-3 ">
          Enhance your team’s efficiency. Automatically assign priority status
          and filter high volumes of incoming customer messages so you can
          maintain focus and address messages in order of importance.
        </p>
        <p className="fs-10 fw-bold text-white my-3">
          Sprout delivers a 233% return on investment
        </p>
        <p
          className="fs-10 fw-normal text-white my-3 "
          style={{ marginRight: "30px" }}
        >
          Hit the ground running with analysis-ready models that fit into your
          existing workflows. Sprout's AI and automation doesn't require manual
          setup or continuous investment — so you can start seeing value
          immediately.
        </p>
      </div>
    </div>
  );
};

export default LeverageAI;
