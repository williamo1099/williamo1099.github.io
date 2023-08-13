import { NavLink } from "react-router-dom";

// STYLING
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function Header() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary fixed-top px-3">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mx-auto">
          {/* Home */}
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          {/* About Me */}
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>

          {/* Skills */}
          <li className="nav-item">
            <NavLink to="/skills" className="nav-link">
              Skills
            </NavLink>
          </li>

          {/* Portfolio */}
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link">
              Portfolio
            </NavLink>
          </li>

          {/* Contact */}
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
