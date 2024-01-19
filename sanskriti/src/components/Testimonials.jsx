import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import img1 from "../images/avatar4.jpg"
import img2 from "../images/avatar1.jpg"
import img3 from "../images/avatar2.jpg"
import img4 from "../images/avatar3.jpg"


const testimonials = [
  {
    id: 1,
    name: "Diana Ayi",
    role: "Student",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi corporis officiis sint dolore amet voluptatibus perspiciatis animi facere? Sed, rerum. Rem eveniet aut illo!",
    image: img1,
  },
  {
    id: 2,
    name: "Ernest Achiever",
    role: "Web Developer",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi corporis officiis sint dolore amet voluptatibus perspiciatis animi facere? Sed, rerum. Rem eveniet aut illo!",
    image: img2,
  },
  {
    id: 3,
    name: "Edem Quist",
    role: "Student",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi corporis officiis sint dolore amet voluptatibus perspiciatis animi facere? Sed, rerum. Rem eveniet aut illo!",
    image: img3,
  },
  {
    id: 4,
    name: "Hajia Bintu",
    role: "Student",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi corporis officiis sint dolore amet voluptatibus perspiciatis animi facere? Sed, rerum. Rem eveniet aut illo!",
    image: img4,
  },
];


const Testimonials = () => {
  return (
    <section className="container testimonials__container">
      <h2>Students' Testimonials</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={2} // Set the number of slides per view to 2
        loop={true}
        autoplay={{
          delay: 5000, // Time in milliseconds
          disableOnInteraction: false,
        }}

        
      >
        {testimonials.map(testimonial => (
          <SwiperSlide key={testimonial.id}>
            <article className="testimonial">
              <div className="avatar">
                <img src={testimonial.image} alt={`Avatar of ${testimonial.name}`} />
              </div>
              <div className="testimonial__info">
                <h5>{testimonial.name}</h5>
                <small>{testimonial.role}</small>
              </div>
              <div className="testimonial__body">
                <p>{testimonial.text}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
