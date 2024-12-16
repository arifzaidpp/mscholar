import React from 'react';
import { Bell, Search, User, LogOut, Menu } from 'lucide-react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';

import { motion, AnimatePresence } from 'framer-motion';
import { Settings, WalletCards } from 'lucide-react';
import { useDropdown } from '../../../hooks/useDropdown';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useDropdown('user-nav');
  const navigate = useNavigate();

  const handleUserClick = () => {
    setIsOpen(false);
    navigate('/user/profile');
  }

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <>
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/dkykfxzpx/image/upload/v1734281580/icon_uqlu6x.png"
                alt="Logo"
                className="w-auto h-8 rounded-full"
              />
              <span className="flex-shrink-0 font-bold text-xl text-blue-600 dark:text-blue-400">MScholar</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="/user" className="text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-blue-300">Dashboard</a>
            </div>
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
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 relative">
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
      </div>
    </nav>


    
    </>
  );
};

export default Navbar;