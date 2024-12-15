import React from 'react';

const FilterSection = ({ filters, setFilters, courses }) => {
  console.log(courses);
  
  const ageRanges = ['All Ages', ...new Set(courses.flatMap(course => {
    const range = [];
    for (let i = course.ageRangeStart; i <= course.ageRangeEnd; i++) {
      range.push(i);
    }
    return range;
  }))];
  const genders = ['All', 'Male', 'Females', 'Mixed'];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-8">
      <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Filter Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Age Range</label>
          <select
            value={filters.ageRange}
            onChange={(e) => setFilters(prev => ({ ...prev, ageRange: e.target.value }))}
            className="w-full rounded-lg border-gray-300 px-4 py-2 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {ageRanges.map(age => (
              <option key={age} value={age}>{age}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Gender</label>
          <select
            value={filters.gender}
            onChange={(e) => setFilters(prev => ({ ...prev, gender: e.target.value }))}
            className="w-full rounded-lg border-gray-300 px-4 py-2 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {genders.map(gender => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;