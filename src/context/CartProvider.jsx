// create provder cart con el context
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
        console.log("item added ",item);
        console.log("cart ",cartItems);
        const product = cartItems.find((cartItem) => cartItem.id === item.id);
        if (product) {
            product.quantity += quantity;
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        console.log("item removed ",id);
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
        console.log("new cart ",newCartItems);
        setCartItems(newCartItems);
    };

    const clear = () => {
        setCartItems([]);
    };

    const isInCart = (id) => {
        const product = cartItems.find((cartItem) => cartItem.id === id);
        return product ? true : false;
    };

    const getTotalPrice = () => {
        return cartItems.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addItem,
            removeItem,
            clear,
            isInCart,
            getTotalPrice,
            getTotalQuantity,
        }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartProvider;