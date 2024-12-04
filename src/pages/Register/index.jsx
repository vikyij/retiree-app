import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationValidationSchema } from "../../utils/validationSchema";
import RegistrationLogo from "../../components/RegistrationLogo";
import { ReactComponent as BackArrow } from "../../images/arrow-back-ios.svg";
import { ReactComponent as EyeOpenIcon } from "../../images/eye-open.svg";
import { ReactComponent as EyeCloseIcon } from "../../images/eye-closed.svg";
import "./registration.css";

const Register = () => {
  const [formData, setFormData] = useState({
    rsaPin: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await RegistrationValidationSchema.validate(formData, {
        abortEarly: false,
      });
      setErrors({});
      // Assuming there's a backend api called register, I'll make a post request using the axios package
      // try{
      //   const response = await axios.post("/api/register", {
      //     rsaPin: formData.rsaPin,
      //     email: formData.email,
      //     surname: formData.password,
      //     password: formData.password,
      //   });
      //   setMessage(response.data.message || "Registration successful!");
      // } catch (error) {
      //   setMessage(error.response?.data?.message || "Registration failed!");
      // }
    } catch (error) {
      let errList = {};
      error.inner.forEach((e) => {
        errList = { ...errList, [e.path]: e.message };
      });
      setErrors(errList);
    }
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevVisibility) => ({
      ...prevVisibility,
      [field]: !prevVisibility[field],
    }));
  };

  const navigate = useNavigate();

  return (
    <div className="registration-container">
      <RegistrationLogo />
      <div className="register-form-container">
        <div className="back-container" onClick={() => navigate("/")}>
          <BackArrow />
          <p className="small-text">Back to home</p>
        </div>

        <h3 className="form-title">Register</h3>
        <p className="form-subtitle">
          Enter your details to start your pension process
        </p>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="rsaPin">RSA Pin* </label>
            <input
              type="text"
              id="rsaPin"
              name="rsaPin"
              value={formData.rsaPin}
              onChange={handleChange}
              placeholder="xxxxxx"
            />
            <span className="error-message">{errors["rsaPin"]}</span>
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname*</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Surname"
            />
            <span className="error-message">{errors["surname"]}</span>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
            />
            <span className="error-message">{errors["email"]}</span>
          </div>
          <div className="password-wrapper">
            <div className="form-group password-group">
              <label htmlFor="password">Password*</label>
              <input
                type={passwordVisibility.password ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
              <span
                className="toggle-password"
                onClick={() => togglePasswordVisibility("password")}
                role="button"
                aria-label="Toggle password visibility"
                data-target="password"
              >
                {passwordVisibility.password ? (
                  <EyeOpenIcon />
                ) : (
                  <EyeCloseIcon />
                )}
              </span>
              <span className="error-message">{errors["password"]}</span>
            </div>

            <div className="form-group password-group">
              <label htmlFor="confirmPassword">Confirm Password*</label>
              <input
                type={passwordVisibility.confirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              <span
                className="toggle-password"
                onClick={() => togglePasswordVisibility("confirmPassword")}
                role="button"
                aria-label="Toggle password visibility"
                data-target="confirmPassword"
              >
                {passwordVisibility.confirmPassword ? (
                  <EyeOpenIcon />
                ) : (
                  <EyeCloseIcon />
                )}
              </span>
              <span className="error-message">{errors["confirmPassword"]}</span>
            </div>
          </div>
          <p
            className="form-subtitle"
            style={{ marginTop: "-8px", fontSize: "12px" }}
          >
            Help text
          </p>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="login-link">
          Already have an account or are not a retiree?{" "}
          <Link to="/login">Login here</Link>
        </p>
        <p className="copyright-text">
          Powered by StellarSync Technology © 2024 v.1.0.0
        </p>
      </div>
    </div>
  );
};

export default Register;
