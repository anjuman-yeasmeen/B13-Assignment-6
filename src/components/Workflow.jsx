import React from 'react';

const Workflow = () => {
  return (
    <section className="py-20  pb-0 px-0">
     
      <div className="w-full bg-[#8B5CF6]  py-16 px-6 text-center text-white shadow-2xl overflow-hidden relative">
        
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>
        
      
        <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

       
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <button className="bg-white text-[#8B5CF6] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all active:scale-95 shadow-lg">
            Explore Products
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#8B5CF6] transition-all active:scale-95">
            View Pricing
          </button>
        </div>

        
        <p className="text-purple-200 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>

        
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Workflow;