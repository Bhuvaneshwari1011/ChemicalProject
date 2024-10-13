import React from "react";
import "./GalleryStyle.css";
import galleryban from "../assets/gallery/galleryban.jpg";
import image1 from "../assets/gallery/pic1.png";
import image2 from "../assets/gallery/pic2.jpg";
import image3 from "../assets/gallery/pic3.jpg";
import image4 from "../assets/gallery/pic4.jpg";
import image5 from "../assets/gallery/pic5.jpg";
import image6 from "../assets/gallery/pic6.jpg";
import image7 from "../assets/gallery/pic7.jpg";
import image8 from "../assets/gallery/pic8.jpg";
import image9 from "../assets/gallery/pic9.jpg";
import image10 from "../assets/gallery/pic10.jpg";
import image11 from "../assets/gallery/pic11.jpg";
import image12 from "../assets/gallery/pic12.gif";
import Footer from "../Components/Footer";

const Gallery = () => {
  // Array of images for the gallery
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="gallery-banner">
        <img src={galleryban} alt="Gallery Banner" className="banner-image" />
      </div>

      {/* Gallery Images Section */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="gallery-image"
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
