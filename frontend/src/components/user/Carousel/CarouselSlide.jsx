import React from 'react';
import { BookOpen } from 'lucide-react';

const CarouselSlide = ({ slide, isActive }) => {
  return (
    <div 
      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
        isActive ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-full z-0'
      }`}
    >
      <div className="h-full bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900">
        <div className="h-full container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 items-center h-full py-8 lg:pb-12 lg:pt-4">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-700/50 dark:bg-blue-900/50 rounded-lg">
                  <BookOpen size={24} className="text-blue-200" />
                </div>
                <span className="px-4 py-1.5 text-sm font-medium bg-blue-700/50 dark:bg-blue-900/50 rounded-full text-white">
                  {slide.badge}
                </span>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  {slide.title}
                </h2>
                <p className="text-xl lg:text-2xl text-blue-200 font-medium">
                  {slide.subtitle}
                </p>
              </div>
              
              <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
                {slide.description}
              </p>
            </div>

            <div className="relative hidden lg:block">
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="relative z-50 w-auto h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;