/**
 * Filter courses based on age range and gender criteria
 * @param {Array} courses - Array of course objects
 * @param {Object} filters - Filter criteria object
 * @returns {Array} Filtered courses
 */
export const filterCourses = (courses, filters) => {
  return courses.filter((course) => {
    // Age range match logic
    const ageMatch =
      filters.ageRange === "All Ages" ||
      (course.ageRangeStart && course.ageRangeEnd
        ? course.ageRangeStart <= filters.ageRange && course.ageRangeEnd >= filters.ageRange
        : course.ageRangeStart
        ? course.ageRangeStart <= filters.ageRange
        : course.ageRangeEnd
        ? course.ageRangeEnd >= filters.ageRange
        : true); // Default to true when no range exists

    // Gender match logic
    const genderMatch =
      filters.gender === "All" || course.gender === filters.gender;

    // Mode of Education match logic
    const modeMatch =
      filters.modeOfEducation === "All" ||
      course.mode === filters.modeOfEducation;

    // Faction match logic
    const factionMatch =
      filters.faction === "All" || course.faction === filters.faction;

    // Level match logic
    const levelMatch =
      filters.level === "All" ||
      (filters.level === "General" &&
        !course.ageRangeStart &&
        !course.ageRangeEnd) ||
      (Array.isArray(filters.level) &&
        // Condition 1: Both ageRangeStart and ageRangeEnd are defined
        ((course.ageRangeStart !== undefined &&
          course.ageRangeEnd !== undefined &&
          course.ageRangeStart <= filters.level[1] &&
          course.ageRangeEnd >= filters.level[0]) ||
          // Condition 2: Only ageRangeStart is defined
          (course.ageRangeStart !== undefined &&
            course.ageRangeStart <= filters.level[1] &&
            course.ageRangeStart >= filters.level[0]) ||
          // Condition 3: Only ageRangeEnd is defined
          (course.ageRangeEnd !== undefined &&
            course.ageRangeEnd >= filters.level[0] &&
            course.ageRangeEnd <= filters.level[1])));

    // Search match logic
    const searchMatch =
      course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.courseProvider
        ?.toLowerCase()
        .includes(filters.search.toLowerCase());

    return (
      ageMatch &&
      genderMatch &&
      modeMatch &&
      factionMatch &&
      searchMatch &&
      levelMatch
    );
  });
};
