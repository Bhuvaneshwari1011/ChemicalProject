import React from 'react';
import './AboutUsStyles.css';
// import Aboutbanner from '../assets/Allpagebanner.jpg'; // Correctly importing the image
// import aboutImage from '../assets/Service5copy.jpg'; // Correctly importing the image
// import whyUsImage from '../assets/WhyUsImage.jpg'; // Importing the new image for Why Us section

const AboutUs = () => {
  return (
    <div>
      {/* Banner Section with Image */}
      <div className="banner">
        {/* <img src={Aboutbanner} alt="Banner" className="banner-image" /> */}
        <h1>Welcome to My Website</h1>
      </div>

      {/* About Us Section */}
      <div className="about-us-section">
        <div className="content">
          <h2>About Us</h2>
          <p>
            MANJUCHEMTECH is a chemical trading company situated in Bangalore. It was established with the sole aim of providing a one-stop solution for all chemical products for our customers. Over the years, we have catapulted ourselves to become a multi-brand supplier of chemicals across Bangalore. Our quality control and choice of brands have earned us a unique recognition for quality from all our clients.
          </p>
        </div>
        <div className="image">
          {/* <img src={aboutImage} alt="About Us" /> */}
        </div>
      </div>

      {/* Why Us Section */}
      <div className="why-us-section">
        <div className="content">
          <h2>Why Us</h2>
          <p>
            We know that competition is getting tougher and tougher with each passing day as more and more Indian and International companies are coming into the market. However, we believe in serving with a smile and building long-lasting relationships with our clients, which helps us fight the competition. We only make commitments we can fulfill. When you are associated with us, you can be sure of committed and dedicated services, be it the quality of products, timely delivery, or any other business matter.
          </p>
        </div>
        <div className="image">
          {/* <img src={whyUsImage} alt="Why Us" /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
