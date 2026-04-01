import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      theme: "light",
      buttonClass: "bg-[#7C3AED] text-white hover:bg-[#6D28D9]",
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      theme: "dark",
      isPopular: true,
      buttonClass: "bg-white text-[#7C3AED] hover:bg-gray-100",
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      theme: "light",
      buttonClass: "bg-[#7C3AED] text-white hover:bg-[#6D28D9]",
    }
  ];

  return (
    <section className="py-20 bg-white text-center" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#111827] mb-2">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mb-12">Choose the plan that fits your needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-2xl relative border transition-all duration-300 ease-out 
                ${plan.theme === 'dark' 
                  ? 'bg-[#8B5CF6] text-white border-[#A855F7] md:scale-105 hover:-translate-y-2 hover:shadow-lg' 
                  : 'bg-white text-[#111827] border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md'
                }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FEF3C7] text-[#D97706] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.theme === 'dark' ? 'text-purple-100' : 'text-gray-400'}`}>{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-sm opacity-70"> /Month</span>
              </div>
              
              <ul className="text-left space-y-3 mb-10 h-64">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check size={16} className={plan.theme === 'dark' ? 'text-white' : 'text-green-500'} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;