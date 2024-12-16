import { useState } from 'react';
import toast from "react-hot-toast";

const useEditCourse = () => {
    const [loadingEdit, setLoadingEdit] = useState(false);
    const [errorEdit, setErrorEdit] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL;

    const editCourse = async (id, courseData) => {
        setLoadingEdit(true);
        setErrorEdit(null);
        

        try {
            const response = await fetch(`${API_URL}/admin/edit-course/${id}`, {
                method: 'PUT', // Use PUT for updating
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData),
            });

            if (!response.ok) {
                throw new Error('Failed to edit course');
            }

            const data = await response.json();

            // Save flag to sessionStorage before reload
            sessionStorage.setItem('courseUpdated', 'true');

            toast.success("Course updated successfully");

            return data;
        } catch (err) {
            setErrorEdit(err.message);
            toast.error("Failed to update course");
        } finally {
            setLoadingEdit(false);
        }
    };

    return { editCourse, loadingEdit, errorEdit };
};

export default useEditCourse;
