import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper style
import 'swiper/css';
import 'swiper/css/pagination';


import testimonies from '../images/testimonial.json'

function Testimonials() {
  return (
    <div className='Testimonials'>
        <div className='Testimonials_h1'>
        <h3>Testimonials</h3>
        </div>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        950: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    {testimonies.map((testimony) => (
        <SwiperSlide key={testimony.image}>
            <section className='testimony-card'>
                <p>Rating: {testimony.Rating} / 5</p>
                <article className='testimony-name'>
                    <img src={`${testimony.image}`} alt='profile pic' />
                    <h6>{testimony.Name}</h6>
                </article>
                <p>{testimony.review}</p>
            </section>
        </SwiperSlide>
    ))}
    </Swiper>
    </div>
  )
}

export default Testimonials