import React from "react";
import IdolaLogo from "../../images/idola-industries-logo.png";

export const Footer = () => {
  return (
    <div className="footer">
      <img src={IdolaLogo} alt="Idola Logo" />
      <div className="link-container">
        <div className="industry-links">
          <p>Industries</p>
          <a href="#aerospace" alt="Aerospace">
            Aerospace
          </a>
          <a href="#healthcare" alt="Healthcare">
            Healthcare
          </a>
          <a href="#finance" alt="Finance">
            Finance
          </a>
          <a href="#realestate" alt="Real Estate">
            Real Estate
          </a>
          <a href="#hospitality" alt="Hospitality">
            Hospitality
          </a>
          <a href="#food" alt="Food Distribution">
            Food Distribution
          </a>
          <a href="#technology" alt="Technology">
            Technology
          </a>
        </div>
        <div className="company-links">
          <p>Our Companies</p>
          <a href="#lettuseat" alt="LettUsEat">
            LettUsEat
          </a>
          <a href="#investments" alt="Ignis Investments">
            Ignis Investments
          </a>
          <a href="#onlyidols" alt="OnlyIdols">
            OnlyIdols
          </a>
          <a href="#temp" alt="???">
            ???
          </a>
          <a href="#temp" alt="???">
            ???
          </a>
          <a href="#temp" alt="???">
            ???
          </a>
        </div>

        <div className="socials">
          <p>Follow Us</p>
          <a href="https://discord.gg/5TsYGRFDSm">Discord</a>
          <a href="https://www.twitter.com/idolaindustries">Twitter</a>
        </div>
      </div>
    </div>
  );
};
