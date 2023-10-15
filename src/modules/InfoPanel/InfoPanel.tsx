import React from 'react';

export const InfoPanel = () => {
  return (
    <footer className="bg-gray-200 py-6">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="text-lg font-bold mb-2">Section 1</h3>
          <ul className="list-disc pl-4">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="text-lg font-bold mb-2">Section 2</h3>
          <ul className="list-disc pl-4">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="text-lg font-bold mb-2">Section 3</h3>
          <ul className="list-disc pl-4">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="text-lg font-bold mb-2">Section 4</h3>
          <ul className="list-disc pl-4">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
