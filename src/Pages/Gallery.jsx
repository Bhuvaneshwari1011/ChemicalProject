import React from 'react';
import './Gallery.css';
import bannerImage from '../assets/Allpagebanner.jpg'; // Importing banner image
import image1 from '../assets/gallery/pic1.png'; // Replace with actual image paths
import image2 from '../assets/gallery/pic2.jpg';
import image3 from '../assets/gallery/pic3.jpg';
import image4 from '../assets/gallery/pic4.jpg';
import image5 from '../assets/gallery/pic5.jpg';
import image6 from '../assets/gallery/pic6.jpg';
import image7 from '../assets/gallery/pic7.jpg';
import image8 from '../assets/gallery/pic8.jpg';
import image9 from '../assets/gallery/pic9.jpg';
import image10 from '../assets/gallery/pic10.jpg';
import image11 from '../assets/gallery/pic11.jpg';
import image12 from '../assets/gallery/pic12.gif';
import image13 from '../assets/gallery/pic13.jpg';
import image14 from '../assets/gallery/pic14.gif';
import image15 from '../assets/gallery/pic15.jpg';
import image16 from '../assets/gallery/pic16.jpg';
import image17 from '../assets/gallery/pic17.jpg';

const Gallery = () => {
  // Array of images for the gallery
  const images = [
    image1, image2, image3, image4, image5, 
    image6, image7, image8, image9, image10, 
    image11, image12, image13, image14, image15,
    image16, image17,
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="gallery-banner">
        <img src={bannerImage} alt="Gallery Banner" className="banner-image" />
      </div>

      {/* Gallery Images Section */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
