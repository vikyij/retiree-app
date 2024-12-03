import { step1, step2, step3 } from "./data";
import "./steps.css";

const Steps = ({ step }) => {
  const stepMapping = {
    step1: step1,
    step2: step2,
    step3: step3,
  };
  const stepArray = stepMapping[step];
  return (
    <section className="steps-container">
      {stepArray.map((step, key) => (
        <div key={key} className="step-wrapper">
          <div className="step-number-wrapper">{step.number}</div>
          <div>
            <p className="step-heading">{step.heading}</p>
            <p className="step-content">{step.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Steps;
