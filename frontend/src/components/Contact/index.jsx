import { motion } from 'framer-motion';
import { ContactHeader } from './ContactHeader';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <div className="pb-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl-dark 
                   p-8 hover:shadow-2xl transition-all duration-300"
        >
          <ContactHeader />
          <ContactInfo />
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}