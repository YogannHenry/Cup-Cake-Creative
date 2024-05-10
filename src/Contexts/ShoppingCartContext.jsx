import React, { createContext, useContext, useState } from 'react';

export const ShoppingCartContext = createContext();
export const useShoppingCart = () => useContext(ShoppingCartContext);



export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItemQuantity, setCartItemQuantity] = useState(0);




    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    const calculateTotalPrice = () => {
        const calculatePrice = cartItems.reduce((total, item) => total + item.price, 0);
        setTotalPrice(calculatePrice);
    }

    const calculateCartItemQuantity = () => {
        const calculateQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartItemQuantity(calculateQuantity);
    }




    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice,
        setTotalPrice,
        calculateTotalPrice,
        calculateCartItemQuantity,
        cartItemQuantity,
    };

   

    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

