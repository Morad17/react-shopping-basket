import React from 'react'

const BasketItem = (props) => {
    const {id, name, price, productImage } = props.data

  return (
    <div className="basket-item">
        <div className="description">
            <p> {name} </p>
            <p>{price} </p>
        </div>
    </div>
  )
}

export default BasketItem