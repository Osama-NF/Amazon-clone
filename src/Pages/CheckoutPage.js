import React from 'react'
import '../styles/Checkout.css'
import { MyContext } from '../components/MyContext'
import CheckoutProduct from '../components/CheckoutProduct'
import Subtotal from '../components/Subtotal'
import Header from '../components/Header'

function CheckoutPage() {

    const [basketItems, ] = React.useContext(MyContext)

  return (
    <>
        <Header />
        <div className='checkout'>

            <div className='checkout__left'>
                <img 
                className='checkout__ad'
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                />
                {
                    basketItems.length == 0 ? (
                        <div>
                            <h2 className='checkout__title'>Your shopping basket is empty</h2>
                            <p>
                                You have no items in your basket. 
                                To buy one or more items, 
                                click "Add to basket" next to the item.
                            </p>
                        </div>
                    ): (
                        <div>
                            <h2 className='checkout__title'>Your shopping basket</h2>    
                            {
                                Object.keys(basketItems).map(productID => {
                                    return (
                                        <CheckoutProduct
                                        key={productID}
                                        productID={productID}
                                        quantity={basketItems[productID]}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>

            <div className='checkout__right' >
                <Subtotal />
            </div>
        </div>
    </>
  )
}

export default CheckoutPage