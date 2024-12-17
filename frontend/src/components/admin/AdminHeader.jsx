import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';


import { Bell, Search, User, LogOut } from 'lucide-react';


import { motion, AnimatePresence } from 'framer-motion';
import { useDropdown } from '../../hooks/useDropdown';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const AdminHeader = ({ handleMenu }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useDropdown('user-nav');
  const navigate = useNavigate();

  const handleUserClick = () => {
    setIsOpen(false);
    navigate('/dashboard/profile');
  }

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  }
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className='flex gap-3 items-center'>
          <button className="p-2 text-gray-600 block lg:hidden dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          onClick={handleMenu}>
            <Menu size={20} />
          </button>

          <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Course Management</h1>
        </div>

        <div className="flex items-center gap-4">


          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          <button className="relative p-2 hidden sm:block text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="relative" data-dropdown="user-nav">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img
                src={user.avatar.url}
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block text-gray-700 dark:text-gray-200">
                {user.name}
              </span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 z-50 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1"
                >
                  <button className="w-full px-4 py-2 text-left flex items-center gap-2 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={handleUserClick}>
                    <User className="w-4 h-4" />
                    Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left flex items-center gap-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={handleLogout}>
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;