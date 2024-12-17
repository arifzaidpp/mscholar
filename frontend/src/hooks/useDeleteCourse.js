import { useState } from 'react';
import toast from "react-hot-toast";

const useDeleteCourse = () => {
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [errorDelete, setErrorDelete] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL;

    const deleteCourse = async (id) => {
        setLoadingDelete(true);
        setErrorDelete(null);

        try {
            const response = await fetch(`${API_URL}/admin/delete-course/${id}`, {
                method: 'DELETE',
            });
            

            if (!response.ok) {
                throw new Error('Failed to delete course');
            }

            const data = await response.json();
            
            toast.success("Course deleted successfully");
            return data; // return response data if necessary
        } catch (err) {
            setErrorDelete(err.message);
            toast.error("Failed to delete course");
        } finally {
            setLoadingDelete(false);
        }
    };

    return { deleteCourse, loadingDelete, errorDelete };
};

export default useDeleteCourse;
