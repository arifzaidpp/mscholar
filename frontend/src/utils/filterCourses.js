/**
 * Filter courses based on age range and gender criteria
 * @param {Array} courses - Array of course objects
 * @param {Object} filters - Filter criteria object
 * @returns {Array} Filtered courses
 */
export const filterCourses = (courses, filters) => {
  return courses.filter(course => {
    const ageMatch = filters.ageRange === 'All Ages' || 
      (course.ageRangeStart <= filters.ageRange && course.ageRangeEnd >= filters.ageRange);
    const genderMatch = filters.gender === 'All' || course.gender === filters.gender;
    return ageMatch && genderMatch;
  });
};