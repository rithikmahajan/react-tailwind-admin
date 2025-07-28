import React, { useState } from 'react';
import { Calendar, ChevronDown, Edit, Trash2, Check } from 'lucide-react';

const PromoCodeManagement = () => {
  const [codeStatus, setCodeStatus] = useState('On');
  const [discountValue, setDiscountValue] = useState('');
  const [discountType, setDiscountType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minimumOrderValue, setMinimumOrderValue] = useState('');
  const [maxUsers, setMaxUsers] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [item, setItem] = useState('');
  const [sale, setSale] = useState('yes');

  // Sample existing promo codes
  const [promoCodes, setPromoCodes] = useState([
    {
      id: 1,
      code: 'promo 1',
      discount: '30% OFF',
      status: 'COUPONS',
      isActive: true
    }
  ]);

  const handleCreatePromoCode = () => {
    if (discountValue && discountType) {
      const newPromoCode = {
        id: Date.now(),
        code: `PROMO${promoCodes.length + 1}`,
        discount: `${discountValue}${discountType === 'percentage' ? '%' : '$'} OFF`,
        status: 'COUPONS',
        isActive: true
      };
      setPromoCodes([...promoCodes, newPromoCode]);
      
      // Reset form
      setDiscountValue('');
      setDiscountType('');
      setStartDate('');
      setEndDate('');
      setMinimumOrderValue('');
      setMaxUsers('');
      setCategory('');
      setSubcategory('');
      setItem('');
    }
  };

  const deletePromoCode = (id) => {
    setPromoCodes(promoCodes.filter(code => code.id !== id));
  };

  const editPromoCode = (id) => {
    // Handle edit functionality
    console.log('Edit promo code:', id);
  };

  const applyPromoCode = (id) => {
    // Handle apply functionality
    console.log('Apply promo code:', id);
  };

  return (
    <div className="space-y-8 bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Promo code management</h1>
      </div>

      {/* Main Form */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* Code Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Code status</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCodeStatus('On')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                    codeStatus === 'On' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  On
                </button>
                <button
                  onClick={() => setCodeStatus('Off')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                    codeStatus === 'Off' 
                      ? 'bg-gray-500 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Off
                </button>
              </div>
            </div>

            {/* Discount Value */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount value</label>
              <input
                type="text"
                value={discountValue}
                onChange={(e) => setDiscountValue(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter discount value"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start date 📅</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Minimum Order Value */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">minimum order value</label>
              <input
                type="text"
                value={minimumOrderValue}
                onChange={(e) => setMinimumOrderValue(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter minimum order value"
              />
            </div>

            {/* Applicable Categories */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">applicable on</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">category</label>
                  <div className="relative">
                    <select 
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                    >
                      <option value="">Select category</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="books">Books</option>
                      <option value="home">Home & Garden</option>
                    </select>
                    <ChevronDown className="h-4 w-4 absolute right-2 top-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">subcategory</label>
                  <div className="relative">
                    <select 
                      value={subcategory}
                      onChange={(e) => setSubcategory(e.target.value)}
                      className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                    >
                      <option value="">Select subcategory</option>
                      <option value="tshirts">T-shirts</option>
                      <option value="pants">Pants</option>
                      <option value="shoes">Shoes</option>
                      <option value="accessories">Accessories</option>
                    </select>
                    <ChevronDown className="h-4 w-4 absolute right-2 top-4 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">item</label>
                  <div className="relative">
                    <select 
                      value={item}
                      onChange={(e) => setItem(e.target.value)}
                      className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                    >
                      <option value="">Select item</option>
                      <option value="basic-tshirt">Basic T-shirt</option>
                      <option value="premium-tshirt">Premium T-shirt</option>
                      <option value="graphic-tshirt">Graphic T-shirt</option>
                    </select>
                    <ChevronDown className="h-4 w-4 absolute right-2 top-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">sale</label>
                  <div className="relative">
                    <select 
                      value={sale}
                      onChange={(e) => setSale(e.target.value)}
                      className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                    >
                      <option value="yes">yes ✓</option>
                      <option value="no">No</option>
                    </select>
                    <ChevronDown className="h-4 w-4 absolute right-2 top-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Discount Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount Type</label>
              <div className="relative">
                <select 
                  value={discountType}
                  onChange={(e) => setDiscountType(e.target.value)}
                  className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                >
                  <option value="">Select discount type</option>
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed Amount ($)</option>
                  <option value="bogo">Buy One Get One</option>
                  <option value="shipping">Free Shipping</option>
                </select>
                <ChevronDown className="h-4 w-4 absolute right-2 top-4 text-gray-400" />
              </div>
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End date 📅</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Max Users */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">max users</label>
              <input
                type="text"
                value={maxUsers}
                onChange={(e) => setMaxUsers(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter maximum users"
              />
            </div>
          </div>
        </div>

        {/* Create Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleCreatePromoCode}
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Create promo code
          </button>
        </div>
      </div>

      {/* Existing Promo Codes */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Existing promo codes</h2>
        
        {promoCodes.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No promo found</p>
        ) : (
          <div className="space-y-4">
            {promoCodes.map((promoCode) => (
              <div key={promoCode.id} className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{promoCode.code}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-gray-900">{promoCode.discount}</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {promoCode.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => editPromoCode(promoCode.id)}
                      className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => deletePromoCode(promoCode.id)}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => applyPromoCode(promoCode.id)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Promo Code Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Active Codes */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Codes</h3>
          <div className="text-3xl font-bold text-green-600 mb-2">{promoCodes.filter(code => code.isActive).length}</div>
          <p className="text-gray-600 text-sm">Currently active promo codes</p>
        </div>

        {/* Total Usage */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Usage</h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">1,234</div>
          <p className="text-gray-600 text-sm">Times codes were used</p>
        </div>

        {/* Revenue Generated */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Impact</h3>
          <div className="text-3xl font-bold text-purple-600 mb-2">$12,500</div>
          <p className="text-gray-600 text-sm">Revenue from promo codes</p>
        </div>
      </div>
    </div>
  );
};

export default PromoCodeManagement;
