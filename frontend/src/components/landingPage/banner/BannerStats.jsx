import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Star, Clock } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Students', value: '1000+' },
  { icon: BookOpen, label: 'Islamic Courses', value: '100+' },
  { icon: Star, label: 'Expert Teachers', value: '50+' },
  { icon: Clock, label: 'Learning Hours', value: '10k+' },
];

export function BannerStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-2 p-2 bg-blue-800/50 rounded-lg">
            <stat.icon className="w-6 h-6 text-blue-200" />
          </div>
          <div className="text-2xl font-bold text-white">{stat.value}</div>
          <div className="text-sm text-blue-200">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}