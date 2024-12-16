import { useState } from 'react';
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

const useAddCourse = () => {
    const [loadingAdd, setLoadingAdd] = useState(false);
    const [errorAdd, setErrorAdd] = useState(null);

    const addCourse = async (courseData) => {
        
        setLoadingAdd(true);
        setErrorAdd(null);

        try {
            const response = await fetch(`${API_URL}/admin/add-course`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData),
            });

            if (!response.ok) {
                throw new Error('Failed to add course');
            }

            const data = await response.json();
            toast.success("Course added successfully");

            return data; // return response data if necessary
        } catch (err) {
            setErrorAdd(err.message);
            toast.error("Failed to add course");
        } finally {
            setLoadingAdd(false);
        }
    };

    return { addCourse, loadingAdd, errorAdd };
};

export default useAddCourse;
