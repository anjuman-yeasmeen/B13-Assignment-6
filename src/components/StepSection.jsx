import React from 'react';
import { UserPlus, Box, Rocket } from 'lucide-react';

const StepSection = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: <UserPlus size={32} className="text-[#7C3AED]" />,
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: <Box size={32} className="text-[#7C3AED]" />,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: <Rocket size={32} className="text-[#7C3AED]" />,
    }
  ];

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#111827] mb-3">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mb-12">Start using premium digital tools in minutes, not hours.</p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative p-10 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              {/* Step Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#7C3AED] text-white text-xs font-bold rounded-full flex items-center justify-center">
                {step.id}
              </div>
              
              {/* Icon Container */}
              <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-[#111827] mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepSection;