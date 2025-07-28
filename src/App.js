import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Orders from './pages/Orders';
import ReturnOrders from './pages/ReturnOrders';
import Analytics from './pages/Analytics';
import Filters from './pages/Filters';
import ItemDetails from './pages/ItemDetails';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import UploadCategory from './pages/UploadCategory';
import SubCategory from './pages/SubCategory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="return-orders" element={<ReturnOrders />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="filters" element={<Filters />} />
          <Route path="item-details" element={<ItemDetails />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
          <Route path="upload-category" element={<UploadCategory />} />
          <Route path="subcategory" element={<SubCategory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
