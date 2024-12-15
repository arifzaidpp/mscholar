import React, { useState } from 'react';
import CourseList from './CourseList';
import CourseForm from './CourseForm';
import { Plus } from 'lucide-react';

const CourseManagement = () => {
  const [isAddingCourse, setIsAddingCourse] = useState(false);
  const [editData, setEditData] = useState(null);

  function handleEditCourse(course)  {
    setIsAddingCourse(true);
    setEditData(course);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">All Courses</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage and organize your courses</p>
        </div>
        
        <button
          onClick={() => setIsAddingCourse(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Plus size={20} />
          Add New Course
        </button>
      </div>

      {isAddingCourse ? (
        <CourseForm onClose={() => setIsAddingCourse(false)} editData={editData} />
      ) : (
        <CourseList onEditCourse={handleEditCourse} />
      )}
    </div>
  );
};

export default CourseManagement;