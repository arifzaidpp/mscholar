import React, { useState, useEffect } from 'react';
import CourseList from './CourseList';
import CourseForm from './CourseForm';
import { Plus } from 'lucide-react';
import { Search } from 'lucide-react';
import useGetAllCourses from '../../hooks/useGetCourse';

const CourseManagement = () => {
  const { fetchCourses, courses, loading, error } = useGetAllCourses();
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [editData, setEditData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  
  useEffect(() => {
    if (searchQuery) {
      setFilteredCourses(
      courses.filter((course, index) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery.toLowerCase() === ((index + 1).toString().toLowerCase())
      )
      );
    } else {
      setFilteredCourses(courses);
    }
  }, [courses, searchQuery]);

  function handleEditCourse(course) {
    setIsAddingCourse(true);
    setEditData(course);
  }

  function reloadCourses() {
    fetchCourses();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">All Courses</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage and organize your courses</p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0">
          <button
            onClick={() => setIsAddingCourse(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus size={20} />
            Add New Course
          </button>
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full md:w-auto px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {isAddingCourse ? (
        <CourseForm onClose={() => { setIsAddingCourse(false); setEditData(null); }} editData={editData} courses={courses} reloadCourses={reloadCourses} />
      ) : (
        <CourseList onEditCourse={handleEditCourse} courses={filteredCourses} reloadCourses={reloadCourses} />
      )}
    </div>
  );
};

export default CourseManagement;