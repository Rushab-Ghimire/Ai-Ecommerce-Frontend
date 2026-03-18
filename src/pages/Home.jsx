import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Specifications from '../components/Specifications'
import CategoriesMarquee from '../components/CategoriesMarquee'
import NewsLetter from '../components/NewsLetter'
const Home = () => {
  return (
    <div>
        <Hero />
        <CategoriesMarquee/>
        <FeaturedProducts/>
        <Specifications/>
        <NewsLetter/>
        
    </div>
  )
}

export default Home