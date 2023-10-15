import React from 'react';

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="flex items-center justify-between p-4 mx-20">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="./public/OtherImages/Frame 168.png" className="h-12 w-auto mr-3" alt="Flowbite Logo" />
          </a>
        </div>

        <div className="flex justify-center">
          <ul className="flex justify-center gap-20">
            <li>
              <a href="#" className="text-blue text-2xl rounded">Home</a>
            </li>
            <li>
              <a href="#" className="text-blue text-2xl rounded">Shop</a>
            </li>
            <li>
              <a href="#" className="text-blue text-2xl rounded">About</a>
            </li>
            <li>
              <a href="#" className="text-blue text-2xl rounded">Contact</a>
            </li>
          </ul>
        </div>

        <div className="md:flex items-center gap-10">
          <span className="text-gray-600 mr-2">
              <img src="./public/Icons/Vector.png" className='mr-3'/>
          </span>
          <span className="text-gray-600 mr-2">
              <img src="./public/Icons/Vector(1).png" className='mr-3'/>
          </span>
          <span className="text-gray-600 mr-2">
              <img src="./public/Icons/Vector(2).png" className='mr-3'/>
          </span>
          <span className="text-gray-600 mr-2">
              <img src="./public/Icons/Vector(3).png" className='mr-3'/>
          </span>
        </div>
      </div>
    </nav>
  );
};
