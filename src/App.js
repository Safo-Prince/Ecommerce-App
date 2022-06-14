import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/buttons/Signup";
function App() {
  return (
    <div>
      <Signup />
      <Header />
    </div>
    // <Routes>
    //   <Route to="/" component={Home} />
    //   <Route to="/product" component={Product} />
    //   <Route to="/about" component={About} />
    //   <Route to="/contact" component={Contact} />
    //   <Navigate to="/" component={Home} />
    // </Routes>
  );
}

export default App;
