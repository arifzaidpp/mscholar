import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Heart, Landmark, Users } from 'lucide-react';

import { BannerImage } from './BannerImage';
import { BannerBadge } from './BannerBadge';

export function Banner() {
  const stats = [
    { icon: "Users", number: '1000+', label: 'Active Users' },
    { icon: "BookOpen", number: '300+', label: 'Total Courses' },
    { icon: "Landmark", number: '50+', label: 'Total Institution' },
    { icon: "Heart", number: '95%', label: 'Satisfaction Rate' }
  ];
  return (
    <section className="relative min-h-[100vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
      </div>

      {/* Decorative Circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <BannerBadge />

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                Discover the Path of
                <span className="block text-blue-200">Sacred Knowledge</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-blue-100 max-w-xl"
              >
                Join our comprehensive Islamic education platform offering authentic courses
                for all age groups. Learn from qualified scholars and progress at your own pace.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/signup"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Browse Courses
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-300 text-white rounded-lg font-semibold hover:bg-blue-800/50 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Content - Image */}
          <BannerImage />
        </div>
      </div>
      <div className='relative'>
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 mb-2 bg-blue-100 dark:bg-blue-600/50 rounded-full flex items-center justify-center mx-auto">
                {stat.icon === "Users" && <Users className="w-8 h-8 text-blue-600 dark:text-blue-200" />}
                {stat.icon === "BookOpen" && <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-200" />}
                {stat.icon === "Landmark" && <Landmark className="w-8 h-8 text-blue-600 dark:text-blue-200" />}
                {stat.icon === "Heart" && <Heart className="w-8 h-8 text-blue-600 dark:text-blue-200" />}
              </div>
              <div className="text-3xl font-bold text-white ">
                {stat.number}
              </div>
              <div className="text-base text-blue-200 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}