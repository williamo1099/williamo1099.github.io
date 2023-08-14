import { Routes, Route } from "react-router-dom";

// COMPONENT
import Home from "../views/Home";
import About from "../views/About";
import Portfolio from "../views/Portfolio";
import Contact from "../views/Contact";

function createRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default createRoutes;
