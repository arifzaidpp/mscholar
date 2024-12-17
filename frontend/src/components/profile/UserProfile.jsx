import React from 'react';
import { ProfileHeader } from './ProfileHeader';
import { PersonalInfo } from './PersonalInfo';
import { SecuritySettings } from './SecuritySettings';
import { NotificationSettings } from './NotificationSettings';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export function UserProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <ProfileHeader {...user} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Personal Info and Security */}
            <div className="lg:col-span-2 space-y-8">
              <PersonalInfo {...user} />
              <SecuritySettings />
            </div>

            {/* Sidebar */}
            <div>
              <NotificationSettings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}