import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginValidationSchema } from "../../utils/validationSchema";
import RegistrationLogo from "../../components/RegistrationLogo";
import { ReactComponent as BackArrow } from "../../images/arrow-back-ios.svg";
import { ReactComponent as EyeOpenIcon } from "../../images/eye-open.svg";
import { ReactComponent as EyeCloseIcon } from "../../images/eye-closed.svg";
import "../Register/registration.css";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await LoginValidationSchema.validate(formData, {
        abortEarly: false,
      });
      setErrors({});
      setLoading(true);
      // Assuming there's a backend api called login, make a post request using the axios package (import axios from 'axios')
      // try {
      //   const response = await axios.post("/api/login", {
      //     email: formData.email,
      //     password: formData.password,
      //   });
      //   // Assuming the backend sends a JWT token
      //   const { token } = response.data;
      //   Save the token in localStorage
      //   localStorage.setItem("authToken", token);
      //   setMessage("Login successful!");
      //   Redirect the user to a protected route
      //   navigate("/dashboard");
      //   setLoading(false);
      //   setFormData({
      //     username: "",
      //     email: "",
      //     password: "",
      //     confirmPassword: "",
      //   });
      // } catch (error) {
      //   setMessage(error.response?.data?.message || "Login failed!");
      // }

      // On success, set loading false, clear the fields and navigate to dashboard
      setLoading(false);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      let errList = {};
      error.inner.forEach((e) => {
        errList = { ...errList, [e.path]: e.message };
      });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
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

        <h3 className="form-title">Login</h3>
        <p className="form-subtitle">
          Enter your details to access your account
        </p>
        <form onSubmit={handleSubmit} className="register-form">
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
          <div
            className="form-group password-group"
            style={{ position: "relative" }}
          >
            <label htmlFor="password">Password*</label>
            <input
              type={passwordVisibility ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
              role="button"
              aria-label="Toggle password visibility"
              data-target="password"
              style={{ top: "30px", transform: "none" }}
            >
              {passwordVisibility.password ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </span>
            <p className="forgot-password">Forgot password?</p>
            <span className="error-message">{errors["password"]}</span>
          </div>

          <button type="submit" className="register-button">
            {loading ? "loading" : "Login"}
          </button>
        </form>
        <p className="login-link">
          Are you a retiree without an account?{" "}
          <Link to="/register">Register here</Link>
        </p>
        <p className="copyright-text">
          Powered by StellarSync Technology © 2024 v.1.0.0
        </p>
      </div>
    </div>
  );
};

export default Login;
