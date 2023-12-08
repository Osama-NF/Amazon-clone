import React, { useContext } from 'react'
import '../styles/Product.css'
import { MyContext } from './MyContext'
import fakeDB from '../util/fakeDB'
import StarRating from './StarRating'

function Product({productID}) {
  const [basketItems, setBasketItems] = useContext(MyContext)
  const title = fakeDB[productID].title;
  const price = fakeDB[productID].price;
  const rating = fakeDB[productID].rating;
  const image = fakeDB[productID].image;

  const addToBasket = () => {
    if (productID in basketItems){
      setBasketItems({...basketItems, [productID]: basketItems[productID] + 1})
    } else {
      setBasketItems({...basketItems, [productID]: 1})
    }
  }

  return (
    <div className='product' id={productID}>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <strong>{price}</strong>
          <small>SAR</small>
        </p>
        <StarRating rating={rating}/>
      </div>

      <img 
      className='product__image'
      src={image}
      />
      
      <button className='amazonBtn' onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product