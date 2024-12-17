import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar';
import AdminHeader from '../AdminHeader';
import CourseManagement from '../CourseManagement';
import UsersManagement from '../UsersManagement';

const AdminDashboard = (page) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
      setIsOpen(!isOpen);
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'} `}>
      <AdminSidebar handleMenu={handleMenu} />
      </div>
      <div className="ml-0 lg:ml-64 min-h-screen">
        <AdminHeader handleMenu={handleMenu} />
        <main className="p-6">
          {page.page === 'users' ? <UsersManagement /> : <CourseManagement />}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;