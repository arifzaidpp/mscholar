import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import useAddCourse from '../../hooks/useAddCourse';
import useEditCourse from '../../hooks/useEditCourse';

const CourseForm = ({ onClose, editData, courses, reloadCourses }) => {
  const { addCourse, loadingAdd, errorAdd } = useAddCourse();
  const { editCourse, loadingEdit, errorEdit } = useEditCourse();

  const [courseProviders, setCourseProviders] = useState([]);

  useEffect(() => {
    if (courses && Array.isArray(courses)) {
      const validProviders = new Set(
        courses
          .map(course => course.courseProvider)
          .filter(provider => provider && provider.trim() !== '')
      );
      setCourseProviders(Array.from(validProviders)); // Convert the Set back to an array
    }
  }, [courses]);


  const [formData, setFormData] = useState({
    title: editData?.title || '',
    ageRangeStart: editData?.ageRangeStart || '',
    ageRangeEnd: editData?.ageRangeEnd || '',
    gender: editData?.gender || '',
    faction: editData?.faction || '',
    enrollmentLink: editData?.enrollmentLink || '',
    mode: editData?.mode || '',
    courseProvider: editData?.courseProvider || '',
    description: editData?.description || '',
    contactEmail: editData?.contactEmail || '',
    contactPhone: editData?.contactPhone || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    editData ? await editCourse(editData._id, formData) : await addCourse(formData);
    reloadCourses();
    editData = null;
    onClose();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{editData ? 'Edit Course' : 'Add New Course'}</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <X size={20} />
        </button>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter course title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Enrollment Link
            </label>
            <input
              type="url"
              name="enrollmentLink"
              value={formData.enrollmentLink}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/enroll"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Age Range From
            </label>
            <input
              type="number"
              name="ageRangeStart"
              value={formData.ageRangeStart}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter start age"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Age Range To
            </label>
            <input
              type="number"
              name="ageRangeEnd"
              value={formData.ageRangeEnd}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter end age"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Faction
            </label>
            <select
              name="faction"
              value={formData.faction}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Faction</option>
              <option value="Samastha(EK)">Samastha(EK)</option>
              <option value="Samastha(AP)">Samastha(AP)</option>
              <option value="Mujahid">Mujahid</option>
              <option value="Jam'a te Islami">Jam'a te Islami</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option value="Mixed">Mixed</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mode Of Education
            </label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Course Provider
            </label>
            <div className='relative'>
              <select
                name="courseProvider"
                value={formData.courseProvider}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Provider</option>

                {courseProviders.map((provider) => (
                  <option key={provider} value={provider}>
                    {provider}
                  </option>
                ))}
              </select>

              <button
                type="button"
                aria-label="Add new provider"
                onClick={() => {
                  const newProvider = prompt('Enter new course provider:');
                  if (newProvider && !courseProviders.includes(newProvider)) {
                    setCourseProviders((prevProviders) => [...prevProviders, newProvider]);
                    setFormData((prevData) => ({
                      ...prevData,
                      courseProvider: newProvider,
                    }));
                  } else if (courseProviders.includes(newProvider)) {
                    alert('Provider already exists!');
                  }

                }}
                className="absolute right-7 top-2 text-blue-500 hover:text-blue-700"
              >
                Add
              </button>

            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter course description"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Contact Email
            </label>
            <input
              type="email"
              name="contactEmail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={formData.contactEmail}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="contact@example.com"
            />

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Contact Phone
            </label>
            <input
              type="tel"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          {errorAdd && <p className="text-sm text-red-500">{errorAdd}</p>}
          {errorEdit && <p className="text-sm text-red-500">{errorEdit}</p>}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loadingAdd || loadingEdit}
            className={`px-4 py-2 ${loadingAdd || loadingEdit ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              } text-white rounded-lg`}
          >
            {loadingAdd || loadingEdit ? 'Submitting...' : editData ? 'Update Course' : 'Add Course'}
          </button>

        </div>
      </form>
    </div>
  );
};

export default CourseForm;