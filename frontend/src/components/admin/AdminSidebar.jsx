import React from 'react';
import { LayoutDashboard, BookOpen, Users, Settings, HelpCircle, LogOut } from 'lucide-react';

const AdminSidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: BookOpen, label: 'Courses', active: true },
    { icon: Users, label: 'Students', active: false },
    { icon: Settings, label: 'Settings', active: false },
    { icon: HelpCircle, label: 'Help', active: false },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-500" />
        <span className="text-xl font-bold text-gray-800 dark:text-white">IslamicEdu</span>
      </div>
      
      <nav className="px-4 py-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 ${
              item.active
                ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-500'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;