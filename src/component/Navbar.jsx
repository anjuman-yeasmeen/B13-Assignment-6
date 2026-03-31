import React from 'react'

const Navbar = () => {
  return (
    
         <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Navbar Start: Logo & Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a className="text-2xl font-extrabold text-[#7C3AED] cursor-pointer">DigiTools</a>
      </div>
      {/* Navbar Center: Desktop Links (Hidden on small screens) */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium text-gray-600">
          <li>
            <a className="hover:text-[#7C3AED]">Products</a>
          </li>
          <li>
            <a className="hover:text-[#7C3AED]">Features</a>
          </li>
          <li>
            <a className="hover:text-[#7C3AED]">Pricing</a>
          </li>
          <li>
            <a className="hover:text-[#7C3AED]">Testimonials</a>
          </li>
          <li>
            <a className="hover:text-[#7C3AED]">FAQ</a>
          </li>
        </ul>
      </div>
      {/* Navbar End: Icons & Buttons  */}

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle btn-sm">
          <ShoppingCart size={20} />
        </button>
        <a className="btn btn-link no-underline text-gray-700 hover:text-[#7C3AED] normal-case font-semibold">
          Login
        </a>

        <a className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-full px-6 normal-case">
          Get Started
        </a>
      </div>
    </div>
  
      
    
  )
}

export default Navbar
