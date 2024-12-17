import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Loader2, User, Mail, HelpCircle } from 'lucide-react';

function FormInput({
  icon: Icon,
  type,
  name,
  value,
  onChange,
  placeholder,
  required
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full pl-11 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600
                   bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm
                   text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                   transition-all duration-200"
          placeholder={placeholder}
        />
      </div>
    </motion.div>
  );
}

export default function ContactForm() {
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
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl h-max"
    >
      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl" />

      <form
        onSubmit={handleSubmit}
        className="relative space-y-3 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl"
      >
        {/* Form Header */}
        <div className="space-y-2 mb-4">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl inline-flex">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 
                       dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Send us a Message
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            We value your questions, suggestions, and feedback! Send us a message, and we'll get back to you promptly.
          </p>
        </div>

        {/* Form Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FormInput
            icon={User}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            required
          />
          <FormInput
            icon={Mail}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="sample@domain.com"
            required
          />
        </div>

        <FormInput
          icon={HelpCircle}
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600
                     bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm
                     text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                     transition-all duration-200 resize-none"
            placeholder="Your message..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 
                   dark:from-purple-500 dark:to-pink-500 text-white 
                   py-3 px-6 rounded-lg font-medium
                   shadow-lg hover:shadow-xl
                   disabled:opacity-70 disabled:cursor-not-allowed
                   disabled:hover:shadow-none
                   transition-all duration-300
                   flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-4 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            We'll get back to you within 24 hours
          </p>
        </motion.div>
      </form>
    </motion.div>
  );
}