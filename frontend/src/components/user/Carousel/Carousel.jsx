import React, { useState, useEffect, useCallback } from 'react';
import CarouselSlide from './CarouselSlide';
import CarouselIndicators from './CarouselIndicators';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [nextSlide, isHovering]);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div 
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="aspect-[29/9] relative w-full">
            {slides.map((slide, index) => (
              <CarouselSlide
                key={index}
                slide={slide}
                isActive={currentSlide === index}
              />
            ))}
            
            <CarouselIndicators
              slides={slides}
              currentSlide={currentSlide}
              onClick={setCurrentSlide}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;