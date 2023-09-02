import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './MyApp.css'
import MyHeader from './components/MyHeader';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';
import Examples from './pages/Examples';
import Products from './pages/Products';

function MyApp() {
  return (
    <Router>
        <MyHeader />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/examples" element={<Examples/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
        </Routes>
    </Router>
  )
}

export default MyApp;
