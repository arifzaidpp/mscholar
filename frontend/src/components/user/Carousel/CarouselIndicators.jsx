import React from 'react';

const CarouselIndicators = ({ slides, currentSlide, onClick }) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-3 p-2 z-20">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`group relative h-2 rounded-full transition-all duration-300 ${
            currentSlide === index
              ? 'w-12 bg-white'
              : 'w-2 bg-white/50 hover:w-8 hover:bg-white/75'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        >
          <span className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/90 text-blue-900 text-xs rounded opacity-0 transition-opacity ${
            currentSlide === index ? 'group-hover:opacity-100' : ''
          }`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CarouselIndicators;