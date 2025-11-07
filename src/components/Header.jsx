import React from 'react';
import { BookOpen, Settings, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-600 text-white shadow">
            <BookOpen size={20} />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Library Manager</h1>
            <p className="text-xs sm:text-sm text-gray-500">Manage books, members, and borrowing with ease</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition">
            <Settings size={18} />
            Settings
          </button>
          <button className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
