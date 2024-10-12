import React from "react";
import "./Home.css";
import aboutUsImage from "../assets/pagesImages/AboutUs.jpg";
import para from "../assets/pagesImages/par.jpg";
import serviceImage1 from "../assets/pagesImages/Service1.jpg";
import serviceImage2 from "../assets/pagesImages/Service2.jpeg";
import serviceImage3 from "../assets/pagesImages/Service3.jpg";
import serviceImage4 from "../assets/pagesImages/Service4.webp";
import serviceImage5 from "../assets/pagesImages/Service5.jpg";
import rotatingVials from "../assets/pagesImages/rotating-vials.gif";
import whoWeAreImage from "../assets/pagesImages/who.png";
import gif1 from "../assets/pagesImages/gif1.gif";
import gif2 from "../assets/pagesImages/gif2.gif";
import gif3 from "../assets/pagesImages/gif3.gif";
import SliderComponent from "../Slider/SliderComponent";
import SlidingText from "../Slider/SlidingText";
import ServiceImages from "../Components/ServiceImages";
import GifDisplay from "../Helper/GifDisplay";
import WhoWeAre from "../Components/WhoWeAre";
import QuoteSection from "../Helper/QuoteSection";
import Footer from "../Components/Footer";
import ChemicalInfo from "../Helper/ChemicalInfo";

const Home = () => {
  const serviceImages = [
    serviceImage1,
    serviceImage2,
    serviceImage3,
    serviceImage4,
    serviceImage5,
  ];
  const quote =
    "“Medicine is a science of uncertainty and an art of probability.”";

  const gifs = [gif1, gif2, gif3];
  return (
    <div className="home-container">
      <SliderComponent />
      <SlidingText />
      <div className="container">
        <p className="py-5">
          MANJUCHEMTECH is a chemical trading company situated in Bangalore. It
          was established with the sole aim of providing a one-stop solution for
          all chemical products for our customers. Our mission is to provide the
          best product available, evaluated against the toughest standards in
          the industry.
        </p>

        <div className="services-section">
          <ChemicalInfo imageSrc={para} />

          {/* About Us Section */}

          <div className="row">
            <div className="col-md-6">
              <div className="about-text">
                <h2 className="text-center">About Us</h2>
                <p>
                  We know that competition is getting tougher with each passing
                  day as more Indian and International companies enter the
                  market. However, we believe in serving with a smile and having
                  long-lasting relationships with our clients, which helps us
                  fight the competition.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={aboutUsImage} alt="About Us" className="about-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="our-services text-center py-5 bg-primary bg-opacity-50 text-white">
        <div className="container">
          <h2>OUR SERVICES</h2>
          <p className="h5">
            Industrial chemicals & solvents, laboratory chemicals, Glassware &
            Instruments & Water Treatment chemicals.We are serving various
            industries : Herbal extract industries, Pharmaceutical industries,
            Electronics and Electroplasting industries , Testing laboratory ,
            Food industries, Printing industries, Leather and Pesticides
            industries
          </p>
        </div>
      </div>

      <div className="container">
        <ServiceImages images={serviceImages} />
      </div>
      {/* GIF Section */}
      <div className="container">
        <GifDisplay src={rotatingVials} alt="Rotating Vials" />
      </div>

      {/* Our Mission Section */}
      <div className="container text-center py-5">
        <h2>Our Mission</h2>
        <p className="h5 px-3">
          Our Mission is to provide the best product available, evaluated
          against the toughest standards in the industry. Efficient operations
          help us offer products at a price advantage to the formulation
          industry. We are try to maintain good business relationships with
          maximum efforts to increase our customer base.
        </p>
      </div>

      {/* WHO WE ARE Section */}
      <div className="container">
        <WhoWeAre
          imageSrc={whoWeAreImage}
          description="MANJUCHEMTECH is a chemical trading company situated in Bangalore. We provide a one-stop solution for all chemical products for our customers, with a strong commitment to quality and customer satisfaction."
          descriptionSecond="To constantly better ourselves and our product range and provide every single customer with the finest quality products. Over the last few years we have catapulted ourselves to be a multi-brand supplier of chemicals across the Bangalore. Today, Manjuchemtech represents and supplies the all types of chemicals. Our quality control and choice of brands have earned us a unique recognition for quality from all our clients."
        />
      </div>
      {/* Quote Section */}

      <div className="container">
        <QuoteSection quote={quote} gifs={gifs} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
