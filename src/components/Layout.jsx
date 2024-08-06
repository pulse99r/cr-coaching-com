import React from 'react'
import ReactDOM from "react-dom/client"
import { Routes, Route } from "react-router-dom";
import Nav from './nav/Nav'
import Home from './Home'
import About from "./About";
import Services from "./Services";
import References from "./References"
import Contact from "./Contact";
import "./Layout.css"
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="references" element={<References />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default Layout;
