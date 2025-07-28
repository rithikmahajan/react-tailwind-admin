import React from 'react';

const Orders = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-600">Manage customer orders and transactions</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Orders Page</h3>
        <p className="text-gray-600">This page will show all customer orders, order details, and order management features.</p>
      </div>
    </div>
  );
};

export default Orders;
