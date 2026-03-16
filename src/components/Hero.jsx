// import { assets } from "../assets/assets";
// import { Headphones, ShieldCheck, Truck, RotateCcw } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="bg-gray-50 py-10">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* HERO BANNER */}
//         <div className="bg-white rounded-xl p-10 grid md:grid-cols-2 items-center gap-10 shadow">

//           {/* LEFT TEXT */}
//           <div>
//             <h1 className="text-4xl font-bold leading-tight">
//               Your Online  <br /> Shopping Platform !!
//             </h1>

//             <p className="text-gray-500 mt-4 max-w-md">
//               Welcome to ShopBazaar, a place where you can buy everything. Sale every day.
//             </p>

//             <button className="mt-6 bg-black hover:bg-black text-white px-6 py-3 rounded-lg font-medium">
//               Shop Now
//             </button>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="flex justify-center">
//             <img
//               src={assets.Hero}
//               alt="electronics"
//               className="`w-[420px]`"
//             />
//           </div>

//         </div>

//         {/* FEATURE SECTION */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">

//           <div className="flex flex-col items-center gap-2">
//             <Headphones className="text-black" />
//             <p className="font-medium">Responsive</p>
//             <span className="text-sm text-gray-600">
//               Customer service available 24/7
//             </span>
//           </div>

//           <div className="flex flex-col items-center gap-2">
//             <ShieldCheck className="text-black" />
//             <p className="font-medium">Secure</p>
//             <span className="text-sm text-gray-600">
//               Certified marketplace since 2017
//             </span>
//           </div>

//           <div className="flex flex-col items-center gap-2">
//             <Truck className="text-black" />
//             <p className="font-medium">Shipping</p>
//             <span className="text-sm text-gray-600">
//               Free, fast and reliable worldwide
//             </span>
//           </div>

//           <div className="flex flex-col items-center gap-2">
//             <RotateCcw className="text-black" />
//             <p className="font-medium">Transparent</p>
//             <span className="text-sm text-gray-600">
//               Hassle-free return policy
//             </span>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Hero;
import { assets } from "../assets/assets";
import { Headphones, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {

  const images = [
    assets.Hero,
    assets.Hero1,
    assets.Hero2,
    assets.Hero3,
    assets.Hero4
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN HERO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          {/* TEXT SECTION (BIGGER) */}
          <div className="md:col-span-9 bg-white rounded-xl p-15 shadow">

            <div className="flex items-center justify-between gap-8">

              {/* TEXT CONTENT */}
              <div>
                <h1 className="text-5xl font-bold leading-tight">
                  Your Online <br /> Shopping Platform !!
                </h1>

                <p className="text-gray-600 mt-10 max-w-md">
                  Welcome to ShopBazaar, a place where you can buy everything. 
                  Sale every day.
                </p>

                <button className="mt-10 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition">
                  Shop Now
                </button>
              </div>

              {/* IMAGE IN TEXT SECTION */}
              <img
                src={assets.shop}
                alt="shopping"
                className="w-70 object-contain"
              />

            </div>

          </div>


          {/* SLIDER SECTION (SMALLER) */}
          <div className="md:col-span-3 bg-white rounded-xl p-9 shadow flex flex-col items-center">

            <div className="relative w-full h-[320px] overflow-hidden flex items-center justify-center">

              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="banner"
                  className={`absolute w-full h-full object-cover transition-all duration-700
                  ${currentImage === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                  }`}
                />
              ))}

            </div>

            {/* DOTS */}
            <div className="flex gap-2 mt-4">
              {images.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`cursor-pointer rounded-full transition-all
                  ${currentImage === index
                    ? "w-5 h-2 bg-black"
                    : "w-2 h-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

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


        {/* FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">

          <div className="flex flex-col items-center gap-2">
            <Headphones />
            <Headphones className="text-black" />
            <p className="font-medium">Responsive</p>
            <span className="text-sm text-gray-600">
              Customer service available 24/7
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ShieldCheck />
            <ShieldCheck className="text-black" />
            <p className="font-medium">Secure</p>
            <span className="text-sm text-gray-600">
              Certified marketplace since 2017
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Truck />
            <Truck className="text-black" />
            <p className="font-medium">Shipping</p>
            <span className="text-sm text-gray-600">
              Free, fast and reliable worldwide
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <RotateCcw />
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