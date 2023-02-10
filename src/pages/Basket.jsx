import React, {useContext} from 'react'

import { PRODUCTS } from '../assets/data/products'
import BasketItem from '../components/BasketItem'
import { ShopContext } from '../context/shop-context' 

import { useNavigate } from 'react-router-dom'

const Basket = () => {

  const { basketItems, getTotalBasketAmount } = useContext(ShopContext)
  const totalAmount = getTotalBasketAmount()

  const navigate = useNavigate()

  return (
    <div className="basket">
      <div className="">
        <h1>Your Basket Items</h1>
      </div>
      <div className="basket-items">
        {
          PRODUCTS.map((product, key)=> {
            if (basketItems[product.id] !== 0) {
              return <BasketItem data={product} />
            }
          })
        }
      </div>
    { totalAmount > 0 ?
      <div className="checkout">
        
        <p>Subtotal: £{totalAmount}</p>
        <button onClick={() => navigate("/shop")}>Continue Shopping</button>
        <button>Checkout</button>
      </div> 
      : <h1>Your Basket Is Empty!</h1>}
    </div>
   
  )
}

export default Basket