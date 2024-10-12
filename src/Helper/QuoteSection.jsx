import React from "react";
import "./QuoteSection.css"; // Create a CSS file for styles

const QuoteSection = ({ quote, gifs }) => {
  return (
    <div className="quote-section">
      <blockquote>
        {quote}
      </blockquote>
      <div className="row">
        {gifs.map((gif, index) => (
          <div className="col-12 col-md-4" key={index}>
            <img
              src={gif}
              alt={`GIF ${index + 1}`}
              className="gif-image img-fluid" // Use Bootstrap's img-fluid for responsiveness
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteSection;
