import GroupImage from "../../images/Group 17.png";
import "./firstsection.css";

const FirstSection = () => {
  return (
    <section className="first-container">
      <div className="left-section">
        <h2>One platform,<br /> Two Solutions</h2>
        <h6>Simplifying Benefits for Retirees and Employers</h6>
        <p className="body">
          Whether you are a retiree claiming your benefits or an employer
          submitting employee data for verification, we've got you covered with
          a secure and seamless experience.
        </p>
        <div className="btnWrapper">
        <button>Claim your Benefits</button>
        <button className="outline-button" style={{marginLeft: '10px'}}>Upload Employee Data</button>
        </div>
      </div>
      <div className="right-section">
        <img src={GroupImage} alt="group-image" />
      </div>
    </section>
  );
};
export default FirstSection;
