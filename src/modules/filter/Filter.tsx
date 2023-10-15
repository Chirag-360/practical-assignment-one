import React from 'react';

export const Filter = () => {
  return (
    <div className="flex justify-between items-center p-4 py-7 bg-orange-50 mb-16 px-20">
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <span className="text-gray-600 ml-2">
              <img src="./public/FilterIcons/settings.png" className='mr-3 h-6'/>
          </span>
          <span className="mr-2 text-xl">Filter </span>
          <span className="text-gray-600 ml-2">
              <img src="./public/FilterIcons/dots.png" className='mr-3 h-6'/>
          </span>
          <span className="text-gray-600 mx-2">
              <img src="./public/FilterIcons/tabs.png" className='mr-3 h-6'/>
          </span>
          <div className="border-l border-gray-300 h-14"></div>

        </div>
        <div className="flex items-center">
          <span className="mr-2 text-xl">Showing 1–16 of 32 results</span>
        </div>
      </div>

      <div className="flex items-center">
        <div className="mr-4">
          <span className="mr-2 text-2xl ">Show </span>
          <select className="px-4 py-2 text-2xl h-14 w-30 bg-white">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
        <div>
          <span className="mr-2 text-2xl ">Sort By </span>
          <select className="px-5 py-1 h-14 w-30 bg-white text-2xl">
            <option >Defalut</option>
            <option>Name</option>
            <option>Price</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};
