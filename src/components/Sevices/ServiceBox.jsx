import React from "react";

const ServiceBox = ({ img, heading, subheading }) => {
  return (
    <div className="services__box">
      <img src={img} alt={heading} />
      <h3>{heading}</h3>

      <p>{subheading}</p>
    </div>
  );
};

export default ServiceBox;
