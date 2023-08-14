import { NavLink } from "react-router-dom";

// STYLING
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function NavigationBar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand navbar-dark bg-primary fixed-top">
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
    </div>
  );
}

export default NavigationBar;
