import React, { useContext } from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { Search, ShoppingBasket } from '@mui/icons-material'
import { MyContext } from './MyContext'

function Header() {

    const [basketItems] = useContext(MyContext)

    const getBasketLength = () => {
        let total = 0;
        for (const [productID, quantity] of Object.entries(basketItems)) {
            total += quantity
        }
        return total
    }

  return (
    <nav className='header'>
        <Link to='/'>
            <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
        </Link>

        <div className='header__search'>
            <input type='text' className='header__searchInput' />
            <Search className='header__searchIcon'/>
        </div>

        <div className='header__nav'>
            
            <Link to='/login' className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello,</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
            </Link>
            
            <Link to='/' className='header__link'>
                <div className='header__option'> 
                    <span className='header__optionLineOne'>Return</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
            </Link>
            
            <Link to='/' className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>
            
            <Link to='/checkout' className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBasket />
                    <span className='header__optionLineTwo header__basketCount'>{getBasketLength()}</span>
                </div> 
            </Link>
        </div>

    </nav>
  )
}

export default Header