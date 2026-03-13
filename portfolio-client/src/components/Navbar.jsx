import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          SANJAY B G
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
          <li>
            <Link to="/contact" className={`navbar-link ${isActive("/contact") ? "active" : ""}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;