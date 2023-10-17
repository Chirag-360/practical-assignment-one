import React from "react";

export const Slide = () => {
  return (
    <div className="relative">
      <img src="/OtherImages/Rectangle 1.png" alt="Slide" className="w-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold text-black font-1xl">Shop</h1>
        <p className="mt-4 text-black text-2xl">
          <b>Home</b>
          <span className="mx-1">&#62;</span> shop
        </p>
      </div>
    </div>
  );
};
