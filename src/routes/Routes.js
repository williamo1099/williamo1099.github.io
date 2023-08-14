import { Routes, Route } from "react-router-dom";

// COMPONENT
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

function createRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default createRoutes;
