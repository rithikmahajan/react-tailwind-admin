import React, { useState } from 'react';
import { Search, ChevronDown, Star, Eye } from 'lucide-react';

const ManageReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allCategories, setAllCategories] = useState('All categories');
  const [subCategories, setSubCategories] = useState('sub categories');

  // Sample review data based on Figma design
  const [reviews, setReviews] = useState([
    {
      id: 1,
      image: '/api/placeholder/80/80',
      item: 'Tshirt',
      rating: 4,
      sizeAndFit: {
        question: 'How was the shirt?',
        answers: ['too small', 'just right', 'too big'],
        selected: 'just right'
      },
      comfort: {
        question: 'how was the comfort?',
        answers: ['poor', 'average', 'good', 'excellent'],
        selected: 'good'
      },
      durability: {
        question: 'how was the durability?',
        answers: ['poor', 'average', 'good', 'excellent'],
        selected: 'excellent'
      },
      category: 'category',
      subcategory: 'subcategory',
      action: 'View reviews',
      reviewStatus: 'On',
      turnReviewOnOff: true
    },
    {
      id: 2,
      image: '/api/placeholder/80/80',
      item: 'manage reviews',
      rating: 4,
      sizeAndFit: {
        question: 'How was the shirt?',
        answers: ['too small', 'just right', 'too big'],
        selected: 'just right'
      },
      comfort: {
        question: 'how was the comfort?',
        answers: ['poor', 'average', 'good', 'excellent'],
        selected: 'good'
      },
      durability: {
        question: 'how was the durability?',
        answers: ['poor', 'average', 'good', 'excellent'],
        selected: 'good'
      },
      category: 'category',
      subcategory: 'subcategory',
      action: 'View reviews',
      reviewStatus: 'On',
      turnReviewOnOff: true
    }
  ]);

  const filteredReviews = reviews.filter(review =>
    review.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const renderRatingScale = (question, answers, selected) => {
    return (
      <div className="space-y-2">
        <p className="text-xs text-gray-600">{question}</p>
        <div className="flex items-center space-x-1">
          {answers.map((answer, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full border-2 ${
                answer === selected
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-white border-gray-300'
              }`}
            ></div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{answers[0]}</span>
          <span>{answers[answers.length - 1]}</span>
        </div>
      </div>
    );
  };

  const toggleReviewStatus = (reviewId) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, turnReviewOnOff: !review.turnReviewOnOff, reviewStatus: review.turnReviewOnOff ? 'Off' : 'On' }
        : review
    ));
  };

  return (
    <div className="space-y-8 bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage reviews</h1>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center space-x-4 mb-6">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* All Categories Filter */}
          <div className="relative">
            <select 
              value={allCategories}
              onChange={(e) => setAllCategories(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[150px]"
            >
              <option>All categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
              <option>Home & Garden</option>
            </select>
            <ChevronDown className="h-4 w-4 absolute right-2 top-3 text-gray-400" />
          </div>

          {/* Sub Categories Filter */}
          <div className="relative">
            <select 
              value={subCategories}
              onChange={(e) => setSubCategories(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[150px]"
            >
              <option>sub categories</option>
              <option>T-shirts</option>
              <option>Pants</option>
              <option>Shoes</option>
              <option>Accessories</option>
            </select>
            <ChevronDown className="h-4 w-4 absolute right-2 top-3 text-gray-400" />
          </div>
        </div>

        {/* Reviews Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="pb-3 text-sm font-semibold text-gray-700">Image</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">item</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">rating</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">size and fit</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">category</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">subcategory</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">Action</th>
                <th className="pb-3 text-sm font-semibold text-gray-700">Turn review on/off for this item</th>
              </tr>
            </thead>
            <tbody>
              {filteredReviews.map((review) => (
                <tr key={review.id} className="border-b border-gray-100 hover:bg-gray-50">
                  {/* Product Image */}
                  <td className="py-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                      <div className="w-12 h-12 bg-blue-300 rounded"></div>
                    </div>
                  </td>

                  {/* Item Name */}
                  <td className="py-6">
                    <span className="text-sm font-medium text-gray-900">{review.item}</span>
                  </td>

                  {/* Rating */}
                  <td className="py-6">
                    {renderStars(review.rating)}
                  </td>

                  {/* Size and Fit */}
                  <td className="py-6">
                    <div className="space-y-4 max-w-[200px]">
                      {renderRatingScale(
                        review.sizeAndFit.question,
                        review.sizeAndFit.answers,
                        review.sizeAndFit.selected
                      )}
                      {renderRatingScale(
                        review.comfort.question,
                        review.comfort.answers,
                        review.comfort.selected
                      )}
                      {renderRatingScale(
                        review.durability.question,
                        review.durability.answers,
                        review.durability.selected
                      )}
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-6">
                    <span className="text-sm text-gray-700">{review.category}</span>
                  </td>

                  {/* Subcategory */}
                  <td className="py-6">
                    <span className="text-sm text-gray-700">{review.subcategory}</span>
                  </td>

                  {/* Action */}
                  <td className="py-6">
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm">
                      <Eye className="h-4 w-4" />
                      <span>{review.action}</span>
                    </button>
                  </td>

                  {/* Turn Review On/Off */}
                  <td className="py-6">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleReviewStatus(review.id)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                          review.turnReviewOnOff
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                        }`}
                      >
                        {review.reviewStatus}
                      </button>
                      <button
                        onClick={() => toggleReviewStatus(review.id)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                          !review.turnReviewOnOff
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                        }`}
                      >
                        Off
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No results message */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No reviews found</p>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Review Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Overall Rating Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Rating Distribution</h3>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-3">
                <span className="text-sm font-medium w-8">{rating}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full" 
                    style={{ width: `${rating * 20}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{rating * 20}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Metrics */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Reviews</span>
              <span className="font-semibold text-gray-900">1,234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Rating</span>
              <span className="font-semibold text-gray-900">4.2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">This Month</span>
              <span className="font-semibold text-green-600">+15%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Response Rate</span>
              <span className="font-semibold text-blue-600">87%</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition-colors">
              Export Reviews
            </button>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-green-600 transition-colors">
              Bulk Approve
            </button>
            <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-orange-600 transition-colors">
              Moderate Reviews
            </button>
            <button className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-600 transition-colors">
              Review Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageReviews;
