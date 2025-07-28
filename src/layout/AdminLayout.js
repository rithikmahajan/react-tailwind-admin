import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Header setSidebarOpen={setSidebarOpen} />
      </div>
      
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col pt-[60px]">
        {/* Main content area with proper spacing */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <div className="max-w-[1820px] mx-auto bg-white rounded-xl shadow-[0px_4px_120px_2px_rgba(0,0,0,0.25)] mt-[40px] mb-8 min-h-[calc(100vh-140px)]">
            <div className="p-6">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
