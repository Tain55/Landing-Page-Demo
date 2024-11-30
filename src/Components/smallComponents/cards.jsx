/* eslint-disable react/prop-types */

const Card = ({ img, head, txt }) => {
  return (
    <div>
      <div
        className="d-flex flex-column bg-secondary p-3 col-12"
        style={{
          height: "279px",
          borderRadius: "12px",
          background: "#121312",
        }}
      >
        <img
          className="mt-2"
          src={img}
          alt="icon"
          style={{
            height: "48px",
            width: "48px",
            background: "none",
          }}
        />
        <p
          className="pt-2 pb-2 m-0"
          style={{ fontSize: "20px", fontWeight: "600", background: "none" }}
        >
          {head}
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "400",
            background: "none",
            lineHeight: "24px",
          }}
        >
          {txt}
        </p>
      </div>
    </div>
  );
};
export default Card;
