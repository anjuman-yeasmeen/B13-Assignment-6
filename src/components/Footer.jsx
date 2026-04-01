import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-400 py-16 px-6 border-t border-gray-800 mt-0">
      <div className="max-w-7xl mx-auto">
        
        {/* বড় স্ক্রিনে (lg) আপনার আগের মতোই ৫টি কলাম এক লাইনে থাকবে (flex-nowrap) */}
        {/* ছোট স্ক্রিনে (default) এটি ১টি কলামে চলে আসবে (grid-cols-1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-nowrap justify-between gap-10 mb-16 text-left">
          
          {/* Column 1: Logo & Description - বড় স্ক্রিনে ৩০০ পিক্সেলই থাকবে */}
          <div className="w-full lg:w-[300px] shrink-0">
            <h2 className="text-white text-3xl font-bold mb-6 tracking-tight">DigiTools</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="min-w-[120px]">
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Features</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
              <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="min-w-[120px]">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press</li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="min-w-[120px]">
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Community</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Column 5: Social Links - বড় স্ক্রিনে auto উইডথ থাকবে */}
          <div className="w-full lg:w-auto shrink-0">
            <h4 className="text-white font-semibold mb-6">Social Links</h4>
            <div className="flex gap-3">
              <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black hover:bg-purple-200 transition-all cursor-pointer shadow-lg shrink-0">
                <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new.png" alt="IG" className="w-5 h-5" />
              </div>
              <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black hover:bg-purple-200 transition-all cursor-pointer shadow-lg shrink-0">
                <img src="https://img.icons8.com/material-outlined/24/000000/facebook-f.png" alt="FB" className="w-5 h-5" />
              </div>
              <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black hover:bg-purple-200 transition-all cursor-pointer shadow-lg shrink-0">
                <img src="https://img.icons8.com/ios-filled/24/000000/x.png" alt="X" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-4 md:gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;