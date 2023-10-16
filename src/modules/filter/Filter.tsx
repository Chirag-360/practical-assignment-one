import React from 'react';

export const Filter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 py-7 bg-orange-50 mb-6 md:mb-16 mx-4 md:px-20">
      <div className="flex items-center mb-2 md:mb-0">
        <div className="flex items-center mr-4">
          <span className="text-gray-600 ml-2">
            <img src="./public/FilterIcons/settings.png" className="mr-3 h-6" alt="Settings Icon" />
          </span>
          <span className="mr-2 text-xl">Filter </span>
          <span className="text-gray-600 ml-2">
            <img src="./public/FilterIcons/dots.png" className="mr-3 h-6" alt="Dots Icon" />
          </span>
          <span className="text-gray-600 mx-2">
            <img src="./public/FilterIcons/tabs.png" className="mr-3 h-6" alt="Tabs Icon" />
          </span>
          <div className="border-l border-gray-300 h-14"></div>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-xl whitespace-nowrap">Showing 1–16 of 32 results</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-2 md:mb-0 mr-4">
          <span className="mr-2 text-xl">Show </span>
          <select className="px-4 py-2 text-xl md:text-2xl h-10 md:h-14 w-24 md:w-30 bg-white">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
        <div>
          <span className="mr-2 text-xl">Sort By </span>
          <select className="px-4 py-2 text-xl md:text-2xl h-10 md:h-14 w-24 md:w-30 bg-white">
            <option>Default</option>
            <option>Name</option>
            <option>Price</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};
