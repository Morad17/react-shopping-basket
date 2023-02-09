import React, {createContext, useState} from "react";
import { PRODUCTS } from "../assets/data/products";

export const ShopContext = createContext(null)

const getDefaultBasket = () => {
    let basket = {}
    for (let i=1; i< PRODUCTS.length + 1; i++) {
        basket[i] = 0
    }
    return basket
}

export const ShopContextProvider = (props) => {
    const [basketItems, setBasketItems] = useState(getDefaultBasket())

    const addToBasket = (itemId) => {
        setBasketItems((prev) => ({...prev, [itemId]:prev[itemId] +1}))
    }
    const removeFromBasket = (itemId) => {
        setBasketItems((prev) => ({...prev, [itemId]:prev[itemId] -1}))
    }

    const contextValue = {basketItems, addToBasket, removeFromBasket}

    console.log(basketItems)
    return <ShopContext.Provider className="" value={contextValue}>{props.children}</ShopContext.Provider>
}