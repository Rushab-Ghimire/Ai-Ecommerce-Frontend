import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 pt-12 px-6 md:px-16 lg:px-24 xl:px-32">

      {/* Top Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <img src={assets.logo} alt="logo" className="h-15 mb-4" />

          <p className="text-sm">
            Your one-stop online shop for fashion, electronics, and everyday
            essentials. Discover great deals and fast delivery.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <img src={assets.instagram} alt="instagram" className="w-5 cursor-pointer hover:scale-110 transition" />
            <img src={assets.facebook} alt="facebook" className="w-5 cursor-pointer hover:scale-110 transition" />
            <img src={assets.twitter} alt="twitter" className="w-5 cursor-pointer hover:scale-110 transition" />
            <img src={assets. linkedin} alt="linkedin" className="w-5 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">SHOP</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#">Men Fashion</a></li>
            <li><a href="#">Women Fashion</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">New Arrivals</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">CUSTOMER SERVICE</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Order Tracking</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">NEWSLETTER</h3>

          <p className="text-sm mb-3">
            Subscribe to get updates on new products and special offers.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 px-3 py-2 rounded-l outline-none"
            />

            <button className="bg-black text-white px-4 rounded-r hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

        <p>© {new Date().getFullYear()} ShopBazaar. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Sitemap</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;