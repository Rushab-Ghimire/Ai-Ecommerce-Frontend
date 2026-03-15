import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const ProductCard = ({ product, index }) => {
  return (
    <Link
      to={"/products/" + product._id}
      onClick={() => window.scrollTo(0, 0)}
      className="relative w-full `max-w-[260px]` bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
    >

      {/* Product Image */}
      <div className="w-full h-48 bg-gray-100 overflow-hidden">
        <img
          src={product.images[0]}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Badge */}
      {index % 2 === 0 && (
        <p className="absolute top-3 left-3 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full shadow">
          Best Seller
        </p>
      )}

      {/* Content */}
      <div className="p-4">

        {/* Name + Rating */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 text-sm">
            <img
              src={assets.starIconFilled}
              alt="star"
              className="w-4 h-4"
            />
            <span>{product.rating || 4.5}</span>
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
          <img
            src={assets.categoryIcon}
            alt="category"
            className="w-4 h-4"
          />
          <span>{product.category}</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-semibold text-gray-900">
            ${product.price}
          </p>

          <button
            className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </Link>
  );
};

export default ProductCard