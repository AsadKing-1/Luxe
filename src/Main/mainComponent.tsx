import { Routes, Route } from "react-router-dom";

import "./main.css"

import Cart from "../components/cart/cart";
import Loader from "../components/loader/loader";
import Catalog from "../components/catalog/catalog";
import Header from "../components/header/header";
import About from "../components/About/about";
import Main from "../components/main/main";
import Contact from "../components/Contact/contact";


export function Main_Component() {
    return (
        <>
            <Loader />
            <Header />
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}