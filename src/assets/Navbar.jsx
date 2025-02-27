import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <header className="text-white body-font bg-[#101828]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-white">e-commerse</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to={'/'} className="mr-5 hover:text-yellow-300 hover:cursor-pointer  hover:text-xl scale-105 transition-transform duration-300">{"Home"}</Link>
          <Link to={'/product+categories'} className="mr-5 hover:text-yellow-300 hover:cursor-pointer hover:text-xl hover:scale-105 transition-transform duration-300">{"Category"}</Link>

        </nav>
        <div className="border rounded-lg w-[160px] flex items-center px-2 relative container mx-auto gap-[20px]">
          <input className="border-none outline-none flex-grow p-1" type="text" placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass text-gray-500 absolute right-2"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>



        <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Call
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
