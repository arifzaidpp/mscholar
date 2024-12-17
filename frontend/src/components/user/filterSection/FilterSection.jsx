import React from 'react';

const FilterSection = ({ filters, setFilters, courses }) => {
  
  const ageRanges = ['All Ages', ...new Set(courses.flatMap(course => {
    const range = [];
    for (let i = course.ageRangeStart; i <= course.ageRangeEnd; i++) {
      range.push(i);
    }
    return range;
  }))];
  const genders = ['All', 'Male', 'Females', 'Mixed'];
  const modesOfEducation = ['All', 'Online', 'Offline', 'Both'];
  const factions = ['All', 'Samastha(EK)', 'Samastha(AP)', 'Mujahid', 'Jam\'a te Islami', 'Others'];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100">Filter Courses</h2>
        <button
          onClick={() => setFilters(prev => ({ ...prev, ageRange: 'All Ages', gender: 'All', modeOfEducation: 'All', faction: 'All' }))}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Clear Filters
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Age</label>
          <input type="number" className="w-full rounded-lg border-gray-300 px-4 py-2 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          onChange={(e) => setFilters(prev => ({ ...prev, ageRange: e.target.value || 'All Ages' }))}
          placeholder={ageRanges[0]}
          value={filters.ageRange}
          />
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
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mode Of Education</label>
          <select
            value={filters.modeOfEducation}
            onChange={(e) => setFilters(prev => ({ ...prev, modeOfEducation: e.target.value }))}
            className="w-full rounded-lg border-gray-300 px-4 py-2 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {modesOfEducation.map(modeOfEducation => (
              <option key={modeOfEducation} value={modeOfEducation}>{modeOfEducation}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Faction</label>
          <select
            value={filters.faction}
            onChange={(e) => setFilters(prev => ({ ...prev, faction: e.target.value }))}
            className="w-full rounded-lg border-gray-300 px-4 py-2 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {factions.map(faction => (
              <option key={faction} value={faction}>{faction}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};


export default FilterSection;