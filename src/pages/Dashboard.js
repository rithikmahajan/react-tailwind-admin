import React, { useState } from 'react';
import { 
  Users, Package, ShoppingCart, DollarSign, TrendingUp, TrendingDown, 
  Calendar, Search, Plus, ChevronDown, BarChart3, Activity, 
  MessageSquare, FileText, Settings, Sync, CheckCircle, XCircle
} from 'lucide-react';

const Dashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7 Days');

  // Dashboard stats
  const stats = [
    {
      title: 'Total User',
      value: '40,689',
      change: '+8.5%',
      changeType: 'increase',
      period: 'Up from yesterday',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Order',
      value: '10293',
      change: '+1.3%',
      changeType: 'increase',
      period: 'Up from past week',
      icon: ShoppingCart,
      color: 'bg-green-500'
    },
    {
      title: 'Total Sales',
      value: '$89,000',
      change: '-4.3%',
      changeType: 'decrease',
      period: 'Down from yesterday',
      icon: DollarSign,
      color: 'bg-yellow-500'
    },
    {
      title: 'Total Pending',
      value: '2040',
      change: '+1.8%',
      changeType: 'increase',
      period: 'Up from yesterday',
      icon: Package,
      color: 'bg-purple-500'
    },
    {
      title: 'sync products',
      value: '10293',
      change: '+1.3%',
      changeType: 'increase',
      period: 'Up from past week',
      icon: Sync,
      color: 'bg-indigo-500'
    }
  ];

  // SMS Stats
  const smsStats = [
    { title: 'SMS Sent', value: '50,000' },
    { title: 'Delivery Report', value: '35%' },
    { title: 'Promotional SMS', value: '₹ 3345' },
    { title: 'Transactional SMS', value: '₹ 778' }
  ];

  // Analytics data
  const analyticsData = [
    { title: 'Visitor', value: '395', growth: '348.9', growthType: 'up' },
    { title: 'New Visitors', value: '932', growth: '565.7', growthType: 'up' },
    { title: 'Average engagement time', value: '1m 50', growth: '250.1', growthType: 'down' },
    { title: 'Total Visitors', value: '150K', growth: null, growthType: null }
  ];

  // Product sync data
  const productSyncData = [
    { 
      image: '/api/placeholder/200/200',
      name: 'item stock',
      price: '2025',
      sku: '2025',
      barcode: '2025',
      synced: 'Yes',
      marketplace: 'amazon',
      status: 'connected',
      error: null,
      action: 'sync now'
    },
    {
      image: '/api/placeholder/200/200', 
      name: 'item stock',
      price: '2025',
      sku: '2025',
      barcode: '2025',
      synced: 'no',
      marketplace: 'flipkart',
      status: 'not connected',
      error: 'sync',
      action: 'sync now'
    },
    {
      image: '/api/placeholder/200/200',
      name: 'item stock', 
      price: '2025',
      sku: '2025',
      barcode: '2025',
      synced: 'sync',
      marketplace: 'ajio',
      status: 'not connected',
      error: 'sync',
      action: 'sync now'
    }
  ];

  // Marketplace data
  const marketplaces = [
    { name: 'amazon', sellerId: '1234', status: 'connected', lastSync: '02.03pm' },
    { name: 'flipkart', sellerId: '5678', status: 'not connected', lastSync: null },
    { name: 'ajio', sellerId: '4587', status: 'connected', lastSync: null },
    { name: 'myntra', sellerId: null, status: 'not connected', lastSync: null },
    { name: 'nykaa', sellerId: null, status: 'not connected', lastSync: null }
  ];

  // Sync logs
  const syncLogs = [
    { date: 'Nov 11,2025', operation: 'product sync', marketplace: 'amazon', status: 'success', error: null },
    { date: 'Nov 11,2025', operation: 'inventory sync', marketplace: 'flipkart', status: 'fail', error: 'connection timeout' },
    { date: 'Nov 11,2025', operation: 'success', marketplace: 'ajio', status: 'fail', error: 'invalid credentials' }
  ];

  return (
    <div className="space-y-8 bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard/ analytics</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>Nov 11,2025 - Nov 27 2025</span>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Campaign</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 opacity-70">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1 mb-2">{stat.value}</p>
                <div className="flex items-center">
                  {stat.changeType === 'increase' ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">{stat.period}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SMS Stats */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {smsStats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sales Details Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Sales Details</h3>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>October</option>
            </select>
          </div>
        </div>
        
        {/* Chart placeholder */}
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
          <BarChart3 className="h-16 w-16 text-gray-400" />
        </div>

        {/* Analytics stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {analyticsData.map((item, index) => (
            <div key={index}>
              <p className="text-sm text-gray-500 mb-1">{item.title}</p>
              <p className="text-xl font-semibold text-gray-900 mb-1">{item.value}</p>
              {item.growth && (
                <div className="flex items-center">
                  <span className="text-sm text-green-500">{item.growth}</span>
                  {item.growthType === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-green-500 ml-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500 ml-1" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Views Report */}
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-gray-900">Views Report</h4>
          <div className="flex space-x-2">
            {['07 Days', '30 Days', '6 Months', '7 Days'].map((period) => (
              <button
                key={period}
                className={`px-4 py-2 rounded text-xs font-bold ${
                  selectedTimeRange === period
                    ? 'bg-white border-2 border-gray-400 text-gray-900'
                    : 'bg-white text-gray-500'
                }`}
                onClick={() => setSelectedTimeRange(period)}
              >
                {period}
              </button>
            ))}
            <button className="px-4 py-2 rounded text-xs font-bold bg-white border border-gray-300 text-gray-900">
              Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* Product Sync Manager */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">product sync manager</h2>
        
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Product table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Image</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">product name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Price</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">SKU</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">barcode no.</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">synced</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">marketplace</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">error</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">action</th>
              </tr>
            </thead>
            <tbody>
              {productSyncData.map((product, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                  </td>
                  <td className="py-4 px-4 font-medium text-gray-900">{product.name}</td>
                  <td className="py-4 px-4 text-gray-700">{product.price}</td>
                  <td className="py-4 px-4 text-gray-700">{product.sku}</td>
                  <td className="py-4 px-4 text-gray-700">{product.barcode}</td>
                  <td className="py-4 px-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      product.synced === 'Yes' ? 'bg-green-500 text-white' : 
                      product.synced === 'no' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      {product.synced}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-700">{product.marketplace}</td>
                  <td className="py-4 px-4">
                    {product.error && (
                      <span className="px-4 py-2 rounded-full text-sm font-semibold bg-red-500 text-white">
                        {product.error}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
                      {product.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sync Settings */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">orders from marketplace</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-700">global inventory sync</span>
                <span className="text-lg text-gray-700">on</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-700">sync frequency</span>
                <span className="text-lg text-gray-700">enabled</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-700">per marketplace rules</span>
                <span className="text-lg text-gray-700">6 hours</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">out series settings</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-700">global sync</span>
                <span className="text-lg text-gray-700">on</span>
                <span className="text-lg text-gray-700">delivered</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg text-gray-700">additional sync</span>
                <span className="text-lg text-gray-700">off</span>
                <span className="text-lg text-gray-700">failed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Marketplaces */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect marketplaces</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Available marketplace</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center font-bold">
                <span>marketplace</span>
                <span>actions</span>
              </div>
              {marketplaces.map((marketplace, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-lg text-gray-700">{marketplace.name}</span>
                  <button className={`px-6 py-2 rounded-full text-sm font-semibold ${
                    marketplace.status === 'connected' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}>
                    {marketplace.status}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">connected accounts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center font-bold">
                <span>seller id</span>
                <span>last sync</span>
              </div>
              {marketplaces.map((marketplace, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{marketplace.sellerId || '-'}</span>
                  <span className="text-sm text-gray-700">{marketplace.lastSync || '-'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sync Logs */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">sync logs</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-bold text-gray-700">date</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">operation</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">market place</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">status</th>
                <th className="text-left py-3 px-4 font-bold text-gray-700">error message</th>
              </tr>
            </thead>
            <tbody>
              {syncLogs.map((log, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-4 text-sm font-bold text-gray-900">{log.date}</td>
                  <td className="py-4 px-4 text-sm font-bold text-gray-900">{log.operation}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">{log.marketplace}</td>
                  <td className="py-4 px-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      log.status === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {log.error && (
                      <span className="px-4 py-2 rounded-full text-sm font-semibold bg-red-500 text-white">
                        {log.error}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
