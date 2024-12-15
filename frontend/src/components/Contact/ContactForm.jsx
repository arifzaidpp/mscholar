import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            whileFocus={{ scale: 1.01 }}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                     transition-all duration-200"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            whileFocus={{ scale: 1.01 }}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                     transition-all duration-200"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Subject
        </label>
        <motion.input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="How can we help?"
          whileFocus={{ scale: 1.01 }}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                   transition-all duration-200"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us more about your project..."
          rows={5}
          whileFocus={{ scale: 1.01 }}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                   transition-all duration-200 resize-none"
        />
      </motion.div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 
                 dark:from-blue-500 dark:to-indigo-500 text-white py-4 px-6 
                 rounded-lg font-medium shadow-lg hover:shadow-xl
                 transition-all duration-200
                 disabled:opacity-70 disabled:cursor-not-allowed
                 disabled:hover:shadow-none
                 flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-5 h-5" />
          </>
        )}
      </motion.button>
    </form>
  );
}