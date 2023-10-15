import React from 'react';
import { ProductData } from './ProductData';

export const Card = () => {
  return (
    <div className="flex flex-wrap gap-12 justify-center mx-20">
      {ProductData.map((item, index) => {
        const { discountPrice, description, image, name, realPrice } = item;

        return (
          <div key={index} className="relative bg-white h-auto shadow w-24rem overflow-hidden">
            <img src={image} alt={name} className="w-full h-43 mb-4" />
            <h2 className="text-lg font-bold m-4">{name}</h2>
            <p className="text-gray-600 mb-2 mx-4">{description}</p>
            <div className="flex justify-between items-center mx-4 mb-2">
              <p className="text-green-500">{discountPrice}</p>
              <p className="text-gray-600 line-through">{realPrice}</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-amber-500 py-2 px-4 mb-2">
                Add to cart
              </button>
              <div className="flex">
                <p className="text-white mr-4">Share</p>
                <p className="text-white mr-4">Compare</p>
                <p className="text-white">Like</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
