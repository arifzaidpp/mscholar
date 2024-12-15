import React from 'react';
import AdminSidebar from '../AdminSidebar';
import AdminHeader from '../AdminHeader';
import CourseManagement from '../CourseManagement';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminSidebar />
      <div className="ml-64 min-h-screen">
        <AdminHeader />
        <main className="p-6">
          <CourseManagement />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;