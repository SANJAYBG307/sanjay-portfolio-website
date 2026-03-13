import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          <span className="brand-mark" aria-hidden="true">SB</span>
          <span className="brand-text">
            <span className="brand-name">SANJAY B G</span>
            <span className="brand-role">Data Analyst</span>
          </span>
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className={`navbar-link ${isActive("/") ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`navbar-link ${isActive("/about") ? "active" : ""}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`navbar-link ${isActive("/projects") ? "active" : ""}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className={`navbar-link ${isActive("/skills") ? "active" : ""}`}>
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;