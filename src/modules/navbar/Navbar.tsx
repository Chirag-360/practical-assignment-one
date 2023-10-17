import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="flex flex-wrap items-center justify-between p-4 mx-4 md:mx-20">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img
              src="/OtherImages/Frame 168.png"
              className="h-12 w-auto mr-3"
              alt="Flowbite Logo"
            />
          </a>
        </div>

        <div className="flex md:hidden">
          {" "}
          {/* Show on small screens only */}
          <button className="text-blue text-2xl rounded focus:outline-none">
            &#9776; {/* Hamburger icon */}
          </button>
        </div>

        <div className="hidden md:flex justify-center flex-grow">
          <ul className="flex justify-center gap-10">
            <li>
              <a href="#" className="text-blue text-2xl rounded">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-blue text-2xl rounded">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-blue text-2xl rounded">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-blue text-2xl rounded">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <span className="text-gray-600">
            <img src="/Icons/Vector.png" alt="Icon 1" className="mr-3" />
          </span>
          <span className="text-gray-600">
            <img src="/Icons/Vector(1).png" alt="Icon 2" className="mr-3" />
          </span>
          <span className="text-gray-600">
            <img src="/Icons/Vector(2).png" alt="Icon 3" className="mr-3" />
          </span>
          <span className="text-gray-600">
            <img src="/Icons/Vector(3).png" alt="Icon 4" className="mr-3" />
          </span>
        </div>
      </div>
    </nav>
  );
};
