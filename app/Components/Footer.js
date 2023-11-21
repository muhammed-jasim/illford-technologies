import React from "react";
import "../Components/Footer.css";
const Footer = () => {
  return (
    <div className="Footer-main-div">
      <div className="footer-main">
        <div className="footer-logo-div">
          <img src="/images/illford-logo.png" alt="" className="footer-logo" />
        </div>
        <div className="footer-content">
          <div className="footer-first-content">
            <div className="footer-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum fermentum odio, vel rhoncus dolor varius a.
            </div>
            <div className="footer-nav">
              <a href="/"><p>Home</p></a>
              <a href="/about"><p>About Us</p></a>
              <a href="/services"><p>Services</p></a>
              <a href="/portfolio"><p>Portfolio</p></a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-txt">
              <p>illfordDigital </p>
              <p>Contact</p>
              <p>Privacy Policy </p>
              <p>Terms & Conditions</p>
            </div>
            <div className="footer-social">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
