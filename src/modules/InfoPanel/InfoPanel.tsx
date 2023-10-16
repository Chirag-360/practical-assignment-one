import React from 'react';

export const InfoPanel = () => {
  return (
    <footer className="bg-white">
      <div className="max-w mx-20 mt-10  flex flex-wrap justify-center">
        <div className="w-full lg:w-1/4 px-4 mb-8 border-b border-gray-300 pb-4">
          <h3 className="text-2xl font-bold mb-2">Funiro.</h3>
          <ul className="list-disc py-4">
            <p className='text-gray-400'>400 University Drive Suite 200 Coral</p>
            <p className='text-gray-400'>Gables,</p>
            <p className='text-gray-400'>FL 33134 USA</p>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-8 border-b border-gray-300 pb-4">
          <h3 className="text-lg font-bold mb-2 text-gray-400">Links</h3>
          <ul className="list-disc">
            <p className="my-7 font-medium">Home</p>
            <p className="my-7 font-medium ">Shop</p>
            <p className="my-7 font-medium">About</p>
            <p className="my-7 font-medium">Contact</p>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-8 border-b border-gray-300 pb-4">
          <h3 className="text-lg font-bold mb-2 text-gray-400">Help</h3>
          <ul className="list-disc">
            <p className="my-7 font-medium">Payment Options</p>
            <p className="my-7 font-medium">Returns</p>
            <p className="my-7 font-medium">Privacy Policies</p>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-8 border-b border-gray-300 pb-4">
          <h3 className="text-lg font-bold mb-2 text-gray-400">Newsletter</h3>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 w-full border-b border-gray-800 outline-none"
            />
            <button className=" text-black ml-2 p-2 border-b font-bold border-gray-800 outline-none">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-20 text-left text-gray-900">
        &copy; 2023 Funiro. All rights reserved. Made by Chirag
      </div>
    </footer>
  );
};
