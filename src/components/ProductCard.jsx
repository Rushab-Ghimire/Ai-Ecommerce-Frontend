
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const ProductCard = ({ product, index }) => {
  return (
    <Link
      to={"/products/" + product._id}
      onClick={() => window.scrollTo(0, 0)}
      className="relative w-full max-w-[260px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col"
    >

      {/* Product Image */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.images[0]}
          alt="product"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Badge */}
      {index % 2 === 0 && (
        <p className="absolute top-3 left-3 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full shadow">
          Best Seller
        </p>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">

        {/* Name + Rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-gray-800 leading-snug line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 text-sm text-gray-700 whitespace-nowrap">
            <img
              src={assets.starIconFilled}
              alt="star"
              className="w-4 h-4"
            />
            <span>{product.rating || 4.5}</span>
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
          <img
            src={assets.categoryIcon}
            alt="category"
            className="w-4 h-4"
          />
          <span>{product.category}</span>
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-semibold text-gray-900">
            NPR. {product.price}
          </p>

          <button
            className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition whitespace-nowrap"
          >
            Add to Cart
          </button>
        </div>

      </div>

    </Link>
  );
};

export default ProductCard;