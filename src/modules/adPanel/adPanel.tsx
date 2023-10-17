import React from "react";

export const AdPanel = () => {
  const ads = [
    {
      icon: "./adIcons/trophy 1.png",
      title: "High Quality",
      subtitle: "crafted from top materials",
    },
    {
      icon: "./adIcons/guarantee.png",
      title: "Warranty Protection",
      subtitle: "Over 2 years",
    },
    {
      icon: "./adIcons/present.png",
      title: "Free Shipping",
      subtitle: "Order over 150 $",
    },
    {
      icon: "./adIcons/support.png",
      title: "24 / 7 Support",
      subtitle: "Dedicated support",
    },
  ];

  return (
    <div className=" flex flex-wrap justify-between p-4 bg-orange-50 mt-3">
      {ads.map((ad, index) => (
        <div
          key={index}
          className="w-full md:w-1/2 lg:w-1/4 flex justify-center my-16 p-4 bg-transparent"
        >
          <img src={ad.icon} alt="Ad Icon" className="mb-2 mx-2 " />
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold mb-2">{ad.title}</h4>
            <h6 className="text-gray-700">{ad.subtitle}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};
