import React from 'react'
import  '../styles/HomePage.css'
import Product from '../components/Product'
import Header from '../components/Header'

function HomePage() {
  return (
    <>

      <Header />    
      <div className='home'>
        <img
        className='home__img'
        src='https://m.media-amazon.com/images/I/7139ZnS75+L._SX3000_.jpg'/>

        <div className='home__row'>
          <Product productID={123}/>
          <Product productID={155}/>
          <Product productID={23432}/>
        </div>

        <div className='home__row'>
          <Product productID={3434}/>
          <Product productID={6126}/>
        </div>

        <div className='home__row'>
          <Product productID={4567}/>
          <Product productID={274576}/>
          <Product productID='324234234'/>
        </div>

        <div className='home__row'>
          <Product productID='55555'/>
        </div>

      </div>
    </>
  )
}

export default HomePage