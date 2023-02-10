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

    const getTotalBasketAmount = () => {
        let totalAmount = 0
        for (const item in basketItems) {
            if (basketItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += basketItems[item] * itemInfo.price
            }
        }

        return totalAmount
    }
    const addToBasket = (itemId) => {
        setBasketItems((prev) => ({...prev, [itemId]:prev[itemId] +1}))
    }
    const removeFromBasket = (itemId) => {
        setBasketItems((prev) => ({...prev, [itemId]:prev[itemId] -1}))
    }

    const updateBasketItemCount = (newAmount, itemId) => {
        setBasketItems((prev) => ({...prev, [itemId] : newAmount}))
    }

    const contextValue = {basketItems, addToBasket, removeFromBasket, updateBasketItemCount, getTotalBasketAmount}

    console.log(basketItems)
    return <ShopContext.Provider className="" value={contextValue}>{props.children}</ShopContext.Provider>
}