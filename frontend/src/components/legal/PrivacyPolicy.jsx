import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock } from 'lucide-react';

export function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <div className="flex items-center gap-2">
              <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Privacy Policy
              </h1>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              Last updated: March 1, 2024
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We collect information that you provide directly to us:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Account information (name, email, password)</li>
              <li>Profile information (avatar, bio)</li>
              <li>Quiz responses and results</li>
              <li>Usage data and analytics</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Provide and maintain our service</li>
              <li>Personalize your experience</li>
              <li>Analyze and improve our service</li>
              <li>Communicate with you</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Sharing</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Service providers who assist in our operations</li>
              <li>Law enforcement when required by law</li>
              <li>Other users (only information you choose to make public)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-300">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Cookies</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                For any questions about our Privacy Policy, please contact us at privacy@mscholar.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}