import React from "react";

const CategoriesMarquee = () => {

  const categories = [
    "Phones",
    "Speakers",
    "Watch",
    "Earbuds",
    "Mouse",
    "Decoration",
    "Headphones",
    "Laptop",
    "Camera",
    "Gaming",
  ];

  return (
    <div className="relative overflow-hidden py-6 bg-white">

      {/* Fade Left */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />

      {/* Fade Right */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Marquee */}
      <div className="flex whitespace-nowrap gap-4 marquee-track">

        {[...categories, ...categories].map((item, index) => (
          <span
            key={index}
            className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-black hover:text-white transition cursor-pointer"
          >
            {item}
          </span>
        ))}

      </div>

      {/* Inline CSS */}
      <style>
        {`
          .marquee-track {
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

    </div>
  );
};

export default CategoriesMarquee;