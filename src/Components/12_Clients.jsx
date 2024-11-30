import ClientCard from "./smallComponents/ClientCard";

const Clients = () => {
  const quote =
    "AetherMaind's development services have significantly boosted our productivity by 60%";
  const txt =
    "Their expertise and innovative solutions have transformed our operations, enabling us to achieve remarkable efficiency gains.";
  const name = "Lori Desroches";
  const position = "CEO - Ecom-Mart";
  return (
    <div style={{ marginBottom: "150px" }}>
      <p
        className="text-center mb-5"
        style={{
          fontSize: "48px",
          fontWeight: "600",
          lineHeight: "65px",
          color: "white",
          marginTop: "100px",
        }}
      >
        What Our Client Say
      </p>
      <div className="gap-2 d-flex">
        <ClientCard quote={quote} txt={txt} name={name} position={position} />
        <ClientCard quote={quote} txt={txt} name={name} position={position} />
        <ClientCard quote={quote} txt={txt} name={name} position={position} />
      </div>
    </div>
  );
};

export default Clients;
