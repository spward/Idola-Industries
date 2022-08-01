import React from "react";
import AerospaceImg from "./aerospace.jpeg";
import FinanceImg from "./finance.jpeg";
import ConstructionImg from "./building.jpg";
import MedicalImg from "./medical.jpeg";

export const Industries = () => {
  const industies = [
    {
      name: "Aerospace",
      image: AerospaceImg,
      alt: "Aerospace",
    },
    {
      name: "Medical",
      image: MedicalImg,
      alt: "Medical",
    },
    {
      name: "Finance",
      image: FinanceImg,
      alt: "Finance",
    },
    {
      name: "Construction",
      image: ConstructionImg,
      alt: "Construction",
    },
  ];
  return (
    <div id="industries">
      <h2>Industries</h2>
      <h3>
        From finance to healthcare, engineering, and more, our vast expertise
        powers continuous innovation across many diverse industries. We pride
        ourselves on our wide-ranging partnerships and global impact.{" "}
      </h3>
      <div className="industries">
        {industies.map((industry) => {
          return (
            <div className="industry" key={industry.name}>
              <h4>{industry.name}</h4>
              <img src={industry.image} alt={industry.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
