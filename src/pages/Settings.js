import React from 'react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Configure system settings and preferences</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2">System Settings</h3>
        <p className="text-gray-600">This page will contain various system configuration options, general settings, and admin controls.</p>
      </div>
    </div>
  );
};

export default Settings;
