import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          AADIT YADAV
        </Link>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Images
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/displaypage"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
                List
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/map"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Map
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
