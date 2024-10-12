import React from "react";
import "./ServiceImages.css";  

const ServiceImages = ({ images }) => {
  return (
    <div className="service-images">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Service ${index + 1}`}
          className="service-image"
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default ServiceImages;
