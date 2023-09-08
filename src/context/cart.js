import React from "react";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false); // Corrected variable name
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const addToCart = (item, size) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.id === item.id && cartItem.size === size
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === size
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1, size }]); // Include the size and price in the cart item
    }
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
  };
  const updateQuantity = (product, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(product);
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === product.id && cartItem.size === product.size
            ? {
                ...cartItem,
                quantity: newQuantity,
              }
            : cartItem
        )
      );
    }
  };

  const getCartTotal = () => {
    const total = cartItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    // Convert the total to a string with two decimal places
    return total.toFixed(2);
  };

  // Use useEffect to log the updated state
  useEffect(() => {
    console.log("Updated Cart Items:", cartItems);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getCartTotal,
        showModal,
        setShowModal,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
