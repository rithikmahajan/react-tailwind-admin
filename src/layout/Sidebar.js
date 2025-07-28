import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  Package,
  ShoppingCart,
  BarChart,
  Settings,
  User,
  Mail,
  X
} from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Users', icon: Users, path: '/users' },
    { name: 'Products', icon: Package, path: '/products' },
    { name: 'Orders', icon: ShoppingCart, path: '/orders' },
    { name: 'Analytics', icon: BarChart, path: '/analytics' },
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'Messages', icon: Mail, path: '/messages' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-600 opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* App uploading area */}
        <div className="p-4 border-b bg-gray-50">
          <h3 className="text-lg font-bold text-gray-800 mb-3">App uploading area</h3>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600">Category</p>
            <p className="text-sm font-medium text-gray-600">Subcategory</p>
            <p className="text-sm font-medium text-gray-600">Items</p>
            <p className="text-sm font-medium text-gray-600">Item details</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 ${
                  isActive ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={20} className="mr-3" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User info at bottom */}
        <div className="absolute bottom-0 w-full p-4 border-t bg-gray-50">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
