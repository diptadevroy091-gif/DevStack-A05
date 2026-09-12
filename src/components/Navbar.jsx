import { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Mobile Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Logo */}
        <a href="#home" className="logo">
          <img src={logo} alt="Dev Stack" />
        </a>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={item === "Home" ? "active-link" : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="nav-actions">
          <a href="#" className="sign-in">
            Sign In
          </a>

          <a href="#" className="sign-up">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
