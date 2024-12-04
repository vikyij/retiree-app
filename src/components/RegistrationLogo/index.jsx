import GroupImage from "../../images/Group 17.png";
import "./registrationlogo.css";

const RegistrationLogo = () => {
  return (
    <header className="registration-logo-container">
      <p className="registration-logo">Logo</p>
      <img className="reg-group-image" src={GroupImage} alt="group-image" />
    </header>
  );
};

export default RegistrationLogo;
