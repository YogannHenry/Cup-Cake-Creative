import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useShoppingCart } from '../../../Contexts/ShoppingCartContext';
import SbButton from '../../reusableUX/button';
import { formatPrice } from '../../../utils/maths';

const ShoppingCart = () => {

    const { cartItems, removeFromCart, totalPrice, cartItemQuantity, setTotalPrice, calculateTotalPrice } = useShoppingCart();

    console.log(cartItems);
    useEffect(() => {
        calculateTotalPrice();
    }, [cartItems, calculateTotalPrice]);

    return (
        <ShoppingCartContainer>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                <ul>
                    {cartItems.map((cupcake, index) => (
                        <>
                        <li key={index}>{cupcake.title}</li>
                        <SbButton onClick={() => removeFromCart(cupcake.id)} title="delete">Remove</SbButton>
                        </>
                    ))}
                </ul>
            )}
            <p>Total Price: ${formatPrice(totalPrice)}</p>
        </ShoppingCartContainer>
    );
};

export default ShoppingCart;




// *************************** CSS *************************** //
// *************************** CSS *************************** //
// *************************** CSS *************************** //

const ShoppingCartContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    background-color: #f2f2f2;
    padding: 20px;
`;

// *************************** CSS *************************** //
// *************************** CSS *************************** //
// *************************** CSS *************************** //

