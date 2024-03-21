import {useState} from 'react';
import Product_list from './actions_product/Product_list/Product_list';

export default function Content() {
    const [cartItems, setCartItems] = useState([]);

    const appendToCart = (item, quantity = 1) => {
        const itemIndex = cartItems.findIndex(value => value.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: quantity
            };
            setCartItems([...cartItems, newItem]);
        } else { 
            const newItem = {
                ...cartItems[itemIndex],
                quantity: cartItems[itemIndex].quantity + quantity
            };
            const newCart = cartItems.slice(); 
            newCart.splice(itemIndex, 1, newItem);
            setCartItems(newCart);
        }
    };

    return (
        <main className="container">
            <Product_list appendToCart={appendToCart} />
        </main>
    );
}