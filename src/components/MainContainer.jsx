import React, { useState, useEffect } from 'react';
import Header from './Header'; 

const MainContainer = ({ cart, handleAddToCart, handleRemoveFromCart, handleCheckout }) => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  // Total Price calculation
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    fetch('/product.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Data load failed:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      
      <Header 
        isActive={activeTab} 
        setIsActive={setActiveTab} 
        cartCount={cart.length} 
      />

      {activeTab === 'products' ? (
        /* --- Product Grid --- */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map(product => (
            <div key={product.id} className="border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all bg-white relative">
              <div className="flex justify-between items-start mb-6">
                <img src={product.icon} alt={product.name} className="w-12 h-12" />
                <span className="px-3 py-1 bg-purple-100 text-[#7C3AED] rounded-full text-xs font-bold uppercase">
                  {product.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-6 h-12 overflow-hidden">{product.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-black">${product.price}</span>
                <span className="text-gray-400 text-sm">/{product.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-sm text-left">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleAddToCart(product)}
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-4 rounded-2xl font-bold transition-all active:scale-95"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* --- Cart Section --- */
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-left text-[#0c1222]">
            Your Cart
          </h2>

          {cart.length > 0 ? (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <ul className="space-y-4">
                  {cart.map((item, idx) => (
                    <li key={idx} className="bg-gray-50 p-6 rounded-2xl flex justify-between items-center transition-all hover:bg-gray-100">
                      <div className="flex items-center gap-4 text-left">
                        <img src={item.icon} alt="" className="w-12 h-12" />
                        <div>
                          <p className="font-bold text-lg text-gray-800">{item.name}</p>
                          <p className="text-sm text-[#7C3AED] font-semibold">${item.price}</p>
                        </div>
                      </div>
                      
                      {/* Trash Icon  */}
                      <button 
                        onClick={() => handleRemoveFromCart(idx)}
                        className="p-3 text-red-500 hover:bg-red-100 rounded-full transition-all"
                        title="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-2xl font-bold text-gray-800">
                    Total Selected Amount: <span className="text-[#7C3AED]">${totalPrice}</span>
                  </div>
                  
                  <button 
                    onClick={handleCheckout}
                    className="w-full md:w-auto px-12 py-4 bg-[#7032ff] text-white rounded-2xl font-bold shadow-lg hover:bg-[#6129e6] transition-all"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* --- Empty Cart State --- */
            <div className="flex flex-col items-center justify-center py-24 bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200">
              <div className="bg-white p-10 rounded-full shadow-lg mb-8">
                {/* Shopping Cart  */}
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#E5E7EB" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-black text-gray-800 mb-3 text-center">Your cart is empty</h3> 
              <button 
                onClick={() => setActiveTab('products')}
                className="px-10 py-4 bg-[#7C3AED] text-white rounded-full font-bold hover:bg-[#6D28D9] transition-all shadow-md"
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MainContainer;