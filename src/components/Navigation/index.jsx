import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <h5 className="logo">Logo</h5>
        <Link className="nav-link" to="/">
          About
        </Link>
        <Link className="nav-link" to="/">
          How it works
        </Link>
      </div>
      <div className="auth-buttons">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button className="outline-button">Login</button>
        </Link>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link className="close-button" onClick={toggleMenu}>
            ✕
          </Link>
          <Link to="/" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/" onClick={toggleMenu}>
            How it works
          </Link>
          <Link to="/register" onClick={toggleMenu}>
            <button>Register</button>
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            <button className="outline-button">Login</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
