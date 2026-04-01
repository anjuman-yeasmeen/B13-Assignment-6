import { useState } from "react";
import "./App.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar"; 
import Banner from "./components/Banner"; 
import Status from "./components/Status";
import MainContainer from "./components/MainContainer";
import StepSection from "./components/StepSection";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

 
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.name} added to cart! 🛒`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  
  const handleRemoveFromCart = (index) => {
    const productToRemove = cart[index];
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    toast.error(`${productToRemove.name} removed from cart! ❌`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  // ৪. Checkout with Toast
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is already empty!", {
        position: "top-center",
      });
      return;
    }
    setCart([]);
    toast.info("Checkout successful! Cart cleared. ✨", {
      position: "top-center",
    });
  };

  return (
    <>
      
      <ToastContainer />
      
      <Navbar cartCount={cart.length} />
      <Banner />
      <Status />
      
      <MainContainer 
        cart={cart} 
        handleAddToCart={handleAddToCart} 
        handleRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />
      
      <StepSection />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;