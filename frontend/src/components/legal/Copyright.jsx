import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Copyright } from 'lucide-react';

export function CopyrightPolicy() {
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
              <Copyright className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Copyright Policy
              </h1>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              Last updated: December 1, 2024
            </p>

            <h2 className="text-xl text-gray-900 dark:text-white font-semibold mt-8 mb-4">
              1. Ownership of Content
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              All content, including text, images, graphics, logos, videos, and software, published on this website is the property of MScholar or its content creators and is protected under applicable copyright laws.
            </p>

            <h2 className="text-xl text-gray-900 dark:text-white font-semibold mt-8 mb-4">
              2. Use of Content
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              You may access and use the content on our website for personal, non-commercial purposes only. Unauthorized reproduction, redistribution, or modification of the content is strictly prohibited.
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Personal, non-commercial use is permitted with proper attribution.</li>
              <li>Commercial use requires prior written consent.</li>
              <li>Copying or scraping of content without permission is prohibited.</li>
            </ul>

            <h2 className="text-xl text-gray-900 dark:text-white font-semibold mt-8 mb-4">
              3. User-Generated Content
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              By submitting content (e.g., comments, reviews, or other materials) to our website, you grant MScholar a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute the submitted content.
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>You warrant that you own or control the rights to the submitted content.</li>
              <li>You agree not to submit copyrighted material without permission.</li>
            </ul>

            <h2 className="text-xl text-gray-900 dark:text-white font-semibold mt-8 mb-4">
              4. Copyright Infringement Claims
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you believe that your copyrighted material has been used on our website without permission, please contact us immediately with the following details:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>A description of the copyrighted work being infringed.</li>
              <li>The location (URL) of the infringing content.</li>
              <li>Your contact information (name, email, phone number).</li>
              <li>A statement of ownership and authorization to act on behalf of the owner.</li>
            </ul>

            <h2 className="text-xl text-gray-900 dark:text-white font-semibold mt-8 mb-4">
              5. Removal of Content
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Upon receiving a valid copyright infringement notice, we will investigate and remove the content in question if necessary. Repeat infringers may be banned from using our services.
            </p>

            <h2 className="text-xl text-gray-900 dark:text-white font-semibold mt-8 mb-4">
              6. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              For any questions regarding this Copyright Policy or to submit a copyright complaint, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Email: <a href="mailto:mscholar.official@gmail.com" className="underline">mscholar.official@gmail.com</a>
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
