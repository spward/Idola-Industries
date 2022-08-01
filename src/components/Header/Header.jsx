import React from "react";
import IdolaLogo from "../../images/idola-logo.png";

export const Header = () => {
  return (
    <div className="nav">
      <a href="/">
        <img src={IdolaLogo} alt="Idola Logo" className="nav-logo" />
      </a>
      <a href="#about" className="nav-item">
        About
      </a>
      <a href="#industries" className="nav-item">
        Industries
      </a>
      <a href="#companies" className="nav-item">
        Companies
      </a>
      <a href="#join" className="nav-item">
        Join Us
      </a>
    </div>
  );
};
