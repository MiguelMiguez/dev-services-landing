import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// Más adelante importamos las secciones
import Hero from "../sections/Hero/Hero";
// import About from '../sections/About';
// import Services from '../sections/Services';
// import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Secciones de la landing */}
      <Hero />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Contact /> */}

      <Footer />
    </div>
  );
};

export default Home;
