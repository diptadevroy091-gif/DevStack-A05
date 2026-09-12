import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={handleMenuToggle}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Brand */}
        <a href="#home" className="brand">
          <img src="/src/assets/logo.png" alt="Dev Stack Logo" />
          <span>Dev Stack</span>
        </a>

        {/* Desktop Navigation */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#technologies" onClick={() => setMenuOpen(false)}>
            Technologies
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        {/* Authentication Buttons */}
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
