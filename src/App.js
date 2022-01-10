import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div class="flex flex-col h-screen justify-between">
              <Navbar />
              <Welcome />
              <Footer />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Interests />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <Projects />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
