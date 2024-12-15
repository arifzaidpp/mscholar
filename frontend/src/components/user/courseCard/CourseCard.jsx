import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{course.title}</h3>
      <p className='text-base text-gray-800 dark:text-gray-300 mb-2'>{course.sector}</p>
      <div className="flex gap-4 mb-3">
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
          {course.ageRangeStart} - {course.ageRangeEnd}
        </span>
        <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">
          {course.gender}
        </span>
        <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-3 py-1 rounded-full text-sm">
          {course.mode}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Phone size={18} />
          <span>{course.contactPhone}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Mail size={18} />
          <span>{course.contactEmail}</span>
        </div>
      </div>
      {course.enrollmentLink && (
        <button 
          onClick={() => window.open(course.enrollmentLink, '_blank')}
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
        >
          Enroll Now
          <ExternalLink size={18} />
        </button>
      )}
    </div>
  );
};

export default CourseCard;