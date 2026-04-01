import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <span className="brand-mark" aria-hidden="true">SB</span>
          <span className="brand-text">
            <span className="brand-name">SANJAY B G</span>
            <span className="brand-role">Data Analyst</span>
          </span>
        </Link>
        <button 
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={`navbar-link ${isActive("/") ? "active" : ""}`} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`navbar-link ${isActive("/about") ? "active" : ""}`} onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`navbar-link ${isActive("/projects") ? "active" : ""}`} onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className={`navbar-link ${isActive("/skills") ? "active" : ""}`} onClick={handleLinkClick}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`navbar-link ${isActive("/contact") ? "active" : ""}`} onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;