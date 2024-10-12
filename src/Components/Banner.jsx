import React, { useState } from "react";
import banner1 from "../banner/banner1.jpg"; // Go up one directory
import banner2 from "../banner/banner2.jpg";
import banner3 from "../banner/banner3 copy.jpg";
import './Banner.css'; // Import your CSS file

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            img: banner1,
            title: 'MANJU CHEMTECH',
            message: 'WE DELIVER QUALITY PRODUCTS',
        },
        {
            img: banner2,
            title: 'MANJU CHEMTECH',
            message: 'WE DELIVER QUALITY PRODUCTS',
        },
        {
            img: banner3,
            title: 'MANJU CHEMTECH',
            message: 'WE DELIVER QUALITY PRODUCTS',
        },
    ];

    const moveSlide = (direction) => {
        setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
    };

    return (
        <div className="banner-container">
            <div className="banner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.img} alt={`Banner Image ${index + 1}`} className="img-fluid" />
                        <div className="banner-text">{slide.title}</div>
                        <div className="banner-message">{slide.message}</div>
                    </div>
                ))}
            </div>
            <button className="arrow left" onClick={() => moveSlide(-1)}>&#10094;</button>
            <button className="arrow right" onClick={() => moveSlide(1)}>&#10095;</button>
        </div>
    );
};

export default Banner;
