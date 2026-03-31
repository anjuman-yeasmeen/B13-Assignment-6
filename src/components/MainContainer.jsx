import React, { useState, useEffect } from 'react';
import Header from './Header'; 

const MainContainer = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
//   const [cart, setCart] = useState([]);

  
  useEffect(() => {
    fetch('/product.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Data load failed:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      
      
      <Header isActive={activeTab} setIsActive={setActiveTab} />

     
      {activeTab === 'products' ? (
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
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-4 rounded-2xl font-bold transition-all">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 mt-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
           <p className="text-gray-400 text-xl font-medium">Your cart is empty!</p>
        </div>
      )}
    </div>
  );
};

export default MainContainer;