import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Menu from "./navbar/Menu"; 
import Login from "./Login";
import Contact from "./navbar/Contact";

function App() {
    return (
        <Router>
            <Navbar />
            
            <Routes>
            <Route path="/" element={<Hero />} /> 
                <Route path="/menu" element={<Menu />} /> 
                <Route path='/login' element={<Login/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;
