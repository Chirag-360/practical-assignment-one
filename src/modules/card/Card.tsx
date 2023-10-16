import React from 'react';
import { ProductData } from './ProductData';

export const Card = () => {
  return (
    <div className="flex flex-wrap gap-12 justify-center mx-20">
      {ProductData.map((item, index) => {
        const { discountPrice, description, image, name, realPrice } = item;
        const isNew = !discountPrice;  

        return (
          <div key={index} className="relative bg-white h-auto shadow w-24rem overflow-hidden">
               {isNew ? (
      <img src='./public/Tags/New.png' alt='New Tag' className='absolute top-0 left-0 mt-2 ml-2' />
    ) : (
      <img src='./public/Tags/Discount.png' alt='Discount Tag' className='absolute top-0 left-0 mt-2 ml-2' />
    )}
            <img src={image} alt={name} className="w-full h-43 mb-4" />
            <h2 className="text-lg font-bold m-4">{name}</h2>
            <p className="text-gray-600 mb-2 mx-4">{description}</p>
            <div className="flex justify-between items-center mx-4 mb-2">
              <p className="text-green-500">{discountPrice}</p>
              <p className={discountPrice ? 'text-gray-600 line-through' : 'text-gray-600'}>
  {realPrice}
</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-amber-500 py-2 px-4 mb-2">
                Add to cart
              </button>
              <div className="flex">
                <img className="h-5 mr-2" src="./public/hoverIcons/Group.png" alt="Share Icon" />
                <p className="text-white mr-4">Share</p>
                <img className="h-5 mr-2" src="./public/hoverIcons/Vector.png" alt="Compare Icon" />
                <p className="text-white mr-4">Compare</p>
                <img className="h-5 mr-2" src="./public/hoverIcons/Vector(1).png" alt="Like Icon" />
                <p className="text-white">Like</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
