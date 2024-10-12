import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComponent.css"; // Custom CSS for styling

const images = [
  {
    src: "https://manjuchemtech.com/wp-content/uploads/2022/03/a75041e0-521b-11ea-a3cd-8211a7b3c8e4.jpg",
    caption: "FOR CHEMICAL NEEDS CONTACT US",
  },
  {
    src: "https://manjuchemtech.com/wp-content/uploads/2022/03/Healthcare.jpg",
    caption: "WELCOME TO MANJU CHEMTECH",
  },
  {
    src: "https://manjuchemtech.com/wp-content/uploads/2022/03/chemicals.jpg",
    caption: "WE DELIVER QUALITY PRODUCTS",
  },
];

const SliderComponent = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true,
    prevArrow: <div className="slick-arrow slick-prev" />,
    nextArrow: <div className="slick-arrow slick-next" />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="slider-item">
            <img className="slide-image" src={item.src} alt="" />
            <div className="caption">
              <h3 className="title_big" itemProp="alternativeHeadline">
                {item.caption}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
