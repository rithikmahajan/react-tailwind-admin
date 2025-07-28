import React, { useState } from 'react';
import { Flag, MessageCircle } from 'lucide-react';

const BlockUser = () => {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Cora Cayetto',
      channel: 'WhatsApp',
      userId: '20231042366',
      phoneNumber: '+629797624012',
      address: '5567 Richmond View Suite 961 Burnaby, 93546-8616',
      isBlocked: false
    }
  ]);

  const handleBlockUser = (userId) => {
    setUsers(prev => 
      prev.map(user => 
        user.id === userId 
          ? { ...user, isBlocked: !user.isBlocked }
          : user
      )
    );
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      alert('Message sent successfully!');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            block user
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-7xl mx-auto">
          
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">block user</h1>
            <p className="text-lg text-gray-700">bioack user system</p>
          </div>

          {/* Users Table */}
          <div className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-medium text-gray-700 text-base">name</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-700 text-base">Channel</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-700 text-base">ID</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-700 text-base">Phone number</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-700 text-base">Address</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-700 text-base">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 text-gray-900 font-medium">{user.name}</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                          {user.channel}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-900">{user.userId}</td>
                      <td className="py-4 px-4 text-gray-900">{user.phoneNumber}</td>
                      <td className="py-4 px-4 text-gray-700 max-w-xs">
                        <div className="truncate" title={user.address}>
                          {user.address}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          {/* Flag Button */}
                          <button className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
                            <Flag className="h-4 w-4 text-blue-600" />
                          </button>
                          
                          {/* Upgrade Button */}
                          <button className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors">
                            upgrade
                          </button>
                          
                          {/* Block/Unblock Button */}
                          <button
                            onClick={() => handleBlockUser(user.id)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                              user.isBlocked
                                ? 'bg-green-600 text-white hover:bg-green-700'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                          >
                            {user.isBlocked ? 'Unblock' : 'Block Now'}
                          </button>
                          
                          {/* Message Limit Button */}
                          <button className="px-3 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                            message limit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Write a Message Section */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">write a message</h2>
            
            <div className="space-y-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
              
              <div className="flex justify-end">
                <button
                  onClick={handleSendMessage}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockUser;
