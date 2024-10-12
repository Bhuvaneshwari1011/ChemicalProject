import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUsPage";
import Services from "./Pages/ServicesPage";
import Gallery from "./Pages/GalleryPage";
import Enquiry from "./Pages/EnquiryPage";
import ContactUs from "./Pages/ContactUsPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/ChemicalProject/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
