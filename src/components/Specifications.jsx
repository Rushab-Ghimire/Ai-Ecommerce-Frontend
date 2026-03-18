import { Truck, RotateCcw, Headphones } from "lucide-react";

const Specifications = () => {
  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-gray-900">
          Our Specifications
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We offer top-tier service and convenience to ensure your shopping experience is smooth, secure and completely hassle-free.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* CARD 1 */}
          <div className="relative bg-green-50 border border-green-200 rounded-2xl p-8 text-center hover:shadow-md transition">

            {/* ICON */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white p-3 rounded-lg shadow">
              <Truck size={20} />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              Free Shipping
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              Enjoy fast, free delivery on every order no conditions, just reliable doorstep.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="relative bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center hover:shadow-md transition">

            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white p-3 rounded-lg shadow">
              <RotateCcw size={20} />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              7 Days Easy Return
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              Change your mind? No worries. Return any item within 7 days.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="relative bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center hover:shadow-md transition">

            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-500 text-white p-3 rounded-lg shadow">
              <Headphones size={20} />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              24/7 Customer Support
            </h3>

            <p className="text-gray-600 mt-3 text-sm">
              We're here for you. Get expert help with our customer support.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Specifications;