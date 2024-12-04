import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrowup } from "../../images/arrow-up.svg";
import "./footer.css";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="address">
          <p className="small-text">Address</p>
          <p className="small-text">
            123 Maple Street, Springfield, IL 62704, Lagos
          </p>
        </div>
        <section className="contact-info">
          <div className="info">
            <p className="small-text">Info</p>
            <p className="small-text">
              <Link to="/">About</Link>
            </p>
            <p className="small-text">
              <Link to="/">How it works</Link>
            </p>
          </div>
          <div className="contact">
            <p className="small-text">Contact Us</p>
            <p className="small-text">0800-125-500-6266</p>
            <p className="small-text">
              <a href="mailto:info@abcd.com.ng">info@abcd.com.ng</a>
            </p>
          </div>
          {isVisible && (
            <button className="back-to-top" onClick={scrollToTop}>
              <Arrowup />
            </button>
          )}
        </section>
      </div>
      <div className="brand">
        <p className="small-text">Powered by StellarSync Technology © 2024 </p>
        <p className="small-text">v.1.0.0</p>
      </div>
    </footer>
  );
};

export default Footer;
