import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleServicesClick = (event) => {
    event.preventDefault();
  };

  return (
    <header className="bg-blue-500 text-white p-2">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Pristine Scientific
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "fw-bold" : ""}`
                  }
                  to="/ChemicalProject/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "fw-bold" : ""}`
                  }
                  to="/about-us"
                >
                  About Us
                </NavLink>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="/services"
                  className={`nav-link dropdown-toggle ${
                    isDropdownOpen ? "" : ""
                  }`}
                  onClick={handleServicesClick} 
                >
                  Services
                </a>
                {isDropdownOpen && (
                  <ul className="dropdown-menu show">
                    <li>
                      <NavLink className="dropdown-item" to="/services/info">
                        Info
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/services/author">
                        Author
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "fw-bold" : ""}`
                  }
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "fw-bold" : ""}`
                  }
                  to="/enquiry"
                >
                  Enquiry
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "fw-bold" : ""}`
                  }
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
