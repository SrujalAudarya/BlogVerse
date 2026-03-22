import React, { useEffect, useState } from 'react'
import blogData from '../../Blogs.json'
import about from '../../assets/about.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import figma from '../../assets/figma.png'
import notion from '../../assets/notion.png'
import ps from '../../assets/ps.png'
import AI from '../../assets/AI.png'

import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
  }, []);
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-8/12 p-4 rounded-lg">
            {
              blogs.map((blog) => (
                <div key={blog.id} className='flex flex-col md:flex-row items-center mb-10 gap-6'>
                  <div className="w-full md:w-4/12 overflow-hidden rounded-xl">
                    <Link to={`/blog/${blog.id}`}>
                      <img src={blog.image}
                        alt={blog.title}
                        className='rounded-xl w-full blog-img object-cover h-[250px] transform transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
                    </Link>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex gap-2 mb-3">
                      {blog.tags.map((tag, index) => (
                        <span key={index} className='bg-gray-50/10 border border-[#83838380] text-xs font-semibold px-3 py-1 rounded-full'>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mb-1">
                      <span className='font-semibold'>{blog.author}</span>
                    </p>
                    <h2 className="text-xl font-bold mb-3">{blog.title}</h2>
                    <p className="mb-4">{blog.excerpt}</p>
                    <Link to={`/blog/${blog.id}`}>
                      <button className='px-6 py-2 rounded-lg bg-transparent border border-[#83838380] hover:bg-gray-50/15 font-medium transition duration-300 ease-in-out shadow-sm'>
                        {blog.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
