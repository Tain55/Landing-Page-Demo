import bg from "../assets/Images/most_used.png";

const MostUsed = () => {
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
          fontWeight: "700",
          fontSize: "64px",
          lineHeight: "87px",
          color: "#D9D9D9",
          background: "none",
        }}
      >
        #1 most used
      </p>
      <p
        style={{
          fontWeight: "400",
          fontSize: "24px",
          lineHeight: "33px",
          color: "#B8B8B8",

          background: "none",
        }}
      >
        AI tool for advertising
      </p>
      <button
        className="button mt-5"
        style={{
          background: "#438800",
          color: "white",
          fontSize: "20px",
          fontWeight: "600",
          height: "51px",
          width: "163px",
          borderRadius: "100px",
          border: "none",
        }}
      >
        Try For Free
      </button>
    </div>
  );
};

export default MostUsed;
