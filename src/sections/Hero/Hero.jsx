import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white text-center px-4">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#0f172a", // Fondo elegante oscuro
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              directions: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />
      <div className="z-10">
        <h1 className="text-5xl font-extrabold mb-4">Digital Rain</h1>
        <p className="text-xl text-gray-300">
          ¡Impulsamos tu negocio hacia el futuro digital!
        </p>
      </div>
    </div>
  );
}
