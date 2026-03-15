import React from 'react'
import { productsDummyData } from '../assets/assets'
import ProductCard from './ProductCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedProducts = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/products')
    window.scrollTo(0,0)
  }

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

      <Title 
        title='Featured Products' 
        subTitle='Discover trending products from ShopBazaar with amazing deals and top quality items.'
      />

      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {productsDummyData.slice(0,4).map((product, index) => (
          <ProductCard key={product._id} product={product} index={index}/>
        ))}
      </div>

      <button
        onClick={handleNavigate}
        className='my-16 px-4 py-2 text-sm font-medium border border-gray-300
        rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'
      >
        View All Products
      </button>

    </div>
  )
}

export default FeaturedProducts