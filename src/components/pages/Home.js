import React from 'react'
import CardGroup from '../CardGroup'
import Carousel from '../Carousel'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'


const Home = () => {
  return (
   <>
   <div className='container-fluid'>
   <Navbar/>
   <div className='customMargin'>
   <Carousel/>
   <CardGroup/>
   </div>
   </div>
   </>
  )
}

export default Home