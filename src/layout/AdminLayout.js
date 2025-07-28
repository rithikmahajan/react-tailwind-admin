import React, { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

/**
 * AdminLayout Component
 * 
 * Main layout wrapper for the admin dashboard providing:
 * - Fixed header navigation
 * - Collapsible sidebar
 * - Responsive main content area
 * - Consistent styling and spacing
 * 
 * Performance Optimizations:
 * - useCallback for sidebar toggle to prevent unnecessary re-renders
 * - Memoized child components (Header, Sidebar)
 * - Proper state management for sidebar state
 */
const AdminLayout = React.memo(() => {
  // State for sidebar open/close - only affects layout, not content
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // State for sidebar visibility - hide/show sidebar completely
  const [sidebarHidden, setSidebarHidden] = useState(false);

  // Memoized callback to prevent unnecessary re-renders of child components
  const handleSidebarToggle = useCallback((open) => {
    setSidebarOpen(open);
  }, []);

  // Memoized callback to toggle sidebar visibility
  const handleSidebarVisibilityToggle = useCallback(() => {
    setSidebarHidden(prev => !prev);
    // Close mobile sidebar when hiding sidebar
    if (!sidebarHidden) {
      setSidebarOpen(false);
    }
  }, [sidebarHidden]);

  return (
    <div className="flex h-screen bg-white">
      {/* Fixed Header - stays at top of viewport */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Header 
          setSidebarOpen={handleSidebarToggle} 
          onToggleSidebarVisibility={handleSidebarVisibilityToggle}
          sidebarHidden={sidebarHidden}
        />
      </div>
      
      {/* Sidebar - toggleable navigation */}
      {!sidebarHidden && (
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={handleSidebarToggle} 
        />
      )}
      
      {/* Main content area */}
      <div className={`flex-1 flex flex-col pt-[60px] transition-all duration-300 ease-in-out ${
        sidebarHidden 
          ? 'ml-0' 
          : 'lg:ml-80'
      }`}>
        {/* Main content with proper spacing and overflow handling */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          {/* Content container with shadow and responsive design */}
          <div className={`mx-auto bg-white rounded-xl shadow-[0px_4px_120px_2px_rgba(0,0,0,0.25)] mt-[40px] mb-8 min-h-[calc(100vh-140px)] transition-all duration-300 ${
            sidebarHidden 
              ? 'max-w-[calc(100vw-80px)]' 
              : 'max-w-[1820px]'
          }`}>
            <div className="p-6">
              {/* React Router outlet for nested routes */}
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
});

export default AdminLayout;
