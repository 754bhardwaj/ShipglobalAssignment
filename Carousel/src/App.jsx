import React, { useState } from 'react';
import './index.css';

const slides = [
  '/src/assets/image1.jpg',
  '/src/assets/image2.jpg',
  '/src/assets/image3.jpg',
];

const defaultImage = '/src/assets/fallback.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showNextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const showPreviousSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleImageError = (event) => {
    event.target.src = defaultImage;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-purple-300 to-white via-purple-300 p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl border border-gray-300">
        <div
          className="flex transition-transform duration-700 ease-in-out transform-gpu"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <img
              key={idx}
              src={slide}
              alt={`Slide ${idx + 1}`}
              onError={handleImageError}
              className="w-full flex-shrink-0 object-cover h-[500px] transition-opacity duration-700 ease-in-out"
            />
          ))}
        </div>

        {/* Previous Slide Button */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-800 to-transparent text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
          onClick={showPreviousSlide}
        >
          &#10094;
        </button>

        {/* Next Slide Button */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-purple-800 to-transparent text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
          onClick={showNextSlide}
        >
          &#10095;
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex mt-6 space-x-3">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`cursor-pointer w-5 h-5 rounded-full transition-colors duration-300 ease-in-out ${currentSlide === idx ? 'bg-purple-600' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
