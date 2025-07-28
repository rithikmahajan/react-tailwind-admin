import React from 'react';
import { Search, MessageSquare, Bell, User } from 'lucide-react';

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="bg-white h-[60px] w-full max-w-[1920px] relative">
      <div className="flex items-center justify-between h-full px-16">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-black tracking-wide">
            YORAA
          </div>
        </div>

        {/* Center - Search Form */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="relative w-40">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-[26px] w-[26px] text-gray-400" />
            </div>
            <input
              type="text"
              placeholder=""
              className="block w-full pl-12 pr-3 py-3 border border-gray-300 rounded-3xl leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Right side - Action Icons */}
        <div className="flex items-center space-x-4">
          {/* Favourites/Chat Icon - Rounded button */}
          <button className="w-[33px] h-[33px] bg-gray-100 hover:bg-gray-200 rounded-[30px] flex items-center justify-center transition-colors duration-200">
            <MessageSquare className="w-4 h-4 text-gray-600" />
          </button>

          {/* SMS/Message Icon */}
          <button className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <MessageSquare className="w-full h-full" />
          </button>

          {/* Profile/User Icon */}
          <button className="w-[21.85px] h-[22px] text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <User className="w-full h-full" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
