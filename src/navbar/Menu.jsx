import React from "react";
import NikeAir from "../assets/Nike-Air-Max.jpeg";
import Adidas from "../assets/Adidas-Ultra-Boost.jpeg";
import Puma from "../assets/Puma-RS-X.jpeg";
import "../Menu.css"; 

function Menu() {
    const shoes = [
        { id: 1, name: "Nike Air Max", price: "$150", image: NikeAir },
        { id: 2, name: "Adidas Ultra Boost", price: "$180", image: Adidas },
        { id: 3, name: "Puma RS-X", price: "$120", image: Puma },
    ];

    return (
        <div className="menu-container">
            <h1 className="menu-title">Shoes Menu</h1>
            <ul className="shoe-list">
                {shoes.map((shoe) => (
                    <li key={shoe.id} className="shoe-card">
                        <img src={shoe.image} alt={shoe.name} className="shoe-image" />
                        <h3 className="shoe-name">{shoe.name}</h3>
                        <p className="shoe-price">{shoe.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
