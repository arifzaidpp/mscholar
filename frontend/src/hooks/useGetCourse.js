// hooks/useGetAllCourses.js
import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useGetAllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCourses = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL}/user/courses`); // Adjust URL as necessary

            if (!response.ok) {
                throw new Error('Failed to fetch courses');
            }

            const data = await response.json();
            setCourses(data.courses); // Assuming the courses are in data.courses
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses(); // Fetch courses on component mount
    }, []);

    return { courses, loading, error };
};

export default useGetAllCourses;
