import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Package, 
  MapPin, 
  FileText, 
  ChevronDown,
  Copy,
  Download,
  Save
} from 'lucide-react';

const ItemDetails = () => {
  const [status, setStatus] = useState('Pending');
  const [notes, setNotes] = useState('');

  // Order data based on Figma design
  const orderData = {
    orderId: 'Orders ID: 6576',
    orderNumber: '12345678922O',
    dateRange: 'Feb 16,2022 - Feb 20,2022',
    status: 'Pending',
    customer: {
      name: 'Shrish Singh',
      email: 'shrish.singh@gmail.com',
      phone: '+91 904 1212'
    },
    orderInfo: {
      shipping: 'Next express',
      payment: 'Paypal',
      status: 'Pending'
    },
    deliverTo: {
      address: 'Jadavpur Soham Colony, Palam Vihar, Gurgaon, Haryana'
    },
    documentsSubmitted: {
      document: 'Aadhar card'
    },
    paymentInfo: {
      masterCard: '**** **** **** 6557',
      businessName: 'Shrish Singh',
      phone: '+91 904 231 1212'
    },
    orderItems: [
      {
        id: 1,
        image: '/api/placeholder/80/80',
        orderId: '12345678922O',
        date: '27 nov 2025',
        customerName: 'pearl',
        size: 'stock',
        quantity: 2025,
        sku: 2025,
        barcodeNo: 2025,
        price: 4566,
        salePrice: 4566
      },
      {
        id: 2,
        image: '/api/placeholder/80/80',
        orderId: '12345678922O',
        date: '27 nov 2025',
        customerName: 'pearl',
        size: 'stock',
        quantity: 2025,
        sku: 2025,
        barcodeNo: 2025,
        price: 4566,
        salePrice: 4566
      }
    ],
    totals: {
      subTotal: 2025,
      shippingRate: 202,
      promo: 2025,
      points: 2025,
      total: 2025
    }
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div className="space-y-6 bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">order details</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">{orderData.orderId}</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-semibold rounded-full">
              {orderData.status}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">{orderData.dateRange}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <select 
                value={status}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option>Change Status</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
              <ChevronDown className="h-4 w-4 absolute right-2 top-3 text-gray-400" />
            </div>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Copy className="h-4 w-4 text-gray-400" />
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Customer */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-gray-400">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Customer</h3>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Full Name: {orderData.customer.name}</p>
            <p className="text-sm text-gray-600">Email: {orderData.customer.email}</p>
            <p className="text-sm text-gray-600">Phone: {orderData.customer.phone}</p>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600">
            View profile
          </button>
        </div>

        {/* Order Info */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-gray-400">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Package className="h-5 w-5 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Order Info</h3>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Shipping: {orderData.orderInfo.shipping}</p>
            <p className="text-sm text-gray-600">Payment Method: {orderData.orderInfo.payment}</p>
            <p className="text-sm text-gray-600">Status: {orderData.orderInfo.status}</p>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600">
            Download info
          </button>
        </div>

        {/* Deliver to */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-gray-400">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              <MapPin className="h-5 w-5 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Deliver to</h3>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Address: {orderData.deliverTo.address}</p>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600">
            View profile
          </button>
        </div>

        {/* Documents Submitted */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-gray-400">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              <FileText className="h-5 w-5 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">documents submitted</h3>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Document name: {orderData.documentsSubmitted.document}</p>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600">
            View documents
          </button>
        </div>
      </div>

      {/* Payment Info and Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Info */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">payment info</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-700">Master Card {orderData.paymentInfo.masterCard}</span>
            </div>
            <p className="text-gray-600">Business name: {orderData.paymentInfo.businessName}</p>
            <p className="text-gray-600">Phone: {orderData.paymentInfo.phone}</p>
          </div>
        </div>

        {/* Note */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Note</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Type some notes..."
            className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>
      </div>

      {/* Order Table */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">order</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Copy className="h-4 w-4 text-gray-400" />
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 text-sm font-semibold text-gray-700">Image</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">order id</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">date</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">customer name</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">size</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">quantity</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">SKU</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">barcode no.</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">Price</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">sale price</th>
              </tr>
            </thead>
            <tbody>
              {orderData.orderItems.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="w-10 h-10 bg-blue-300 rounded"></div>
                    </div>
                  </td>
                  <td className="py-4 text-sm font-medium text-gray-900">{item.orderId}</td>
                  <td className="py-4 text-sm text-gray-700">{item.date}</td>
                  <td className="py-4 text-sm text-gray-700">{item.customerName}</td>
                  <td className="py-4 text-sm text-gray-700">{item.size}</td>
                  <td className="py-4 text-sm font-semibold text-gray-900">{item.quantity}</td>
                  <td className="py-4 text-sm text-gray-700">{item.sku}</td>
                  <td className="py-4 text-sm text-gray-700">{item.barcodeNo}</td>
                  <td className="py-4 text-sm text-gray-700">{item.price}</td>
                  <td className="py-4 text-sm text-gray-700">{item.salePrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Order Totals */}
        <div className="mt-8 flex justify-end">
          <div className="w-full max-w-sm space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Sub Total</span>
              <span className="font-semibold text-gray-900">{orderData.totals.subTotal}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Shipping Rate</span>
              <span className="font-semibold text-gray-900">{orderData.totals.shippingRate}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Promo</span>
              <span className="font-semibold text-gray-900">{orderData.totals.promo}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Points</span>
              <span className="font-semibold text-gray-900">{orderData.totals.points}</span>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">{orderData.totals.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
