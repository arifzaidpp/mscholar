import React from 'react';
import useGetAllUsers from '../../hooks/useGetUsers';

const UsersManagement = () => {
    const { users } = useGetAllUsers();
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-100 dark:bg-gray-900">
            {users.map(user => (
                <div key={user._id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                    <img src={user.avatar.url} alt={user.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{user.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UsersManagement;
