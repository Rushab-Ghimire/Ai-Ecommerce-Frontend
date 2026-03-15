import React, { useRef } from "react";
import { productsDummyData } from "../assets/assets";
import ProductCard from "./ProductCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const handleNavigate = () => {
    navigate("/products");
    window.scrollTo(0, 0);
  };

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 bg-slate-50 py-20">

      {/* Header */}
      <div className="flex text-center justify-between items-center mb-12">
        <Title
          title="Featured Products"
          subTitle="Discover trending products from ShopBazaar with amazing deals and top quality items."
        />

        <button
          onClick={handleNavigate}
          className="text-sm font-medium text-orange-500 hover:underline"
        >
          View All →
        </button>
      </div>

      {/* Slider */}
      <div className="relative">

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Products Row */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {productsDummyData.slice(0, 8).map((product, index) => (
            <div key={product._id} className="min-w-[250px]">
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center">
        <button
          onClick={handleNavigate}
          className="mt-16 px-6 py-2 text-sm font-medium border border-gray-300
          rounded bg-white hover:bg-gray-50 transition cursor-pointer"
        >
          View All Products
        </button>
      </div>

    </div>
  );
};

export default FeaturedProducts;