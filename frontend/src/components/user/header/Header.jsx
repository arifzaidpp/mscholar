import React from 'react';
import { Search, BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 text-white transition-colors overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-white/[0.02]" />
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={32} className="text-blue-200" />
              <span className="px-3 py-1 text-sm font-medium bg-blue-700/50 dark:bg-blue-900/50 rounded-full">
                Islamic Education Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Course Search 
              <span className="block text-blue-200">Ends Here</span>
            </h1>
            
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Discover a curated collection of authentic Islamic courses tailored to your learning journey. 
              Join thousands of students worldwide in pursuing sacred knowledge.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                1000+ Active Students
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                100+ Certified Courses
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl" />
            <img
              src="https://images.unsplash.com/photo-1577096794592-797c9fa24d13?auto=format&fit=crop&w=600&h=800&q=80"
              alt="Islamic Scholar Teaching"
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full opacity-50 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full opacity-50 blur-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;