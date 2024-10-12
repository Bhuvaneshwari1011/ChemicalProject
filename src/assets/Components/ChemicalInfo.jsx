import React from "react";

const ChemicalInfo = ({ imageSrc }) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-5">
        <img
          src={imageSrc}
          alt="Chemical Info"
          className="para-image img-fluid"
        />
      </div>
      <div className="col-md-7">
        <div className="text-segment">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="text-block">
                <h3>INDUSTRIAL CHEMICAL & SOLVENTS</h3>
                <p>
                  Organic solvents are commonly used in the pharmaceutical
                  industry as reaction media, in separation and purification of
                  synthesis products.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="text-block">
                <h3>HERBAL EXTRACTS CHEMICALS</h3>
                <p>
                  A herbal extract is a substance made by extracting a part of a
                  herbal raw material, often by using a solvent such as methanol
                  or water.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="text-block">
                <h3>PHARMACEUTICAL INDUSTRY</h3>
                <p>
                  The pharmaceuticals industry consists of drug manufacturers,
                  biotechnology companies, and the distribution and wholesale
                  companies.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="text-block">
                <h3>ELECTRONIC INDUSTRIES</h3>
                <p>
                  Gallium is a great element widely used in the electronics
                  industry due to its similar structure to silicon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemicalInfo;
