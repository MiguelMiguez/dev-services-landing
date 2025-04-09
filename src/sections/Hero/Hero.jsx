import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Impulsamos tu negocio hacia el futuro digital";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white font-sans">
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern bg-cover bg-center bg-fixed opacity-20" />

      {/* Gradiente animado */}
      <div className="absolute top-0 left-0 w-full h-full animate-gradient bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-40 mix-blend-overlay" />

      {/* Glow animado */}
      <div className="absolute w-96 h-96 bg-purple-400 opacity-20 rounded-full filter blur-3xl animate-pulse top-20 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-400 opacity-20 rounded-full filter blur-3xl animate-pulse bottom-10 right-10"></div>

      {/* Contenido */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 tracking-wide">
          Transformamos Ideas
          <br />
          en Soluciones Digitales
        </h1>

        <p className="text-xl md:text-3xl text-gray-300 mb-10 tracking-wide font-light">
          {typedText}
          <span className="blinking-cursor">|</span>
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold tracking-wider"
        >
          Hablemos 🚀
        </motion.button>
      </motion.div>

      {/* Gradiente inferior decorativo */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
