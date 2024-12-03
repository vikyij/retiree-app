import { useState } from "react";
import { Segmented } from "antd";
import "./thirdsection.css";
import Steps from "../Steps";
import Male from "../../images/file (11).png";
import Female from "../../images/file (9).png";

const ThirdSection = () => {
  const [step, setStep] = useState("Retiree");

  const stepMapping = {
    Retiree: "step1",
    PFA: "step2",
    MDA: "step3",
  };

  return (
    <section className="third-section">
      <img src={Male} alt="Male-image" />
      <div className="third-container">
        <h4>
          How It
          <span style={{ color: "var(--primary-green)" }}> works</span>
        </h4>
        <p className="small-text">Follow this easy steps to get started</p>

        <Segmented
          options={["Retiree", "PFA", "MDA"]}
          size="large"
          onChange={(value) => {
            setStep(value);
          }}
        />
        <Steps step={stepMapping[step]} />
      </div>
      <img src={Female} alt="Female-image" />
    </section>
  );
};

export default ThirdSection;
