import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    description: 'Monday to Friday, 9am to 6pm EST',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'support@mscholar.com',
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: 'Office',
    content: '123 Quiz Street',
    description: 'Learning City, ED 12345',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon - Fri, 9:00 - 18:00',
    description: 'Weekend support available for emergencies',
  },
];

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {contactInfo.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start space-x-4"
        >
          <div className="flex-shrink-0">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
              <item.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-900 dark:text-gray-100 font-medium">
              {item.content}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}