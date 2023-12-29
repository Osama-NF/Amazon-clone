import React from 'react'
import fakeDB from '../util/fakeDB'
import '../styles/CheckoutProduct.css'
import StarRating from './StarRating'
import { MyContext } from './MyContext'

function CheckoutProduct({productID, quantity}) {

  const [basketItems ,setBasketItems] = React.useContext(MyContext)
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

  const controlQuantity = command => {
    if (command === '-') {
      if (quantity === 1) removeFromBasket()
      else setBasketItems({...basketItems, [productID]: basketItems[productID] - 1})
    } else setBasketItems({...basketItems, [productID]: basketItems[productID] + 1})
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
        <p className='checkoutProduct__qnty' >
          <span>
            <button className='amazonBtn' onClick={() => controlQuantity('-')}>-</button>
            <button className='amazonBtn' onClick={() => controlQuantity('+')}>+</button>
          </span>
          Quantity: {quantity}
        </p>
        <button className='amazonBtn' onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct