import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Upload, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * JoinUsControl Component
 * 
 * A comprehensive admin interface for managing "Join Us" promotional content.
 * Based on the Figma design, this component provides:
 * - Image upload functionality
 * - Title and detail content creation
 * - Priority-based posting management
 * - Real-time preview functionality
 * - CRUD operations for promotional posts
 * 
 * Features:
 * - Responsive design matching the admin dashboard layout
 * - Interactive preview with reward descriptions
 * - Priority ordering system for posts
 * - Delete and edit capabilities for existing posts
 */
const JoinUsControl = () => {
  // State for form management
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  
  // State for edit modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDetail, setEditDetail] = useState('');
  const [editPriority, setEditPriority] = useState(1);
  
  // State for success modal
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
  // State for delete success modal
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] = useState(false);
  
  // State for screen view
  const [isScreenViewOpen, setIsScreenViewOpen] = useState(false);
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Welcome reward',
      detail: 'Enjoy a welcome reward to spend in your first month.',
      priority: 1,
      section: 'head'
    },
    {
      id: 2,
      title: 'Birthday reward', 
      detail: 'Celebrate your birthday month with a special discount',
      priority: 2,
      section: 'posting'
    }
  ]);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Handle post creation
  const handleCreatePost = () => {
    if (title && detail) {
      const newPost = {
        id: Date.now(),
        title,
        detail,
        priority: posts.length + 1,
        section: 'posting'
      };
      setPosts([...posts, newPost]);
      setTitle('');
      setDetail('');
    }
  };

  // Handle post deletion
  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    setIsDeleteSuccessModalOpen(true);
  };

  // Handle priority update
  const handlePriorityUpdate = (id, newPriority) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, priority: newPriority } : post
    ));
  };

  // Handle edit modal
  const handleEditClick = (post) => {
    setEditingPost(post);
    setEditTitle(post.title);
    setEditDetail(post.detail);
    setEditPriority(post.priority);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingPost) {
      setPosts(posts.map(post => 
        post.id === editingPost.id 
          ? { ...post, title: editTitle, detail: editDetail, priority: editPriority }
          : post
      ));
      setIsEditModalOpen(false);
      setIsSuccessModalOpen(true);
      // Reset edit state
      setEditingPost(null);
      setEditTitle('');
      setEditDetail('');
      setEditPriority(1);
    }
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
  };

  const handleDeleteSuccessModalClose = () => {
    setIsDeleteSuccessModalOpen(false);
  };

  const handleScreenViewOpen = () => {
    setIsScreenViewOpen(true);
  };

  const handleScreenViewClose = () => {
    setIsScreenViewOpen(false);
  };

  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
    setEditingPost(null);
    setEditTitle('');
    setEditDetail('');
    setEditPriority(1);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-black mb-2">join us control screen</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Image Upload */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-black mb-4">Add image</h2>
              
              {/* Image Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                {selectedImage ? (
                  <div className="space-y-4">
                    <img 
                      src={selectedImage} 
                      alt="Uploaded" 
                      className="max-w-full h-auto mx-auto rounded-lg"
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto border-2 border-gray-300 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 inline-flex items-center gap-2"
                    >
                      <Plus className="w-5 h-5" />
                      upload image
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Middle Column - Content Creation */}
          <div className="space-y-6">
            
            {/* Create Title */}
            <div>
              <h3 className="text-lg font-bold text-black mb-3">Create title</h3>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:border-blue-500"
                placeholder="Enter title..."
              />
            </div>

            {/* Create Detail */}
            <div>
              <h3 className="text-lg font-bold text-black mb-3">Create detail</h3>
              <textarea
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                rows={8}
                className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:border-blue-500 resize-none"
                placeholder="Enter detailed description..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleCreatePost}
                className="bg-gray-800 text-white px-12 py-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                Post to join us
              </button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
                Post to head
              </button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
                Post to bottom
              </button>
              <button 
                onClick={handleScreenViewOpen}
                className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
              >
                screen view
              </button>
            </div>

            <button className="border border-gray-300 text-black px-6 py-2 rounded-full hover:bg-gray-50 transition-colors">
              View
            </button>
          </div>

          {/* Right Column - Preview */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-lg font-bold text-black mb-3">Preview and arrange</h3>
              
              {/* Preview Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 h-64 flex items-center justify-center">
                {selectedImage ? (
                  <img 
                    src={selectedImage} 
                    alt="Preview" 
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <ImageIcon className="w-10 h-10 text-gray-400" />
                    </div>
                    <p className="text-gray-500">Image preview will appear here</p>
                  </div>
                )}
              </div>

              {/* Reward Information */}
              <div className="text-left mt-6 space-y-4">
                <div>
                  <h4 className="font-medium text-base mb-1">Welcome reward</h4>
                  <p className="text-gray-600 text-sm">Enjoy a welcome reward to spend in your first month.</p>
                </div>
                <div>
                  <h4 className="font-medium text-base mb-1">Birthday reward</h4>
                  <p className="text-gray-600 text-sm">Celebrate your birthday month with a special discount</p>
                </div>
                <div>
                  <h4 className="font-medium text-base mb-1">Private members' sale</h4>
                  <p className="text-gray-600 text-sm">Unlocked after your first order</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Management Section */}
        <div className="mt-12 space-y-8">
          
          {/* Head Section */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Head</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">All posting</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEditClick(posts[0])}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Edit2 className="w-5 h-5 text-gray-500" />
                </button>
                <button 
                  onClick={() => handleDeletePost(posts[0]?.id)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Trash2 className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Posts List */}
          {posts.map((post, index) => (
            <div key={post.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-black mb-2">posting {index + 1}</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Post Content */}
                    <div className="lg:col-span-2">
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-base mb-1">{post.title}</h5>
                          <p className="text-gray-600 text-sm">{post.detail}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-base mb-1">Birthday reward</h5>
                          <p className="text-gray-600 text-sm">Celebrate your birthday month with a special discount</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-base mb-1">Private members' sale</h5>
                          <p className="text-gray-600 text-sm">Unlocked after your first order</p>
                        </div>
                      </div>
                    </div>

                    {/* Priority Control */}
                    <div>
                      <h5 className="text-lg font-bold text-black mb-3">priority {post.priority}</h5>
                      <input
                        type="number"
                        value={post.priority}
                        onChange={(e) => handlePriorityUpdate(post.id, parseInt(e.target.value))}
                        className="w-full px-3 py-2 border-2 border-black rounded-xl focus:outline-none focus:border-blue-500"
                        min="1"
                      />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 ml-4">
                  <button 
                    onClick={() => handleEditClick(post)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <Edit2 className="w-5 h-5 text-gray-500" />
                  </button>
                  <button 
                    onClick={() => handleDeletePost(post.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <Trash2 className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto mx-4">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-black">
                Edit <span className="font-bold">join us control screen</span>
              </h2>
              <button
                onClick={handleCancelEdit}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column - Edit Form */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-3">posting 1</h3>
                    <h4 className="text-lg font-bold text-black mb-3">Type here</h4>
                    
                    {/* Edit Content Area */}
                    <div className="border-2 border-black rounded-xl p-4 h-64 overflow-y-auto">
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-base mb-1">Welcome reward</h5>
                          <p className="text-gray-600 text-sm mb-4">Enjoy a welcome reward to spend in your first month.</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-base mb-1">Birthday reward</h5>
                          <p className="text-gray-600 text-sm mb-4">Celebrate your birthday month with a special discount</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-base mb-1">Private members' sale</h5>
                          <p className="text-gray-600 text-sm">Unlocked after your first order</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle Column - Create title and Priority */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-3">Create title</h3>
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:border-blue-500"
                      placeholder="Enter title..."
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-3">priority 1</h3>
                    <input
                      type="number"
                      value={editPriority}
                      onChange={(e) => setEditPriority(parseInt(e.target.value) || 1)}
                      className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:border-blue-500 text-center text-lg font-bold"
                      min="1"
                    />
                  </div>
                </div>

                {/* Right Column - Preview */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-lg font-bold text-black">Preview and arrange</h3>
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">i</span>
                      </div>
                    </div>
                    
                    {/* Preview Image */}
                    <div className="bg-gray-100 rounded-lg h-56 mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Preview Content */}
                    <div className="text-left space-y-3">
                      <div>
                        <h4 className="font-medium text-base mb-1">Welcome reward</h4>
                        <p className="text-gray-600 text-sm">Enjoy a welcome reward to spend in your first month.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-base mb-1">Birthday reward</h4>
                        <p className="text-gray-600 text-sm">Celebrate your birthday month with a special discount</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-base mb-1">Private members' sale</h4>
                        <p className="text-gray-600 text-sm">Unlocked after your first order</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer - Action Buttons */}
              <div className="flex justify-center gap-4 mt-8 pt-6 border-t">
                <button
                  onClick={handleSaveEdit}
                  className="bg-black text-white px-16 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
                >
                  save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="border border-gray-300 text-black px-12 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium"
                >
                  go back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-80 mx-4">
            
            {/* Modal Header with Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleSuccessModalClose}
                className="p-1 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-8 pb-8 text-center">
              
              {/* Success Message */}
              <h2 className="text-lg font-bold text-black mb-8 leading-tight">
                posting updated successfully!
              </h2>

              {/* Done Button */}
              <button
                onClick={handleSuccessModalClose}
                className="bg-black text-white px-16 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Success Modal */}
      {isDeleteSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-80 mx-4">
            
            {/* Modal Header with Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleDeleteSuccessModalClose}
                className="p-1 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-8 pb-8 text-center">
              
              {/* Success Message */}
              <h2 className="text-lg font-bold text-black mb-8 leading-tight">
                posting deleted successfully!
              </h2>

              {/* Done Button */}
              <button
                onClick={handleDeleteSuccessModalClose}
                className="bg-black text-white px-16 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Screen View Modal */}
      {isScreenViewOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-bold text-black">YORAA</h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">🔍</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">💬</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">👤</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex min-h-screen">
            
            {/* Sidebar */}
            <div className="w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-black mb-6">Dashboard</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Dashboard</h3>
                    <div className="space-y-1 ml-2">
                      <p className="text-sm text-gray-700">orders</p>
                      <p className="text-sm text-gray-700">return requests</p>
                      <p className="text-sm text-gray-700">Inbox</p>
                      <p className="text-sm text-gray-700">vendor messages</p>
                      <p className="text-sm text-gray-700">Users</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">App uploading area</h3>
                    <div className="space-y-1 ml-2">
                      <p className="text-sm text-gray-700">Category</p>
                      <p className="text-sm text-gray-700">Subcategory</p>
                      <p className="text-sm text-gray-700">Items</p>
                      <p className="text-sm text-gray-700">Item details</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">App functional area</h3>
                    <div className="space-y-1 ml-2">
                      <p className="text-sm text-gray-700">Filters</p>
                      <p className="text-sm text-gray-700">Promocode</p>
                      <p className="text-sm text-gray-700">Points</p>
                      <p className="text-sm text-gray-700">Add Faq</p>
                      <p className="text-sm text-gray-700">Manage banners rewards</p>
                      <p className="text-sm font-medium text-black">join us control screen</p>
                      <p className="text-sm text-gray-700">Invite a friend</p>
                      <p className="text-sm text-gray-700">new admin</p>
                      <p className="text-sm text-gray-700">Arrangement control</p>
                      <p className="text-sm text-gray-700">product bundling</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">App setting area</h3>
                    <div className="space-y-1 ml-2">
                      <p className="text-sm text-gray-700">Communication preferences</p>
                      <p className="text-sm text-gray-700">language country and region</p>
                      <p className="text-sm text-gray-700">hugging face api open close</p>
                      <p className="text-sm text-gray-700">Profile visibility</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">App promotional area</h3>
                    <div className="space-y-1 ml-2">
                      <p className="text-sm text-gray-700">Cart abandonment recovery</p>
                      <p className="text-sm text-gray-700">send promo notification</p>
                      <p className="text-sm text-gray-700">send notification in app</p>
                      <p className="text-sm text-gray-700">Email and sms template mgt screen</p>
                      <p className="text-sm text-gray-700">push notification</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Analytics & Data base</h3>
                    <div className="space-y-1 ml-2">
                      <p className="text-sm text-gray-700">analytics reports</p>
                      <p className="text-sm text-gray-700">Data base</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Others</h3>
                    <div className="space-y-1 ml-2">
                      <p className="text-sm text-gray-700">support chat log</p>
                      <p className="text-sm text-gray-700">Logs/error tracking integration</p>
                      <p className="text-sm text-gray-700">staging environment toggle</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Settings</h3>
                    <div className="space-y-1 ml-2">
                      <p className="text-sm text-gray-700">Settings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-8 bg-gray-50">
              
              {/* Action Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                <button className="bg-red-500 text-white px-8 py-3 rounded-full font-bold">
                  screen view
                </button>
                <button 
                  onClick={handleScreenViewClose}
                  className="border border-gray-300 text-black px-8 py-3 rounded-full hover:bg-gray-50"
                >
                  go back
                </button>
              </div>

              {/* Content Display Area */}
              <div className="max-w-6xl mx-auto space-y-6">
                
                {/* Main Promotional Banner */}
                <div className="bg-black text-white p-12 text-center relative">
                  <div className="space-y-2">
                    <p className="text-sm tracking-wide">WANT</p>
                    <p className="text-6xl font-bold">10% OFF</p>
                    <p className="text-xl">YOUR NEXT PURCHASE?</p>
                    <p className="text-sm">PLUS REWARD GIVEAWAY AND MORE!</p>
                    <div className="mt-6">
                      <p className="text-sm">What are you waiting for?</p>
                      <p className="text-sm">Become a Rewards member today!</p>
                    </div>
                  </div>
                </div>

                {/* Secondary Banners Row */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-yellow-300 p-6 relative h-96">
                    <p className="text-xs text-center mb-2">Expires in 8 days</p>
                    <p className="text-sm font-bold text-center mb-4">YORAA Concert Giveaways</p>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="border border-black text-center py-1">
                        <p className="text-xs">MEMBERS EXCLUSIVE</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-300 p-6 relative h-96">
                    <p className="text-xs text-center mb-2">Expires in 8 days</p>
                    <p className="text-sm font-bold text-center mb-4">YORAA Concert Giveaways</p>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="border border-black text-center py-1">
                        <p className="text-xs">MEMBERS EXCLUSIVE</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-300 p-6 relative h-96">
                    <p className="text-xs text-center mb-2">Expires in 8 days</p>
                    <p className="text-sm font-bold text-center mb-4">YORAA Concert Giveaways</p>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="border border-black text-center py-1">
                        <p className="text-xs">MEMBERS EXCLUSIVE</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8">
                  <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="bg-gray-200 p-3 rounded-full hover:bg-gray-300">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinUsControl;
