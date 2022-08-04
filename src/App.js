import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import CartItems from "./components/CartItems";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<CartItems />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
