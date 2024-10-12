import React from "react";
import "./GifDisplay.css";  

const GifDisplay = ({ src, alt }) => {
  return (
    <div className="gif-container">
      <img src={src} alt={alt} className="gif-image" loading="lazy" />
    </div>
  );
};

export default GifDisplay;
