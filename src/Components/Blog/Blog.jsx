import React, { useEffect, useState } from 'react'
import blogData from '../../Blogs.json'
import about from '../../assets/about.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import figma from '../../assets/figma.png'
import notion from '../../assets/notion.png'
import ps from '../../assets/ps.png'
import AI from '../../assets/AI.png'

import slide1 from '../../assets/mini-slide-1.png'
import slide2 from '../../assets/mini-slide-2.png'
import slide3 from '../../assets/mini-slide-3.png'

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
                  <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
                    <Link to={`/blog/${blog.id}`}>
                      <img src={blog.image}
                        alt={blog.title}
                        className='rounded-xl w-full blog-img object-cover h-[270px] transform transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer' />
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
                      <button className='px-6 py-2 rounded-lg bg-transparent border border-[#83838380] hover:bg-gray-50/15 font-medium transition duration-300 ease-in-out shadow-sm hover:shadow-md'>
                        {blog.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full lg:w-4/12 sticky top-[80px] left-0 h-full">
            {/* box 1 */}
            <div className='bg-gray-50/10 rounded-lg shadow-lg border border-[#83838380] p-4'>
              <span className='uppercase text-[14px]'>About</span>
              <div className="flex items-center gap-1 my-3">
                <img src={about} className='w-16 rounded-full p-1' alt="" />
                <div>
                  <h3 className="font-bold">
                    Ethan Caldwell
                  </h3>
                  <p className="uppercase text-[13px]"> Reflective Blogger</p>
                </div>
              </div>
              <p>
                Ethan Caldwell shares thoughtful insights and reflections on life, culture, and apersonal growth. His work explores the intersections of creativity and experience, offering readers unique perspectives.
              </p>
              <h5 className="font-bold my-3"><i className="bi bi-geo-alt-fill"></i> Paris, France</h5>
              <div className="social-icons flex gap-4">
                <i className="bi bi-twitter-x hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                <i className="bi bi-instagram hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                <i className="bi bi-facebook hover:text-yellow-400 cursor-pointer transition text-xl"></i>
                <i className="bi bi-linkedin hover:text-yellow-400 cursor-pointer transition text-xl"></i>
              </div>
            </div>
            <h2 className="uppercase my-5 font-bold">Featured Posts</h2>
            {/* mini Slides */}
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false
              }}
              className="rounded-md">
              <SwiperSlide>
                <div
                  className="relative h-[250px] rounded-xl overflow-hidden p-5 flex flex-col justify-between"
                  style={{
                    backgroundImage: `url(${slide1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>

                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold text-white">
                    Business
                  </span>

                  <div className="relative z-10 mt-auto">
                    <p className="text-[#cdcdcd] text-sm">
                      <span className="text-white font-bold">Ethan Caldwell</span> on October 16, 2025
                    </p>
                    <h1 className="text-white font-bold text-xl">
                      How Tech Shapes the Future of Work in 2025
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide 2 */}
              <SwiperSlide>
                <div
                  className="relative h-[250px] rounded-xl overflow-hidden p-5 flex flex-col justify-between"
                  style={{
                    backgroundImage: `url(${slide2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>

                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold text-white">
                    Sport
                  </span>

                  <div className="relative z-10 mt-auto">
                    <p className="text-[#cdcdcd] text-sm">
                      <span className="text-white font-bold">Ethan Caldwell</span> on September 29, 2025
                    </p>
                    <h1 className="text-white font-bold text-xl">
                      The Future of Work: Tech and Remote Trends
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide 3 */}
              <SwiperSlide>
                <div
                  className="relative h-[250px] rounded-xl overflow-hidden p-5 flex flex-col justify-between"
                  style={{
                    backgroundImage: `url(${slide3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>

                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold text-white">
                    Trends
                  </span>

                  <div className="relative z-10 mt-auto">
                    <p className="text-[#cdcdcd] text-sm">
                      <span className="text-white font-bold">Ethan Caldwell</span> on September 27, 2025
                    </p>
                    <h1 className="text-white font-bold text-xl">
                      The Future of Work: Tech and Remote Trends
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* box 2 */}
            <div className='bg-gray-50/10 rounded-lg shadow-lg border border-[#83838380] p-4'>
              <span className='uppercase text-[14px]'>Work Experience</span>
              <div className="flex flex-col my-3 border-b border-[#83838380] pb-4">
                <div className="flex justify-between w-full">
                  <h2>Product Designer</h2>
                  <h5>2022 - Now</h5>
                </div>
                <p className='text-gray-400'>Pioneer</p>
              </div>

              <div className="flex flex-col my-3">
                <div className="flex justify-between w-full">
                  <h2>Product Designer</h2>
                  <h5>2022 - 2025</h5>
                </div>
                <p className='text-gray-400'>Pioneer</p>
              </div>
            </div>

            {/* box - 3 */}
            <div className='bg-gray-50/10 rounded-lg shadow-lg border border-[#83838380] p-4'>
              <span className='uppercase text-[14px]'>Technologies</span>
              <div className="flex items-center gap-3 my-6">
                <img src={figma} alt='' className='w-12 rounded-lg'/>
                <div>
                  <h2 className='font-bold text-xl'>Figma</h2>
                  <p className="font-[300]">Collaborate and design interfaces real-time.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 my-6">
                <img src={notion} alt='' className='w-12 rounded-lg'/>
                <div>
                  <h2 className='font-bold text-xl'>Notion</h2>
                  <p className="font-[300]">Organize, track, and collaborate on projects easily.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 my-6">
                <img src={AI} alt='' className='w-12 rounded-lg'/>
                <div>
                  <h2 className='font-bold text-xl'>Illustrator</h2>
                  <p className="font-[300]">Create precise vector graphics and illustrations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
