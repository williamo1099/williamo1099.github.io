import { Routes, Route, Link } from "react-router-dom";

// STYLING
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

// COMPONENT
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function NavigationBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            {/* Home */}
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            {/* About Me */}
            <li className="nav-item active">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            {/* Skills */}
            <li className="nav-item active">
              <Link to="/skills" className="nav-link">
                Skills
              </Link>
            </li>

            {/* Portfolio */}
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/*  */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default NavigationBar;
