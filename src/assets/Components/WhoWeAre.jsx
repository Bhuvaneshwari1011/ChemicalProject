// WhoWeAre.js
import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = ({ imageSrc, description, descriptionSecond }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <h2 className="text-center">WHO WE ARE?</h2>
        <p>{description}</p>
        <p>{descriptionSecond}</p>
        <button className="btn btn-primary fw-bold">Find Out</button>
      </div>
      <div className="col-md-6">
        <img src={imageSrc} alt="Who We Are" className="image" />
      </div>
    </div>
  );
};

export default WhoWeAre;
