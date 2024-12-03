import Card from "../Card";
import { cardContent } from "./data";
import "./secondsection.css";

const SecondSection = () => {
  return (
    <section className="second-container">
      <h4>
        Retiree data processing <br />
        <span style={{ color: "var(--primary-green)" }}>made easy!</span>
      </h4>
      <div className="card-container">
        {cardContent.map((card, key) => (
          <div key={key} >
            <Card
              icon={card.icon}
              heading={card.heading}
              content={card.content}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
