import React from 'react';
import { Users, Package, ShoppingCart, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

const Dashboard = () => {
  // Sample data for stats cards
  const stats = [
    {
      title: 'Total Users',
      value: '12,345',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Total Products',
      value: '1,234',
      change: '+8%',
      changeType: 'increase',
      icon: Package,
      color: 'bg-green-500'
    },
    {
      title: 'Total Orders',
      value: '8,765',
      change: '-3%',
      changeType: 'decrease',
      icon: ShoppingCart,
      color: 'bg-yellow-500'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+15%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'bg-purple-500'
    }
  ];

  // Sample data for recent activities
  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'Created new order', time: '2 minutes ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '5 minutes ago' },
    { id: 3, user: 'Mike Johnson', action: 'Added new product', time: '10 minutes ago' },
    { id: 4, user: 'Sarah Wilson', action: 'Completed order #1234', time: '15 minutes ago' },
    { id: 5, user: 'Alex Brown', action: 'Left a review', time: '20 minutes ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
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
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.user}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {activity.action}
                    </p>
                  </div>
                  <div className="text-xs text-gray-400">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Users className="h-8 w-8 text-blue-500 mb-2" />
                <span className="text-sm font-medium text-gray-900">Add User</span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Package className="h-8 w-8 text-green-500 mb-2" />
                <span className="text-sm font-medium text-gray-900">Add Product</span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <ShoppingCart className="h-8 w-8 text-yellow-500 mb-2" />
                <span className="text-sm font-medium text-gray-900">View Orders</span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <DollarSign className="h-8 w-8 text-purple-500 mb-2" />
                <span className="text-sm font-medium text-gray-900">Reports</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
