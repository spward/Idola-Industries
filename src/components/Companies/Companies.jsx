import React from "react";
import LettuceLogo from "./lettuce.png";
import InvestmentLogo from "./investment.png";
import EyeLogo from "./eye.png";

export const Companies = () => {
  const companies = [
    {
      logo: LettuceLogo,
      name: "LettUsEat",
      description:
        "100s of the tastiest, healthiest meals and snacks, made from 100% natural, grown-in-America lettuce.",
    },
    {
      logo: InvestmentLogo,
      name: "Ignis Investments",
      description: "Trust in us. No risk, high reward investment management.",
    },
    {
      logo: EyeLogo,
      name: "OnlyIdols",
      description: "Everything you could ever idolize, without judgement.",
    },
  ];
  return (
    <div id="companies">
      <h2>Our Brands</h2>
      <h3>
        Idola Industries' portfolio is comprised of a global family of unique
        and iconic brands.
      </h3>
      <div className="companies">
        {companies.map((company) => {
          return (
            <div className="company" key={company.name}>
              <img src={company.logo} alt={company.name} className="logo" />
              <h4>{company.name}</h4>
              <p>{company.description}</p>
              {company.link ? (
                <a href={company.link} alt={company.name}>
                  {company.name}
                </a>
              ) : (
                <p className="company-soon">coming soon</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
