import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar"; 
import Banner from "./components/Banner"; 
import Status from "./components/Status";
import MainContainer from "./components/MainContainer";

function App() {
  const [cart, setCart] = useState([]);

 
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to the cart!`);
  };

 
  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is already empty!");
      return;
    }
    setCart([]);
    alert("Checkout successful! Your cart is now empty.");
  };

  return (
    <>
     
      <Navbar cartCount={cart.length} />
      
      
      <Banner />
      <Status />
      
    
      <MainContainer 
        cart={cart} 
        handleAddToCart={handleAddToCart} 
        handleRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />
    </>
  );
}

export default App;