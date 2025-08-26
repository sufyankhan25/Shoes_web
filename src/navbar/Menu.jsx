import React, { useState } from "react";
import "../Menu.css";

function Menu() {
    const [cart, setCart] = useState([]); // Cart state

    const shoes = [
        { id: 1, name: "Nike Air Max", price: 150, image: "/Nike-Air-Max.jpeg" },
        { id: 2, name: "Adidas Ultra Boost", price: 180, image: "/Adidas-Ultra-Boost.jpeg" },
        { id: 3, name: "Puma RS-X", price: 120, image: "/Puma-RS-X.jpeg" },
    ];

    // Function to add shoe to cart
    const addToCart = (shoe) => {
        setCart([...cart, shoe]);
        alert(`${shoe.name} added to cart!`);
    };

    // Function to remove a single item from cart
    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart([]);
    };

    // Calculate total price
    const totalPrice = cart.reduce((sum, shoe) => sum + shoe.price, 0);

    return (
        <div className="menu-container">
            <h1 className="menu-title">Shoes Menu</h1>
            <ul className="shoe-list">
                {shoes.map((shoe) => (
                    <li key={shoe.id} className="shoe-card">
                        <img src={shoe.image} alt={shoe.name} className="shoe-image" />
                        <h3 className="shoe-name">{shoe.name}</h3>
                        <p className="shoe-price">${shoe.price}</p>
                        <button 
                            className="buy-button" 
                            onClick={() => addToCart(shoe)}
                        >
                            Buy Now
                        </button>
                    </li>
                ))}
            </ul>

            {/* Cart Section */}
            {cart.length > 0 && (
                <div className="cart-container">
                    <h2>Your Cart</h2>
                    <ul className="cart-list">
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                {item.name} - ${item.price}
                                <button 
                                    className="remove-button" 
                                    onClick={() => removeFromCart(index)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total Price: ${totalPrice}</h3>
                    <button className="checkout-button" onClick={() => alert("Proceeding to Checkout")}>
                        Proceed to Checkout
                    </button>
                    <button className="clear-cart-button" onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
}

export default Menu;
