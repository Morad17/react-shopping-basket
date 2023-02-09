import React from 'react'
import { ShopContext } from '../context/shop-context' 
import { useState, useEffect, useContext } from 'react'

import { PRODUCTS } from '../assets/data/products'

const Shop = () => {

  const { addToBasket, basketItems } = useContext(ShopContext)

  
  return (
    <div className="shop">
      <div className="title">
        <h1>The Shop</h1>
      </div>
      <div className="products">
        {
          PRODUCTS.map((product, key) => {
            const basketItemAmount = basketItems[product.id]

            return(
              <div className="product-card" key={key}>
              <h3>{product.name}</h3>
              <p>Price: £{product.price}</p>
              <button className="add-to-basket-button" onClick={() => addToBasket(product.id)}>
                Add To Basket {basketItemAmount > 0 && <>({basketItemAmount})</>}
              </button>

            </div>
            )
            
          })
        }
      </div>
    </div>
  )
}

export default Shop