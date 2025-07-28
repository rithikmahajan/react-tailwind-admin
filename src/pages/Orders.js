import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  ChevronDown, 
  Eye, 
  Edit, 
  Download, 
  MoreHorizontal,
  X
} from 'lucide-react';

const Orders = () => {
  const [selectedDate, setSelectedDate] = useState('06/05/1999');
  const [filterBy, setFilterBy] = useState('All');
  const [orderType, setOrderType] = useState('All');
  const [orderStatus, setOrderStatus] = useState('All');
  const [showResetFilter, setShowResetFilter] = useState(false);

  // Sample order data based on Figma design
  const orders = [
    {
      orderId: '12345670922O',
      paymentStatus: 'Pending',
      image: '/api/placeholder/60/60',
      productName: 'T shirt',
      name: 'Tarnnish',
      date: '13 aug 2024',
      hsn: '406000',
      size: {
        small: 5,
        medium: 10,
        large: 115
      },
      quantity: 130,
      price: 4566,
      salePrice: 4566,
      sku: 'bkhvhm0251',
      barcodeNo: '406000000000000',
      status: 'accepted',
      slotVendor: 'slot vendor',
      courierAlloted: 'YES',
      delivered: 'NO',
      actions: 'On way'
    },
    {
      orderId: '12345670922O',
      paymentStatus: 'Paid',
      image: '/api/placeholder/60/60',
      productName: 'T shirt',
      name: 'Tarnnish',
      date: '13 aug 2024',
      hsn: '406000',
      size: {
        small: 5,
        medium: 10,
        large: 115
      },
      quantity: 130,
      price: 4566,
      salePrice: 4566,
      sku: 'bkhvhm0251',
      barcodeNo: '406000000000000',
      status: 'processing',
      slotVendor: 'slot vendor',
      courierAlloted: 'YES',
      delivered: 'NO',
      actions: 'On way'
    }
  ];

  const handleResetFilter = () => {
    setFilterBy('All');
    setOrderType('All');
    setOrderStatus('All');
    setShowResetFilter(false);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-green-500 text-white';
      case 'pending':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getCourierStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'yes':
        return 'bg-green-500 text-white';
      case 'no':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6 bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">orders list</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">{selectedDate}</span>
            <span className="text-gray-600">{selectedDate}</span>
            <Calendar className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-gray-700">Filter By</span>
            </div>

            {/* Date Filter */}
            <div className="relative">
              <select 
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Date</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>Custom Range</option>
              </select>
              <ChevronDown className="h-4 w-4 absolute right-2 top-3 text-gray-400" />
            </div>

            {/* Order Type Filter */}
            <div className="relative">
              <select 
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Order Type</option>
                <option>Online</option>
                <option>Offline</option>
                <option>Bulk</option>
              </select>
              <ChevronDown className="h-4 w-4 absolute right-2 top-3 text-gray-400" />
            </div>

            {/* Order Status Filter */}
            <div className="relative">
              <select 
                value={orderStatus}
                onChange={(e) => setOrderStatus(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Order Status</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Accepted</option>
                <option>Rejected</option>
                <option>Delivered</option>
              </select>
              <ChevronDown className="h-4 w-4 absolute right-2 top-3 text-gray-400" />
            </div>
          </div>

          {/* Reset Filter */}
          <button 
            onClick={handleResetFilter}
            className="flex items-center space-x-2 text-red-500 hover:text-red-700"
          >
            <X className="h-4 w-4" />
            <span>Reset Filter</span>
          </button>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 text-sm font-semibold text-gray-700">order id</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">Image</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">Product Name</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">name</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">date</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">HSN</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">size</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">quantity</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">Price</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">Sale Price</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">SKU</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">barcode no.</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">status</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">slot vendor</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">courier alloted</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">delivered</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  {/* Order ID with Payment Status */}
                  <td className="py-4">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-gray-900">{order.orderId}</div>
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(order.paymentStatus)}`}>
                        {order.paymentStatus}
                      </span>
                    </div>
                  </td>

                  {/* Product Image */}
                  <td className="py-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-300 rounded"></div>
                    </div>
                  </td>

                  {/* Product Name */}
                  <td className="py-4">
                    <span className="text-sm font-medium text-gray-900">{order.productName}</span>
                  </td>

                  {/* Name */}
                  <td className="py-4">
                    <span className="text-sm text-gray-700">{order.name}</span>
                  </td>

                  {/* Date */}
                  <td className="py-4">
                    <span className="text-sm text-gray-700">{order.date}</span>
                  </td>

                  {/* HSN */}
                  <td className="py-4">
                    <span className="text-sm text-gray-700">{order.hsn}</span>
                  </td>

                  {/* Size */}
                  <td className="py-4">
                    <div className="space-y-1">
                      <div className="text-xs text-gray-600">small: {order.size.small}</div>
                      <div className="text-xs text-gray-600">medium: {order.size.medium}</div>
                      <div className="text-xs text-gray-600">large: {order.size.large}</div>
                    </div>
                  </td>

                  {/* Quantity */}
                  <td className="py-4">
                    <span className="text-sm font-semibold text-gray-900">{order.quantity}</span>
                  </td>

                  {/* Price */}
                  <td className="py-4">
                    <span className="text-sm text-gray-700">₹{order.price}</span>
                  </td>

                  {/* Sale Price */}
                  <td className="py-4">
                    <span className="text-sm text-gray-700">₹{order.salePrice}</span>
                  </td>

                  {/* SKU */}
                  <td className="py-4">
                    <span className="text-sm text-gray-700">{order.sku}</span>
                  </td>

                  {/* Barcode */}
                  <td className="py-4">
                    <span className="text-sm text-gray-700">{order.barcodeNo}</span>
                  </td>

                  {/* Status */}
                  <td className="py-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>

                  {/* Slot Vendor */}
                  <td className="py-4">
                    <span className="text-sm text-gray-700">{order.slotVendor}</span>
                  </td>

                  {/* Courier Alloted */}
                  <td className="py-4">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getCourierStatusColor(order.courierAlloted)}`}>
                      {order.courierAlloted}
                    </span>
                  </td>

                  {/* Delivered */}
                  <td className="py-4">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getCourierStatusColor(order.delivered)}`}>
                      {order.delivered}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-blue-600 font-medium">{order.actions}</span>
                      <div className="flex items-center space-x-1">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Eye className="h-4 w-4 text-gray-400" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Edit className="h-4 w-4 text-gray-400" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Download className="h-4 w-4 text-gray-400" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreHorizontal className="h-4 w-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rejected Status */}
        <div className="mt-6 flex justify-center">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-800 text-sm font-semibold rounded-lg">
            Rejected
          </span>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Deal on 10/JUN/2020
        </div>
      </div>
    </div>
  );
};

export default Orders;
