import { assets } from "../assets/assets";
import { Headphones, ShieldCheck, Truck, RotateCcw } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* HERO BANNER */}
        <div className="bg-white rounded-xl p-10 grid md:grid-cols-2 items-center gap-10 shadow">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Your Online  <br /> Shopping Platform !!
            </h1>

            <p className="text-gray-500 mt-4 max-w-md">
              Welcome to ShopBazaar, a place where you can buy everything. Sale every day.
            </p>

            <button className="mt-6 bg-black hover:bg-black text-white px-6 py-3 rounded-lg font-medium">
              Shop Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={assets.Hero}
              alt="electronics"
              className="`w-[420px]`"
            />
          </div>

        </div>

        {/* FEATURE SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">

          <div className="flex flex-col items-center gap-2">
            <Headphones className="text-black" />
            <p className="font-medium">Responsive</p>
            <span className="text-sm text-gray-600">
              Customer service available 24/7
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="text-black" />
            <p className="font-medium">Secure</p>
            <span className="text-sm text-gray-600">
              Certified marketplace since 2017
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Truck className="text-black" />
            <p className="font-medium">Shipping</p>
            <span className="text-sm text-gray-600">
              Free, fast and reliable worldwide
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <RotateCcw className="text-black" />
            <p className="font-medium">Transparent</p>
            <span className="text-sm text-gray-600">
              Hassle-free return policy
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;