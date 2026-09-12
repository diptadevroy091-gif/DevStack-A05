import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          {/* Logo + Dev Stack */}
          <div className="footer-logo">
            <img src={logo} alt="Dev Stack Logo" />
          </div>

          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          {/* Social Links */}
          <div className="footer-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="footer-column">
          <h4>PRODUCT</h4>

          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#home">Projects</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>COMPANY</h4>

          <a href="#home">About</a>
          <a href="#home">Contact</a>
          <a href="#home">Careers</a>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h4>LEGAL</h4>

          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms of Service</a>
          <a href="#home">Cookie Policy</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#home">Privacy</a>
          <a href="#home">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
