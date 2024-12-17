import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import CourseCard from '../courseCard/CourseCard';
import FilterSection from '../filterSection/FilterSection';
import { carouselSlides } from '../../../data/carouselData';
import { filterCourses } from '../../../utils/filterCourses';
import useGetAllCourses from '../../../hooks/useGetCourse';
import { Footer } from '../footer/Footer';
import { useEffect } from 'react';
import { Search } from 'lucide-react';
import { useMemo } from 'react';
import { UserProfile } from '../../profile/UserProfile';

export function DashboardLayout(page) {
  const { courses } = useGetAllCourses();
  const [showFilters, setShowFilters] = useState(false);
  const [activeLevel, setActiveLevel] = useState('');
  const [filters, setFilters] = useState({
    search: '',
    ageRange: 'All Ages',
    gender: 'All',
    level: 'All',
    modeOfEducation: 'All',
    faction: 'All'
  });

  const levels = [
    { name: 'All', value: 'All' },
    { name: 'Pre Primary', value: [3, 4] },
    { name: 'Lower Primary', value: [5, 9] },
    { name: 'Upper Primary', value: [10, 12] },
    { name: 'Secondary', value: [13, 15] },
    { name: 'Higher Secondary', value: [16, 17] },
    { name: 'UG', value: [18, 21] },
    { name: 'PG', value: [22, 1000] },
    { name: 'General', value: "General" },
  ];

  // const filteredCourses = useMemo(() => filterCourses(courses, filters), [courses, filters]);

  const filteredCourses = useMemo(() => {
    const coursesFiltered = filterCourses(courses, filters);
    return coursesFiltered.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return titleA.localeCompare(titleB);
    });
  }, [courses, filters]);
  

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const target = e.target;
      if (!(target instanceof HTMLAnchorElement)) return;
      const id = target.getAttribute('href')?.replace('#', '');
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, "");
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar />
        {page.page === 'dashboard' ? (
          <>
            <Carousel slides={carouselSlides} />

            <main id='available-courses' className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-6 gap-4">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                  Available Courses
                </h1>
                <div className="relative w-full sm:w-80">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search courses or providers..."
                    value={filters.search}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    className="pl-12 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-md transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                {levels.map((level, index) => (
                  <span
                    key={index}
                    className={`px-5 py-2 rounded-full text-base font-semibold cursor-pointer transition-colors duration-300 ${level.name === 'Pre Primary' ? 'bg-red-200 text-red-800 hover:bg-red-300' :
                      level.name === 'All' ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' :
                      level.name  === 'Lower Primary' ? 'bg-orange-200 text-orange-800 hover:bg-orange-300' :
                      level.name  === 'Upper Primary' ? 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300' :
                      level.name  === 'Secondary' ? 'bg-green-200 text-green-800 hover:bg-green-300' :
                      level.name  === 'Higher Secondary' ? 'bg-teal-200 text-teal-800 hover:bg-teal-300' :
                      level.name  === 'UG' ? 'bg-blue-200 text-blue-800 hover:bg-blue-300' :
                      level.name  === 'PG' ? 'bg-indigo-200 text-indigo-800 hover:bg-indigo-300' :
                                    'bg-purple-200 text-purple-800 hover:bg-purple-300'
                      }`}
                    onClick={() => {
                      if (activeLevel === level.name) {
                        // Hide the filter if the same level is clicked again
                        setShowFilters(false);
                        setActiveLevel('');
                        setFilters({ ...filters, level: 'All' });
                      } else {
                        // Show filters and set active level
                        setShowFilters(true);
                        setActiveLevel(level.name);
                        setFilters({ ...filters, level: level.value });
                      }
                    }}
                  >
                    {level.name}
                  </span>
                ))}
              </div>

              {showFilters && (
                <FilterSection filters={filters} setFilters={setFilters} courses={courses} />
              )}

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Total Courses: {filteredCourses.length}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <CourseCard key={course._id} course={course} />
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    No courses found matching your criteria.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Try adjusting your filters to see more results.
                  </p>
                </div>
              )}
            </main>
            <Footer />
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
