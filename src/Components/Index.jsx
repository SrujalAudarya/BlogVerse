import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// import topic1 from '../assets/topic-1.png'
// import topic2 from '../assets/topic2.png'
// import topic3 from '../assets/topic3.png'
// import topic4 from '../assets/topic4.png'
// import topic5 from '../assets/topic5.png'
// import topic6 from '../assets/topic6.png'
// import topic7 from '../assets/topic7.png'
// import topic8 from '../assets/topic8.png'

const Index = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);
  return (
    <>
      <div className='relative pt-[5%] px-[8%] lg:px-[12%]'>
        {isReady && (
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className='mt-10 rounded-xl'
          >
            <SwiperSlide>
              <div className='hero p-[70px] flex flex-col justify-between'>
                <div className='hero-top flex justify-between items-center gap-4'>
                  <div className='flex items-center gap-5'>
                    <span className='bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white'>
                      Buisness
                    </span>
                    <span className='bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white'>
                      News
                    </span>
                  </div>
                  <span className='bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white'>
                    <i className='bi bi-clock-history mr-1'></i> 6 Min read
                  </span>
                </div>
                <div className='hero-bottom'>
                  <p className='text-[#cdcdcd]'>
                    <span className='text-white font-bold'>Ethan Caldwell</span> on October 16,2025
                  </p>
                  <h1 className='text-white font-bold font-bricolage text-7xl w-full lg:w-[80%] my-3'>
                    How Tech Shapes the Future of Work in 2025
                  </h1>
                  <p className='text-lg my-3 w-full lg:w-[70%] text-white'>
                    In 2025, technology continues to reshape the future of work, with AI and automation transforming industries, remote work becoming the norm, and new opportunities emerging for workers worldwide.
                  </p>
                  <button className='bg-white px-6 py-2 mt-5 rounded text-blue-800 font-bold hover:bg-black hover:text-white hover:shadow-lg transition duration-300'>
                    Discover More
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='hero hero2 p-[70px] flex flex-col justify-between'>
                <div className='hero-top flex justify-between items-center gap-4'>
                  <div className='flex items-center gap-5'>
                    <span className='bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white'>
                      Buisness
                    </span>
                    <span className='bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white'>
                      News
                    </span>
                  </div>
                  <span className='bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white'>
                    <i className='bi bi-clock-history mr-1'></i> 6 Min read
                  </span>
                </div>
                <div className='hero-bottom'>
                  <p className='text-[#cdcdcd]'>
                    <span className='text-white font-bold'>Ethan Caldwell</span> on October 16, 2025
                  </p>
                  <h1 className='text-white font-bold font-bricolage text-7xl w-full lg:w-[80%] my-3'>
                    How Tech Shapes the Future of Work in 2025
                  </h1>
                  <p className='text-lg my-3 w-full lg:w-[70%] text-white'>
                    In 2025, technology continues to reshape the future of work, with AI and automation transforming industries, remote work becoming the norm, and new opportunities emerging for workers worldwide.
                  </p>
                  <button className='bg-white px-6 py-2 mt-5 rounded text-blue-800 font-bold hover:bg-black hover:text-white hover:shadow-lg transition duration-300'>
                    Discover More
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='hero hero3 p-[70px] flex flex-col justify-between'>
                <div className='hero-top flex justify-between items-center gap-4'>
                  <div className='flex items-center gap-5'>
                    <span className='bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white'>
                      Buisness
                    </span>
                    <span className='bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white'>
                      News
                    </span>
                  </div>
                  <span className='bg-gray-200/20 px-5 py-1 rounded-full font-bold hover:bg-gray-200/30 cursor-pointer text-white'>
                    <i className='bi bi-clock-history mr-1'></i> 6 Min read
                  </span>
                </div>
                <div className='hero-bottom'>
                  <p className='text-[#cdcdcd]'>
                    <span className='text-white font-bold'>Ethan Caldwell</span> on September 27,2025
                  </p>
                  <h1 className='text-white font-bold font-bricolage text-7xl w-full lg:w-[80%] my-3'>
                    Remote Work Trends in the Digital Age
                  </h1>
                  <p className='text-lg my-3 w-full lg:w-[70%] text-white'>
                    Discover the cutting-edge tech gadgets making travel smarter and more convenient in 2024
                  </p>
                  <button className='bg-white px-6 py-2 mt-5 rounded text-blue-800 font-bold hover:bg-black hover:text-white hover:shadow-lg transition duration-300'>
                    Discover More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        {/* Custom Navigation Button */}
        <div ref={prevRef} className='swiper-button-prev swiper-btn swiper-btn-prev cursor-pointer'>
          <i className='bi bi-arrow-left'></i>
        </div>

        <div ref={nextRef} className='swiper-button-next swiper-btn swiper-btn-next cursor-pointer'>
          <i className='bi bi-arrow-right'></i>
        </div>
      </div>
    </>
  )
}

export default Index
