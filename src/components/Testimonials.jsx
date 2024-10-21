import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className='py-20 px-6 md:px-24' id='testimonials'>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
        <p className="text-md md:text-xl my-1 md:my-3">See what clients say about me</p>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper my-6"
        >
          <SwiperSlide className='h-[500px] w-full md:w-[500px] bg-bgLessDark rounded-xl p-6 shadow-lg text-center flex flex-col items-center justify-center'>
            <i className="ri-double-quotes-l ri-2x"></i>
            <p className='my-3'>
              Working with Jephthah on our company's website was amazing. From the very beginning, he took the time to deeply understand our brand's vision and target audience, ensuring every design decision aligned with our goals. Their attention to detail and creativity exceeded our expectations. What impressed us most was his collaborative approach — he listened to our feedback and worked to create a website that truly represents who we are as a company.
            </p>
            --
            <p className='font-bold text-xl'>
              Temitope Alabi, Oathplace Prosthetics
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials