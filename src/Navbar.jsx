import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png"; 
import "./Navbar.css"; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Nike Logo" className="logo" />
            <ul className="nav-links">
                <li>
                    <Link to="/" className="nav-item">Home</Link>  
                    <Link to="/menu" className="nav-item">Menu</Link>
                    <Link to="/contact " className="nav-item">Contact</Link> 
                </li>
            </ul>
            <button className="login-btn">
                <Link to="/login" className="login-link">Login</Link>
            </button>
        </nav>
    ); 
};

export default Navbar;
