import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export function ContactHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        <MessageSquare className="w-14 h-14 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
      </motion.div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 
                   bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 
                   dark:to-indigo-400 bg-clip-text text-transparent">
        Get in Touch
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg">
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
    </motion.div>
  );
}