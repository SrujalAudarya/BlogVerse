import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = ({isDark, toggleTheme}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShowSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className='w-full px-[8%] lg:px-[12%] py-5 flex items-center justify-between bg-white dark:bg-black transition-colors duration-500 fixed top-0 left-0 z-[9999]'>

      <Link to='/' className='no-underline'>
        <div className='flex items-center space-x-2'>
          <div className='bg-gray-800 p-2 px-3 rounded-lg'>
            <i className='bi bi-substack text-white text-2xl'></i>
          </div>

          <h1 className='text-3xl font-bricolage font-bold tracking-widest text-black dark:text-white'>
            Blog<span className='text-[#f4e005]'>Verse</span>
          </h1>
        </div>
      </Link>

      <ul className="hidden nav-menu lg:flex items-center space-x-6 text-sm font-medium text-black dark:text-white">
        <li className="hover:text-yellow-400 text-lg cursor-pointer">
          <Link to="">
            <i className="bi bi-house-door-fill mr-1">
              Home
            </i>
          </Link>
        </li>

        <li className="hover:text-yellow-400 text-lg cursor-pointer">
          <i className="bi bi-list-ul mr-1">
            Categories
          </i>
        </li>

        <li className="hover:text-yellow-400 text-lg cursor-pointer">
          <i className="bi bi-clock-history mr-1">
            Latest Posts
          </i>
        </li>

        <li className="hover:text-yellow-400 text-lg cursor-pointer">
          <i className="bi bi-tags mr-1">
            Tags
          </i>
        </li>

        <li className="hover:text-yellow-400 text-lg cursor-pointer">
          <i className="bi bi-archive mr-1">
            History
          </i>
        </li>
      </ul>

      <div className='flex items-center space-x-4'>
        <i className='bi bi-search text-lg cursor-pointer text-black dark:text-white'
         onClick={() => setShowSearchModal(true)}
        ></i>
        <div onClick={toggleTheme} className='bg-gray-800 flex items-center p-1 rounded-full cursor-pointer'>
          {!isDark ? (
            <i className='bi bi-moon text-white text-sm mx-1'></i>
          ) : (
            <i className='bi bi-sun text-yellow-400 text-sm mx-1'></i>
          )}
        </div>

        <button className='bg-white nav-btn text-black dark:bg-black dark:text-white font-semibold px-5 py-2 rounded border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 shadow-sm hover:shadow-md'>
          Register / Login
        </button>

        <button className='text-black dark:text-white text-2xl lg:hidden'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`bi ${isMobileMenuOpen ? "bi-x" : "bi-list"}`}></i>

        </button>
      </div>
    </nav>
  )
}

export default Nav