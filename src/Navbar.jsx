import React from "react";
import { Link } from "react-router-dom";   // ✅ Required import
import "./Navbar.css"; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="/logo.png" alt="Nike Logo" className="logo" />
            <ul className="nav-links">
                <li>
                    <Link to="/" className="nav-item">Home</Link>  
                    <Link to="/menu" className="nav-item">Menu</Link>
                    <Link to="/contact" className="nav-item">Contact</Link> 
                </li>
            </ul>
            <Link to="/login" className="login-btn">Login</Link> {/* Styled as button */}
        </nav>
    ); 
};

export default Navbar;
