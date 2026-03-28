import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import blogsData from "../Blogs.json";

const Nav = ({ isDark, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShowSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
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
            <Link to="/"><i className="bi bi-house-door-fill mr-1">Home</i></Link>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <i className="bi bi-list-ul mr-1">Categories</i>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <i className="bi bi-clock-history mr-1">Latest Posts</i>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <i className="bi bi-tags mr-1">Tags</i>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <i className="bi bi-archive mr-1">History</i>
          </li>
        </ul>

        <div className='flex items-center space-x-4'>
          <i
            className='bi bi-search text-lg cursor-pointer text-black dark:text-white'
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
          <button
            className='text-black dark:text-white text-2xl lg:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`bi ${isMobileMenuOpen ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <ul className='lg:hidden w-full bg-white dark:bg-black text-black dark:text-white px-[8%] pt-[100px] space-y-4 transition duration-300'>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <Link to="/"><i className="bi bi-house-door-fill mr-1">Home</i></Link>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <i className="bi bi-list-ul mr-1">Categories</i>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <i className="bi bi-clock-history mr-1">Latest Posts</i>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <i className="bi bi-tags mr-1">Tags</i>
          </li>
          <li className="hover:text-yellow-400 text-lg cursor-pointer">
            <i className="bi bi-archive mr-1">History</i>
          </li>
        </ul>
      )}

      {isShowSearchModal && (
        <div
          className="fixed inset-0 z-[99999] bg-black/60 flex justify-center items-start pt-32"
          onClick={(e) => { if (e.target === e.currentTarget) setShowSearchModal(false); }}
        >
          <div className="bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white rounded-lg p-6 w-[90%] max-w-lg relative shadow-xl">
            <button
              className="absolute top-3 right-4 text-xl text-black dark:text-white hover:text-yellow-400 transition"
              onClick={() => setShowSearchModal(false)}
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <h2 className="text-xl font-semibold mb-4">Search Blogs</h2>

            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Type to search...'
              autoFocus
              className='w-full p-3 rounded-md border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400'
            />

            <div className="mt-4 space-y-3 max-h-60 overflow-y-auto">
              {searchQuery.trim() !== '' ? (
                filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <Link
                      to={`/blog/${blog.id}`}
                      key={blog.id}
                      className='flex items-center gap-4 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition border border-gray-200 dark:border-gray-700'
                      onClick={() => {
                        setShowSearchModal(false);
                        setSearchQuery('');
                      }}
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className='w-16 h-16 object-cover rounded-md flex-shrink-0'
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium line-clamp-1">{blog.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</p>
                        <div className="flex gap-1 mt-1 flex-wrap">
                          {blog.tags.map((tag, i) => (
                            <span key={i} className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                    No results found for "{searchQuery}"
                  </p>
                )
              ) : (
                <p className="text-sm text-gray-400 text-center py-4">
                  Start typing to search blogs...
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav