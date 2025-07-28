import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, X } from 'lucide-react';

const Filters = () => {
  const [filters, setFilters] = useState([
    {
      id: 1,
      name: 'category',
      type: 'category',
      options: [
        { name: 'colour', priority: 1, value: 'red' },
        { name: 'size', priority: 2, value: 'medium' }
      ]
    },
    {
      id: 2,
      name: 'category colour value',
      type: 'colour',
      options: [
        { name: 'red', priority: 1, value: 'red' },
        { name: 'green', priority: 2, value: 'green' }
      ]
    },
    {
      id: 3,
      name: 'category size value',
      type: 'size',
      options: [
        { name: 'small', priority: 1, value: 'small' },
        { name: 'medium', priority: 2, value: 'medium' }
      ]
    },
    {
      id: 4,
      name: 'category size value waist',
      type: 'size_waist',
      options: [
        { name: 'size', priority: 1, value: '32' }
      ]
    },
    {
      id: 5,
      name: 'category price value',
      type: 'price',
      options: [
        { name: 'upper limit', value: '1000' },
        { name: 'lower limit', value: '100' }
      ]
    }
  ]);

  const [newFilter, setNewFilter] = useState({
    filterKey: '',
    filterValue: '',
    colourCode: '',
    priceRange: '',
    minimum: '',
    maximum: ''
  });

  const [arrangementPriority, setArrangementPriority] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateFilter = () => {
    if (newFilter.filterKey) {
      const filter = {
        id: Date.now(),
        name: newFilter.filterKey,
        type: 'custom',
        options: []
      };
      
      if (newFilter.filterValue) {
        filter.options.push({
          name: newFilter.filterValue,
          priority: parseInt(arrangementPriority) || 1,
          value: newFilter.filterValue
        });
      }
      
      setFilters([...filters, filter]);
      setNewFilter({
        filterKey: '',
        filterValue: '',
        colourCode: '',
        priceRange: '',
        minimum: '',
        maximum: ''
      });
      setArrangementPriority('');
      setShowCreateForm(false);
    }
  };

  const deleteFilter = (filterId) => {
    setFilters(filters.filter(filter => filter.id !== filterId));
  };

  const deleteFilterOption = (filterId, optionIndex) => {
    setFilters(filters.map(filter => {
      if (filter.id === filterId) {
        return {
          ...filter,
          options: filter.options.filter((_, index) => index !== optionIndex)
        };
      }
      return filter;
    }));
  };

  return (
    <div className="space-y-8 bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Filters</h1>
          <p className="text-gray-600">Manage product filters and categories</p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-gray-800"
        >
          <Plus className="h-4 w-4" />
          <span>Create Filter</span>
        </button>
      </div>

      {/* Create Filters Form */}
      {showCreateForm && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Create filters</h2>
            <button 
              onClick={() => setShowCreateForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Filter Key */}
            <div>
              <input
                type="text"
                placeholder="filter key / eg:cotton, size)"
                value={newFilter.filterKey}
                onChange={(e) => setNewFilter({...newFilter, filterKey: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Arrangement Priority */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-medium">Arrangement priority</span>
              <input
                type="number"
                placeholder="1"
                value={arrangementPriority}
                onChange={(e) => setArrangementPriority(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg w-20 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Add
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Value Name */}
            <div>
              <input
                type="text"
                placeholder="value name(red , xl)"
                value={newFilter.filterValue}
                onChange={(e) => setNewFilter({...newFilter, filterValue: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Colour Code */}
            <div>
              <input
                type="text"
                placeholder="colour code (optional)"
                value={newFilter.colourCode}
                onChange={(e) => setNewFilter({...newFilter, colourCode: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Add Price Range */}
            <div>
              <input
                type="text"
                placeholder="Add price range"
                value={newFilter.priceRange}
                onChange={(e) => setNewFilter({...newFilter, priceRange: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Minimum */}
            <div>
              <input
                type="number"
                placeholder="minimum"
                value={newFilter.minimum}
                onChange={(e) => setNewFilter({...newFilter, minimum: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Maximum */}
            <div>
              <input
                type="number"
                placeholder="minimum"
                value={newFilter.maximum}
                onChange={(e) => setNewFilter({...newFilter, maximum: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={handleCreateFilter}
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 font-medium"
            >
              Create filter
            </button>
          </div>
        </div>
      )}

      {/* All Filters Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All filters</h2>
        
        <div className="space-y-6">
          {filters.map((filter) => (
            <div key={filter.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{filter.name}</h3>
                <button 
                  onClick={() => deleteFilter(filter.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filter.options.map((option, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-700">{option.name}</p>
                      {option.priority && (
                        <p className="text-sm text-gray-500">Priority: {option.priority}</p>
                      )}
                      {option.value && (
                        <p className="text-sm text-gray-600">Value: {option.value}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => deleteFilterOption(filter.id, index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {filter.options.length === 0 && (
                <p className="text-gray-500 italic">No options configured for this filter</p>
              )}
            </div>
          ))}
        </div>

        {filters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No filters created yet</p>
            <p className="text-gray-400">Click "Create Filter" to add your first filter</p>
          </div>
        )}
      </div>

      {/* Filter Categories Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Category */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Filters</h3>
          <div className="space-y-2">
            {filters.filter(f => f.type === 'category').map(filter => (
              <div key={filter.id} className="flex justify-between items-center">
                <span className="text-gray-700">{filter.name}</span>
                <span className="text-sm text-gray-500">{filter.options.length} options</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Filters</h3>
          <div className="space-y-2">
            {filters.filter(f => f.type === 'price').map(filter => (
              <div key={filter.id} className="flex justify-between items-center">
                <span className="text-gray-700">{filter.name}</span>
                <span className="text-sm text-gray-500">{filter.options.length} ranges</span>
              </div>
            ))}
          </div>
        </div>

        {/* Size Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Size Filters</h3>
          <div className="space-y-2">
            {filters.filter(f => f.type.includes('size')).map(filter => (
              <div key={filter.id} className="flex justify-between items-center">
                <span className="text-gray-700">{filter.name}</span>
                <span className="text-sm text-gray-500">{filter.options.length} sizes</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
