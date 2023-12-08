import React from 'react'
import { MyContext } from './MyContext'
import '../styles/Subtotal.css'
import BasketTotal from './BasketTotal';

function Subtotal() {

    const [basketItems, setBasketItems ] = React.useContext(MyContext);

    return (
    <div className='subtotal'>
        <p>
            Subtotal ({basketItems.length} items): <strong>{<BasketTotal />}</strong><small>SAR</small>
        </p>
        
        <small className='subtotal__gift'>
            <input type='checkbox'/> This order contains a gift
        </small>

        <button className='amazonBtn'>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal