import React from "react";
import "./Hero.css"; 

import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate=useNavigate()
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="buttons">
          <button className="shop-btn" onClick={()=>navigate("/menu")} >Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <p className="available-text">Also Available On</p>
        <div className="brands">
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                    <img src="/amazon.jpeg" alt="Amazon" className="marketplace-logo" />
                </a>
                <a href="https://www.daraz.pk" target="_blank" rel="noopener noreferrer">
                    <img src="/daraz.png" alt="Daraz" className="marketplace-logo" />
                </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/shoes.jpeg" alt="Nike Shoe"  />
      </div>
    </section>
  );
};

export default Hero;
