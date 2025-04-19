import React, { useEffect, useState } from "react";

const backgroundImages = [
  "https://i.pinimg.com/736x/1c/ba/38/1cba385973e8c92e544865751b5c5bb3.jpg",
  "https://i.pinimg.com/736x/1e/79/7a/1e797a2c1cdada662a4f3845e5921247.jpg",
  "https://i.pinimg.com/736x/1b/92/0c/1b920c99364e9e44a124d6cf8cb94212.jpg",
];

const Hero: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentBg === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Your Trusted <span className="text-red-600">Auto Repair</span> & Service Garage
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-md">
              We keep your car running like new. From oil changes to engine repair — fast, affordable, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 h-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Book Service
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium px-6 h-12 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
