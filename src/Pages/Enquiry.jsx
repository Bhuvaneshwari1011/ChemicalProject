import React from "react";
import "./Enquiry.css";
import bannerImage from "../assets/Allpagebanner.jpg";
import enquiryImage from "../assets/tableten.webp";
import Footer from "../assets/Components/Footer";

const Enquiry = () => {
  return (
    <div>
      <div className="enquiry-banner">
        <img src={bannerImage} alt="Enquiry Banner" className="banner-image" />
      </div>

      <div className="enquiry-section">
        <div className="enquiry-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="tel"
                id="contact"
                placeholder="Enter your contact number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="enquiry-image">
          <img src={enquiryImage} alt="Enquiry" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enquiry;
