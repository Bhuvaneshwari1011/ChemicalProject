import React from 'react';
import './AboutUsStyles.css';
import bannerabout from '../assets/gallery/bannerabout.jpg'; // Correctly importing the image
import aboutimage1 from '../assets/gallery/aboutimage1.jpg'; // Correctly importing the image
import whyuss from '../assets/gallery/whyuss.webp';
import Footer from '../Components/Footer'; // Importing the new image for Why Us section

const AboutUs = () => {
  return (
    <div>
      {/* Banner Section with Image */}
      <div className="banner">
        <img src={bannerabout} alt="Banner" className="banner-image" />
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
          <img src={aboutimage1} alt="About Us" />
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
          <img src={whyuss} alt="Why Us" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
