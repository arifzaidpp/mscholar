// hooks/useGetAllCourses.js
import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useGetAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL}/admin/users`); // Adjust URL as necessary

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const data = await response.json();
            setUsers(data.users); // Assuming the Users are in data.Users
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(); // Fetch courses on component mount
    }, []);

    return { users, loading, error };
};

export default useGetAllUsers;
