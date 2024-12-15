import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function BannerBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-800/50 to-purple-800/50 backdrop-blur-sm"
    >
      <Award className="w-5 h-5 text-blue-200" />
      <span className="text-sm font-medium text-blue-200">
        Premier Islamic Education Platform
      </span>
    </motion.div>
  );
}