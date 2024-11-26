import React, { useEffect, useState } from 'react';
import homeSlide1 from "../../public/home-slide-1.jpeg";
import homeSlide2 from "../../public/home-slide-2.jpeg";
import homeSlide3 from "../../public/home-slide-3.jpeg";
import homeSlide4 from "../../public/home-slide-4.jpeg";
import homeSlide5 from "../../public/home-slide-5.jpeg";
import homeSlide6 from "../../public/home-slide-6.jpeg";
import homeSlide7 from "../../public/home-slide-7.jpeg";
import homeSlide8 from "../../public/home-slide-8.jpeg";

const SectionGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    homeSlide1,
    homeSlide2,
    homeSlide3,
    homeSlide4,
    homeSlide5,
    homeSlide6,
    homeSlide7,
    homeSlide8
  ];

  // Função para atualizar o carrossel
  const updateCarousel = (index) => {
    setCurrentIndex(index);
  };

  // Função para ir para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Atualiza a cada 20 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carrossel */}
      <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img src={slide} alt={`Slide ${index + 1}`} className="w-screen h-screen object-cover" />
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full bg-primary ${currentIndex === index ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => updateCarousel(index)}
          />
        ))}
      </div>

      {/* Conteúdo */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-left">
      <p className="text-warning text-lg font-medium mb-2">
        Melhores ofertas personalizadas
      </p>
      <h1 className="text-white text-5xl sm:text-6xl font-extrabold mb-4">
        Queima de estoque Nike 🔥
      </h1>
      <p className="text-white text-lg mb-6 max-w-lg">
        Consequat culpa exercitation mollit nisi excepteur do do tempor
        laboris eiusmod irure consectetur.
      </p>
      <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-tertiary transition duration-200">
        Ver Ofertas
      </button>
    </div>
 </div>
  );
};

export default SectionGallery;