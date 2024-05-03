import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
