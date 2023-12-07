import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import specialsSlides from "../images/special.json"


function Specials() {
  return (
    <div className='S'>
        <div className='S-header'>
            <h2>Specials</h2>
            <button>Online Menu</button>
        </div>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            specialsSlides.map((slides) => (
                <SwiperSlide key={slides.image}>
                    <section className='Specials_card'>
                   <img src={`${slides.image}`} alt={slides.title} />
                   <article className='Specials_cardBody'>
                   <div className='Specials_title'>
                   <h5>{slides.title}</h5>
                   <p>{slides.price}</p>
                   </div>
                   <p>{slides.descriptrion}</p>
                   <div className='Specials_footer'>
                   <p>Order for Delivery</p>
                   </div>
                   </article>
                   </section>
                </SwiperSlide>
            ))
        }

    
    </Swiper>
    </div>
  )
}

export default Specials