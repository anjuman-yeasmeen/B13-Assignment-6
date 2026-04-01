import React from 'react'

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <a className="text-2xl font-extrabold text-[#7C3AED] cursor-pointer tracking-tight">DigiTools</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium text-gray-600">
          <li><a className="hover:text-[#7C3AED] transition-colors">Products</a></li>
          <li><a className="hover:text-[#7C3AED] transition-colors">Features</a></li>
          <li><a className="hover:text-[#7C3AED] transition-colors">Pricing</a></li>
          <li><a className="hover:text-[#7C3AED] transition-colors">Testimonials</a></li>
          <li><a className="hover:text-[#7C3AED] transition-colors">FAQ</a></li>
        </ul>
      </div>
      
      <div className="navbar-end gap-2">
        
        <div className="indicator mr-4">
          <span className="indicator-item badge badge-secondary badge-sm text-white font-bold">
            {cartCount || 0}
          </span>
          <button className="btn btn-ghost btn-circle btn-sm p-0">
          
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>

        <a className="hidden sm:inline-flex btn btn-link no-underline text-gray-700 hover:text-[#7C3AED] normal-case font-semibold">
          Login
        </a>

        <a className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-full px-6 normal-case text-sm md:text-base">
          Get Started
        </a>
      </div>
    </div>
  )
}

export default Navbar;