
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShoppingCart, User, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full">

      {/* TOP CONTACT BAR */}
      <div className="bg-gray-100 text-sm text-gray-600 py-2 px-6 flex justify-between">
        <div className="flex gap-6">
          <p>11 Sunaulo Marg, Dharan </p>
          <p>+2 (555) 025-4567</p>
        </div>

        <div className="flex gap-4 items-center">
          <p>Nepalese Rupee</p>
          <p>Nepali</p>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="flex items-center justify-between px-10 py-4 bg-white">

        {/* LOGO */}
         <Link to='/'>
          <img src={assets.logo} alt="logo" className={"h-12"}/>
        </Link>

        {/* SEARCH */}
        <div className="hidden lg:flex items-center border rounded-md px-8 py-2 `w-[400px] border-black`">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full outline-none"
          />
          <Search size={30} />
        </div>

        {/* CART + ACCOUNT */}
        <div className="flex items-center gap-6">

          <div className="flex items-center gap-2 cursor-pointer">
            <ShoppingCart />
            <span>Cart</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <User />
            <span>Account</span>
          </div>

        </div>

      </div>

      {/* CATEGORY NAVBAR */}
      <div className="bg-black text-white px-10 py-3 flex justify-between text-sm font-medium">

        <div className="flex gap-8">
          <Link to="/">All Categories</Link>
          <Link to="/">Products</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Contact</Link>
        </div>

        <div className="flex gap-8">
          <Link to="/">LIMITED SALE</Link>
          <Link to="/">Best Seller</Link>
          <Link to="/">New Arrival</Link>
        </div>

      </div>

    </header>
  );
};

export default Navbar;