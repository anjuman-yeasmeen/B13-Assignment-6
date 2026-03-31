import React from 'react';

const Stats = () => {
  return (
    <div className="bg-[#7C3AED] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center text-center">
        
        {/* Active Users */}
        <div className="text-white space-y-1">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">50K+</h2>
          <p className="text-purple-100 text-lg opacity-90">Active Users</p>
        </div>

        {/* Premium Tools */}
        <div className="text-white space-y-1">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">200+</h2>
          <p className="text-purple-100 text-lg opacity-90">Premium Tools</p>
        </div>

        {/* Rating */}
        <div className="text-white space-y-1">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">4.9</h2>
          <p className="text-purple-100 text-lg opacity-90">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;