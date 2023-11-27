"use client";

import React, { useState } from "react";
import "../Components/Navbar.css";

const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  }; 

  return (
    <div className="main-navbar-div">
      <nav className="nav-bar">
        <div className="logo-div">
          <img src="/images/illford-logo.png" alt="" className="logo" />
        </div>
        <ul className={`nav-item-div  ${mobileMenuActive ? "nav-active" : ""}`}>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/services">Services</a>
          </li>
          <li className="nav-item">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="nav-more">
          <i
            className={`bi ${mobileMenuActive ? "bi-x" : "bi-list"}`}
            onClick={toggleMobileMenu}
          ></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
