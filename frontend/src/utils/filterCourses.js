/**
 * Filter courses based on age range and gender criteria
 * @param {Array} courses - Array of course objects
 * @param {Object} filters - Filter criteria object
 * @returns {Array} Filtered courses
 */
export const filterCourses = (courses, filters) => {
  return courses.filter(course => {
    // Age range match logic
    const ageMatch = filters.ageRange === 'All Ages' || 
      (course.ageRangeStart && course.ageRangeEnd 
        ? (course.ageRangeStart <= filters.ageRange && course.ageRangeEnd >= filters.ageRange)
        : course.ageRangeStart
          ? course.ageRangeStart <= filters.ageRange
          : course.ageRangeEnd
            ? course.ageRangeEnd >= filters.ageRange
            : true); // If neither start nor end exists, consider it as "All Ages"

    // Gender match logic
    const genderMatch = filters.gender === 'All' || course.gender === filters.gender;

    // Mode of Education match logic
    const modeMatch = filters.modeOfEducation === 'All' || course.mode === filters.modeOfEducation;

    // Sector match logic
    const sectorMatch = filters.sector === 'All' || course.sector === filters.sector;

    // Search match logic
    const searchMatch = course.title.toLowerCase().includes(filters.search.toLowerCase());

    return ageMatch && genderMatch && modeMatch && sectorMatch && searchMatch;
  });
};
