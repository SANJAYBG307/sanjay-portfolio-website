import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "20px", backgroundColor: "#222" }}>
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          color: "white"
        }}
      >
        <li>
          <Link to="/" style={{ color: "white" }}>Home</Link>
        </li>

        <li>
          <Link to="/about" style={{ color: "white" }}>About</Link>
        </li>

        <li>
          <Link to="/projects" style={{ color: "white" }}>Projects</Link>
        </li>

        <li>
          <Link to="/skills" style={{ color: "white" }}>Skills</Link>
        </li>

        <li>
          <Link to="/contact" style={{ color: "white" }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;