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
              Your One-Stop <br /> Electronic Market
            </h1>

            <p className="text-gray-500 mt-4 max-w-md">
              Welcome to e-shop, a place where you can buy everything about
              electronics. Sale every day.
            </p>

            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium">
              Shop Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={assets.heroBanner}
              alt="electronics"
              className="w-[420px]"
            />
          </div>

        </div>

        {/* FEATURE SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">

          <div className="flex flex-col items-center gap-2">
            <Headphones className="text-orange-500" />
            <p className="font-medium">Responsive</p>
            <span className="text-sm text-gray-500">
              Customer service available 24/7
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="text-orange-500" />
            <p className="font-medium">Secure</p>
            <span className="text-sm text-gray-500">
              Certified marketplace since 2017
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Truck className="text-orange-500" />
            <p className="font-medium">Shipping</p>
            <span className="text-sm text-gray-500">
              Free, fast and reliable worldwide
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <RotateCcw className="text-orange-500" />
            <p className="font-medium">Transparent</p>
            <span className="text-sm text-gray-500">
              Hassle-free return policy
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;