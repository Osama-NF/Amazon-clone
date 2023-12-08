import React from 'react'
import fakeDB from '../util/fakeDB'
import '../styles/CheckoutProduct.css'
import StarRating from './StarRating'
import { MyContext } from './MyContext'

function CheckoutProduct({productID, quantity}) {

  const [,setBasketItems] = React.useContext(MyContext)
  const title = fakeDB[productID].title
  const price = fakeDB[productID].price
  const rating = fakeDB[productID].rating
  const image = fakeDB[productID].image

  const removeFromBasket = () => {
    
    setBasketItems(prev => {
      delete prev[productID]
      return {...prev}
    } )
  }


  return (
    <div className='checkoutProduct'>
      <img src={image}/>

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <strong>{price}</strong>
          <small>SAR</small>
        </p>
        <StarRating rating={rating}/>
        <p>should style later and add quantity control in this page --- Quantity: {quantity}</p>
        <button className='amazonBtn' onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct