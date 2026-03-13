import React from "react";
import { assets } from "../assets/assets";
import { ShoppingBag, BarChart3, MapPin, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="`bg-gradient-to-r` from-gray-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 items-center gap-10">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            All Your Styles <br />
            Curated Just For You
          </h1>

          <p className="text-gray-600 mt-4 max-w-md">
            This e-commerce website is a platform where you can order or purchase
            clothes of your choice. You will find every new design with good quality.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium">
              Explore Now
            </button>

            <button className="flex items-center gap-2 text-gray-700">
              <span className="border rounded-full p-2">
                <Play size={16} />
              </span>
              Watch A Video
            </button>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src={assets.Hero}
            alt="product"
            className="w-[320px] `lg:w-[380px]` drop-shadow-xl"
          />
        </div>

        {/* Right Stats */}
        <div className="space-y-6">

          <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-xl">
            <div className="bg-orange-100 p-3 rounded-full">
              <ShoppingBag className="text-orange-500" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg">2082</h3>
              <p className="text-sm text-gray-500">Products</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-xl">
            <div className="bg-orange-100 p-3 rounded-full">
              <BarChart3 className="text-orange-500" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg">150</h3>
              <p className="text-sm text-gray-500">Daily Sales</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-xl">
            <div className="bg-orange-100 p-3 rounded-full">
              <MapPin className="text-orange-500" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg">8</h3>
              <p className="text-sm text-gray-500">Country</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;