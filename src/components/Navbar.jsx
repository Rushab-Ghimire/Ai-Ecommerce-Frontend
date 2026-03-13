import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 bg-white text-black shadow-md sticky top-0 z-50 transition-all">
    
    {/* logo */}
    <Link to='/'>
     <img className="h-12 w-auto object-contain" src={assets.logo} alt="logo"/>
    </Link>

    {/* Mobile View */}
    <div id="mobile-menu" class="hidden absolute top-16 left-0 w-full bg-black text-white shadow-lg py-6 flex-col items-start gap-4 px-6 text-lg md:hidden">
        <a href="#" className="hover:text-black transition">Home</a>
        <a href="#" className="hover:text-black transition">Product Catogories</a>
        <a href="#" className="hover:text-black transition">Customer Service</a>

        <button class="cursor-pointer px-5 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-full font-medium">
            Login
        </button>
    </div>

    {/* Desktop Nav */}
    <div className="hidden sm:flex items-center gap-10 text-lg font-medium">

        <a href="#" className="hover:text-black transition">Home</a>
        <a href="#" className="hover:text-black transition">Product Catogories</a>
        <a href="#" className="hover:text-black transition">Customer Service</a>

        <div class="hidden lg:flex items-center text-sm gap-2 border border-black px-3 py-1.5 bg-white backdrop-blur">
            <input 
            class="w-40 bg-transparent outline-none placeholder-black text-black"
            type="text"
            placeholder="Search Products"
            />
            <img className="w-9 h-7 bg-black opacity-800" src={assets.searchIcon} alt="Search Products" />     
        </div>  
        <div className='relative cursor-pointer'>
            <img className='h-9 rounded-3xl' src={assets.cart} ></img>
            
        </div>
        <button class="cursor-pointer px-4 py-1 bg-black hover:bg-blue-900 text-white transition rounded-full font-semibold shadow-md">
            Login
        </button>

    </div>

    </nav>
  )
}

export default Navbar