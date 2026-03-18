import { assets } from "../assets/assets";
import { ArrowRight } from "lucide-react";

const Hero = () => {

  const currency = "Rs.";

  return (
    <section className="bg-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="flex flex-col xl:flex-row gap-8">

          {/* LEFT HERO */}
          <div className="relative flex-1 bg-gray-100 rounded-3xl p-8 sm:p-12 overflow-hidden">

            {/* TEXT CONTENT */}
            <div className="max-w-lg relative z-10">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                New Collection
              </p>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mt-3 text-gray-900">
                Shop smart  <br />
                with confidence
              </h1>

              <p className="text-gray-600 mt-6">
                Discover high-quality products at affordable prices. 
              </p>

              <div className="mt-6">
                <p className="text-sm text-gray-500">Starting from</p>
                <p className="text-3xl font-semibold text-black">
                  {currency} 650
                </p>
              </div>

              <button className="mt-8 bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                Shop Now <ArrowRight size={18} />
              </button>
            </div>

          <img
  src={assets.hero_model_img || assets.Hero}
  alt="hero"
  className="absolute bottom-0 right-0 sm:right-6 `w-[280px] sm:w-[380px] md:w-[420px]` object-contain"
/>

          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="flex flex-col gap-6 w-full xl:max-w-sm">

            {/* CARD 1 */}
            <button className="flex items-center justify-between bg-gray-100 rounded-2xl p-6 hover:shadow-md transition group">

              <div className="text-left">
                <p className="text-xl font-semibold text-gray-900">
                  Best Products
                </p>
                <span className="flex items-center gap-1 text-sm text-gray-600 mt-2">
                  Explore
                  <ArrowRight size={16} className="group-hover:ml-1 transition-all" />
                </span>
              </div>

              <img
                src={assets.hero_img1}
                alt="product1"
                className="w-24 object-contain"
              />

            </button>

            {/* CARD 2 */}
            <button className="flex items-center justify-between bg-gray-100 rounded-2xl p-6 hover:shadow-md transition group">

              <div className="text-left">
                <p className="text-xl font-semibold text-gray-900">
                  Special Offers
                </p>
                <span className="flex items-center gap-1 text-sm text-gray-600 mt-2">
                  Shop Deals
                  <ArrowRight size={16} className="group-hover:ml-1 transition-all" />
                </span>
              </div>

              <img
                src={assets.hero_img2}
                alt="product2"
                className="w-24 object-contain"
              />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;