import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (element) => {
    const matchedProduct = cart.filter((product) => product.sku === element.sku)
    if (!matchedProduct.length > 0) {
      setCart([...cart, element])
    } else {
      setCart(
        cart.map((product) =>
          product.sku === element.sku
            ? { ...product, quantity: product.quantity + element.quantity }
            : product
        )
      )
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
