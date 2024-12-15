import React from 'react';
import { Bell, Search, User, LogOut } from 'lucide-react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img 
                src="https://s3-alpha-sig.figma.com/img/f940/7e1a/d9b9292cf83c6b1e07f9bd2cdbd77b6c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D86n9kRn~z0XmvoKeD-YTvs~AZ~8CsJxYF98Lmc7l5e884eBF~laED~lHSKSih3Yva2bswepsyj~ro3nhGthRp~3DuXPILZP3U74FcA2oZjRjLsMm3KmV7wIWtvtxssH-VUapSLj81opv5b~cIJyJESEqThl0WF-veoW-ioiJA9sucYsVDKIhTv3KraYjzWw0o4s49bcVdVoHbOvj5guQt7xXhzwlRS~QSWG~DhafcLNjerRecjPpaKqXogDs3j90GUpXRrGCYb7Ybl19w6sqJyHgkw3d7ycVXmhikJMmzTkdbvHiMDBD8MwKxWvcPogiltz5jvqf4YKPZElLv36uA__"
                alt="Logo" 
                className="w-8 h-8 rounded-full"
              />
              <span className="font-bold text-blue-900 dark:text-blue-100">IslamicEdu</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-blue-900 dark:text-blue-100 hover:text-blue-700 dark:hover:text-blue-300">Dashboard</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300">My Courses</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300">Schedule</a>
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
            <div className="flex items-center gap-3 ml-4 cursor-pointer group relative">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=faces"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Ahmed Khan</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Student</p>
              </div>
              <div className="hidden group-hover:block absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700">
                  <User size={16} />
                  Profile
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700">
                  <LogOut size={16} />
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;