import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'
import AllProducts from './pages/AllProducts'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<AllProducts/>}/>
        </Routes>
        
      </div>
      <Footer />
    </div>
  )
}

export default App