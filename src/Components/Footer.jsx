// Footer.js
import React from "react";
import "./Footer.css"; // Optional for custom styles

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container">
        <div className="row py-4">
          {/* Company Info Section */}
          <div className="col-md-4 col-sm-12 mb-3">
            <h3>MANJU CHEMTECH</h3>
            <p style={{ textAlign: "justify" }}>
              It is a chemical trading company situated in Bangalore. It was
              established with the sole aim of providing a one-stop solution for
              all chemical products for our customers.
            </p>
          </div>

          {/* Menu Section */}
          <div className="col-md-2 col-sm-6 mb-3">
            <h3>MENU</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://manjuchemtech.com/" className="text-white">
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="https://manjuchemtech.com/about-us/"
                  className="text-white"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="https://manjuchemtech.com/gallery/"
                  className="text-white"
                >
                  GALLERY
                </a>
              </li>
              <li>
                <a
                  href="https://manjuchemtech.com/enquiry/"
                  className="text-white"
                >
                  ENQUIRY
                </a>
              </li>
              <li>
                <a
                  href="https://manjuchemtech.com/contact-us/"
                  className="text-white"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h3>ADDRESS</h3>
            <p>
              No. 50, SIR M.V.Layout, 7th Block, Muddaiahnapalya, Vishwaneedam,
              Bangalore-560091
            </p>
            <h3>CONTACT US</h3>
            <p>
              <a href="tel:+91 9880326096" className="text-white">
                +91 9880326096
              </a>
            </p>
          </div>

          {/* Email Section */}
          <div className="col-md-3 col-sm-12 mb-3">
            <h3>EMAIL ID</h3>
            <p>
              <a href="mailto:manjuchemtech@yahoo.com" className="text-white">
                manjuchemtech@yahoo.com
              </a>
              <br />
              <a href="mailto:manjuchemtech@gmail.com" className="text-white">
                manjuchemtech@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row">
          <div className="col-md-12">
            <hr className="bg-light" />
            <div className="text-center">
              <h6>
                © 2022 MANJU CHEM TECH All rights reserved. Designed and
                Developed By
                <a
                  href="http://adyasoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  {" "}
                  Adyasoft Infotech Pvt Ltd
                </a>
              </h6>
              <div className="mt-2">
                <a href="#" className="text-white mx-2">
                  Facebook
                </a>
                <a href="#" className="text-white mx-2">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
