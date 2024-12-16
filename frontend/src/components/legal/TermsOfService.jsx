import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/signup"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Terms of Service
              </h1>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              Last updated: March 1, 2024
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing and using MScholar, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. User Accounts</h2>
            <p className="text-gray-600 dark:text-gray-300">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must immediately notify us of any unauthorized use of your account.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Content Guidelines</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Users must not create or share mscholarzes that contain:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Inappropriate or offensive content</li>
              <li>Copyrighted material without permission</li>
              <li>Misleading or false information</li>
              <li>Content that violates any laws</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Service Usage</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right to modify, suspend, or discontinue any part of our service at any time. We may also limit certain features or restrict access to parts or all of the service without notice or liability.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 dark:text-gray-300">
              The service and its original content, features, and functionality are owned by MScholar and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Termination</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason, including breach of these Terms.
            </p>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                For any questions about these Terms of Service, please contact us at support@mscholar.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}