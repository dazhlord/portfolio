import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Oladotun',
    review: "I've seen quite a number of Layo's designs. In all, they are unique and reflect expressions of well thought out works of art. They are attractive and easy to relate to while displaying a high level of professionalism",
  },
  {
    avatar: AVTR2,
    name: 'Oyintare',
    review: 'I worked with Layomi on a concept and he was able to transfer my ideas into a great form. I like his professionalism and attention to details. He does well in executing his projects and takes feedback very well. I was infinitely pleased with his service.',
  },
  {
    avatar: AVTR3,
    name: 'Wilson',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum, cupiditate sint voluptates rerum obcaecati modi quas. Eaque ratione odit qui optio distinctio unde odio numquam deleniti repellendus! Officia, hic!',
  },
  {
    avatar: AVTR4,
    name: 'Ayoola',
    review: "Layomi is an excellent graphics designer. He's innovative and his attention to details is commendable. He's more concerned about the satisfaction of his clients.",
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Navigation, Pagination ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
       {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
          )
        })
       }
        
        
      </Swiper>
    </section>
  )
}

export default Testimonials