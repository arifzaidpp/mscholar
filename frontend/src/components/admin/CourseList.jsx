import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import useDeleteCourse from '../../hooks/useDeleteCourse';

const CourseList = ({ onEditCourse, courses, courseIndex, reloadCourses }) => {
  const { deleteCourse, loadingDelete, errorDelete } = useDeleteCourse();

  const handleDeleteCourse = async (id) => {
    await deleteCourse(id);
    reloadCourses();
  }

  const handleEditCourse = (course) => {
    onEditCourse(course);
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Age Range
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Gender
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {courses.map((course, index) => (
              <tr key={course._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 dark:text-white">
                  {courseIndex ? courseIndex.findIndex(c => c._id === course._id) + 1 : ''}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {course.title}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {course.description.substring(0, 60)}...
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {course.ageRangeStart} - {course.ageRangeEnd}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {course.gender}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {course.contactEmail}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {course.contactPhone}
                  </div>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="text-green-600 hover:text-green-800 dark:text-green-500 dark:hover:text-green-400"
                  onClick={() => handleEditCourse(course)}>
                    <Edit2 size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
                   onClick={() => handleDeleteCourse(course._id)}>
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;
