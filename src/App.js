import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';

// Lazy load components for better performance and code splitting
// This reduces the initial bundle size and improves loading times
const Dashboard = React.lazy(() => import('./pages/Dashboard_optimized'));
const Users = React.lazy(() => import('./pages/Users'));
const Products = React.lazy(() => import('./pages/Products'));
const Orders = React.lazy(() => import('./pages/Orders'));
const ReturnOrders = React.lazy(() => import('./pages/ReturnOrders'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const Filters = React.lazy(() => import('./pages/Filters'));
const ItemDetails = React.lazy(() => import('./pages/ItemDetails'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Messages = React.lazy(() => import('./pages/Messages'));
const Settings = React.lazy(() => import('./pages/Settings'));
const UploadCategory = React.lazy(() => import('./pages/UploadCategory'));
const SubCategory = React.lazy(() => import('./pages/SubCategory'));
const ManageItems = React.lazy(() => import('./pages/ManageItems'));
const SingleProductUpload = React.lazy(() => import('./pages/SingleProductUpload'));
const JoinUsControl = React.lazy(() => import('./pages/JoinUsControl'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    <span className="ml-3 text-lg text-gray-600">Loading...</span>
  </div>
);

/**
 * Main App Component
 * 
 * Features:
 * - Router configuration with lazy loading for optimal performance
 * - Suspense boundaries for smooth loading experiences
 * - Nested routing with AdminLayout wrapper
 * 
 * Performance Optimizations:
 * - Code splitting with React.lazy reduces initial bundle size
 * - Suspense provides loading states during chunk loading
 * - Each page component loads only when needed
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Admin layout wrapper with nested routes */}
        <Route path="/" element={<AdminLayout />}>
          {/* Wrap all lazy-loaded components in Suspense */}
          <Route index element={
            <Suspense fallback={<LoadingSpinner />}>
              <Dashboard />
            </Suspense>
          } />
          <Route path="users" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Users />
            </Suspense>
          } />
          <Route path="products" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Products />
            </Suspense>
          } />
          <Route path="orders" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Orders />
            </Suspense>
          } />
          <Route path="return-orders" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ReturnOrders />
            </Suspense>
          } />
          <Route path="analytics" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Analytics />
            </Suspense>
          } />
          <Route path="filters" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Filters />
            </Suspense>
          } />
          <Route path="item-details" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ItemDetails />
            </Suspense>
          } />
          <Route path="profile" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Profile />
            </Suspense>
          } />
          <Route path="messages" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Messages />
            </Suspense>
          } />
          <Route path="settings" element={
            <Suspense fallback={<LoadingSpinner />}>
              <Settings />
            </Suspense>
          } />
          <Route path="upload-category" element={
            <Suspense fallback={<LoadingSpinner />}>
              <UploadCategory />
            </Suspense>
          } />
          <Route path="subcategory" element={
            <Suspense fallback={<LoadingSpinner />}>
              <SubCategory />
            </Suspense>
          } />
          <Route path="manage-items" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ManageItems />
            </Suspense>
          } />
          <Route path="single-product-upload" element={
            <Suspense fallback={<LoadingSpinner />}>
              <SingleProductUpload />
            </Suspense>
          } />
          <Route path="join-control" element={
            <Suspense fallback={<LoadingSpinner />}>
              <JoinUsControl />
            </Suspense>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
