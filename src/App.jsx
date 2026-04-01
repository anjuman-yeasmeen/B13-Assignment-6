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

  return (
    <>
      
      <Navbar cartCount={cart.length} />
      <Banner />
      <Status />
    
      <MainContainer 
        cart={cart} 
        handleAddToCart={handleAddToCart} 
      />
    </>
  );
}

export default App;