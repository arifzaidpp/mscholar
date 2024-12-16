import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import CourseCard from '../courseCard/CourseCard';
import FilterSection from '../filterSection/FilterSection';
import { carouselSlides } from '../../../data/carouselData';
import { filterCourses } from '../../../utils/filterCourses';
import useGetAllCourses from '../../../hooks/useGetCourse';
import { UserProfile } from '../profile/UserProfile';

export function DashboardLayout(page) {
  const { courses, loading, error } = useGetAllCourses();
  const [filters, setFilters] = useState({
    ageRange: 'All Ages',
    gender: 'All'
  });

  const filteredCourses = filterCourses(courses, filters);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar />
        {page.page === 'dashboard' ? (
          <>
            <Carousel slides={carouselSlides} />

            <main className="max-w-7xl mx-auto px-4 py-8">
              <FilterSection filters={filters} setFilters={setFilters} courses={courses} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <CourseCard key={course._id} course={course} />
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-300 text-lg">No courses found matching your criteria.</p>
                  <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters to see more results.</p>
                </div>
              )}
            </main>
          </>
        ) : page.page === 'profile' ? (
          <div className='pt-20'>
            <UserProfile />
          </div>
        ) : null}
      </div>
    </div>
  );
}