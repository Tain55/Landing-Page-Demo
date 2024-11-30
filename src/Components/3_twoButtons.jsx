import "bootstrap/dist/css/bootstrap.min.css";

const TwoButtons = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ background: "none" }}
    >
      <div className="d-flex justify-content-center gap-4">
        <button
          className="btn"
          style={{
            width: "171px",
            height: "49px",
            background: "linear-gradient(90deg, #CCFB9D, #70D211)",
            color: "#1e1e1e",
            padding: "10px 20px",
            borderRadius: "50px",
            border: "none",
          }}
        >
          Our Service
        </button>

        <button
          className="btn"
          style={{
            width: "171px",
            height: "49px",
            color: "white",
            padding: "10px 20px",
            borderRadius: "50px",
            border: "2px solid",
            borderColor: "#70D211",
          }}
        >
          Our AI tools
        </button>
      </div>
    </div>
  );
};

export default TwoButtons;
