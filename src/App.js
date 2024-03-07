import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar flag={false} />} />
          <Route path="/skills" element={<Navbar skills={true} />} />
          <Route path="/contact" element={<Navbar contact={true} />} />
          <Route path="/projects" element={<Navbar projects={true} />} />

        </Routes>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>


      </div>
    </Router>
  );
}
