import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen } from "lucide-react";

export function BannerImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative hidden lg:block"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[35rem] h-[35rem] bg-gradient-to-r from-blue-400/90 to-purple-400/30 rounded-full blur-3xl" />
      </div>

      {/* Main Image */}
      <div className="relative justify-center align-middle items-center">
        <div className="relative z-10 w-[35rem] h-[35rem] rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://res.cloudinary.com/dkykfxzpx/image/upload/v1734281563/b83ab34801c7608725e622acbb0840e4_2_juwtug.png"
            alt="Islamic Education"
            className="w-full h-auto object-cover rounded-full backdrop-blur-sm "
          />
          {/* Blur or Transparency Effect */}
          {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-blue-800 dark:via-blue-800/70 dark:to-transparent pointer-events-none" /> */}
        </div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute z-20 top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Active Users</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1,000+</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute z-20 -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Total Courses</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100+</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
