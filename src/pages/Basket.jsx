import React, {useContext} from 'react'

import { PRODUCTS } from '../assets/data/products'
import BasketItem from '../components/BasketItem'
import { ShopContext } from '../context/shop-context' 

const Basket = () => {

  const { basketItems } = useContext(ShopContext)

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
    </div>
  )
}

export default Basket