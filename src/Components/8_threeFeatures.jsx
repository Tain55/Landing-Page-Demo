import icon1 from "../assets/Images/threeFeaturesIcons/feature1.png";
import icon2 from "../assets/Images/threeFeaturesIcons/feature2.png";
import icon3 from "../assets/Images/threeFeaturesIcons/feature3.png";
import Card from "./smallComponents/cards";

const ThreeFeatures = () => {
  const head1 = "See value faster";
  const head2 = "Capture insights with ease";
  const head3 = "Transition seamlessly";

  const txt1 =
    "Get the insights your team has been waiting for—now. You won’t spend months onboarding, wondering how much of your budget went to learning how to use our platform.";
  const txt2 =
    "Stay ahead of your competitors with a platform that guides you to make strategic business decisions based on accurate data with help from our advanced AI and Machine Learning (ML) technology.";
  const txt3 =
    "Elevate your business without rebuilding your tech stack. Our global Salesforce partnership and social network integrations make it easy to work within your current processes.";

  return (
    <div
      className="d-flex mt-xl gap-3 text-light"
      style={{ height: "279px", marginTop: "100px" }}
    >
      <div className="col-4">
        <Card img={icon1} head={head1} txt={txt1} />
      </div>
      <div className="col-4">
        <Card img={icon2} head={head2} txt={txt2} />
      </div>
      <div className="col-4">
        <Card img={icon3} head={head3} txt={txt3} />
      </div>
    </div>
  );
};

export default ThreeFeatures;
