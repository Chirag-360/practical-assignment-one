import React from 'react';

export const Pagination = () => {
  return (
    <div className="flex justify-center mt-4 py-16 gap-5">
      <button className="w-16 h-16 bg-gray-200 bg-yellow-600 rounded-xl mx-1 flex items-center justify-center">1</button>
      <button className="w-16 h-16 bg-gray-200 bg-orange-50 rounded-xl mx-1 flex items-center justify-center">2</button>
      <button className="w-16 h-16 bg-gray-200 bg-orange-50 rounded-xl mx-1 flex items-center justify-center">3</button>
      <button className="w-40 h-16 bg-gray-200 bg-orange-50 rounded-xl mx-1 flex items-center justify-center">Next</button>
    </div> );
};
