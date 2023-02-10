import React, { useContext }from 'react'
import { ShopContext } from '../context/shop-context' 

const BasketItem = (props) => {
    const {id, name, price, productImage } = props.data
    const { basketItems, addToBasket, removeFromBasket, updateBasketItemCount } = useContext(ShopContext)

  return (
    <div className="basket-item">
        <div className="description">
            <p> {name} </p>
            <p>£{price} </p>
            <div className="count-handler">
              <buton onClick={()=> removeFromBasket(id)}>-</buton>
              <input value={basketItems[id]} onChange={(e)=> updateBasketItemCount(Number(e.target.value), id)}/>
              <buton onClick={()=> addToBasket(id)}>+</buton>
            </div>
        </div>
    </div>
  )
}

export default BasketItem