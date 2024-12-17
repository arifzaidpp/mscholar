import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const CourseCard = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef(null);

  // Check if the description exceeds the 8-line limit
  const checkTruncation = useCallback(() => {
    if (descriptionRef.current) {
      const descriptionHeight = descriptionRef.current.scrollHeight;
      const containerHeight = descriptionRef.current.clientHeight;
      setIsTruncated(descriptionHeight > containerHeight); // If scrollHeight > clientHeight, it is truncated
    }
  }, []);

  useEffect(() => {
    checkTruncation();
  }, [course.description, checkTruncation]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.style.display = isExpanded ? 'block' : '-webkit-box';
      descriptionRef.current.style.webkitLineClamp = isExpanded ? 'none' : 8;
    }
  }, [isExpanded]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{course.title}</h3>
        <p className='text-base text-gray-800 dark:text-gray-300 mb-2'>{course.faction}</p>
        <div className="flex flex-wrap gap-4 mb-3">
          {course.courseProvider && (
            <span className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 px-3 py-1 rounded-full text-sm">
              {course.courseProvider}
            </span>
          )}
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
            {course.ageRangeStart && course.ageRangeEnd
              ? `${course.ageRangeStart} - ${course.ageRangeEnd} years`
              : course.ageRangeStart
                ? `${course.ageRangeStart}+ years`
                : course.ageRangeEnd
                  ? `Up to ${course.ageRangeEnd} years`
                  : 'All Ages'}
          </span>
          <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">
            {course.gender}
          </span>
          <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-3 py-1 rounded-full text-sm">
            {course.mode}
          </span>
        </div>


        {/* Description with truncation */}
        <p
          ref={descriptionRef}
          className={`text-gray-600 dark:text-gray-300 text-ellipsis overflow-hidden transition-all duration-300 ${!isTruncated && 'mb-4'}`}
          style={{
            display: isExpanded ? 'block' : '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: isExpanded ? 'none' : 8,
          }}
        >
          {course.description}
        </p>

        {/* Show Read More if truncated */}
        {isTruncated && !isExpanded && (
          <button
            onClick={handleToggle}
            className="text-blue-600 dark:text-blue-400 mb-4 hover:underline focus:outline-none"
          >
            Read More
          </button>
        )}
        {/* Show Read Less if expanded */}
        {isExpanded && (
          <button
            onClick={handleToggle}
            className="text-blue-600 dark:text-blue-400 mb-4 hover:underline focus:outline-none"
          >
            Read Less
          </button>
        )}
      </div>

      {/* Contact and Enrollment Button at the Bottom */}
      <div className="mt-auto">
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
    </div>
  );
};

export default CourseCard;
