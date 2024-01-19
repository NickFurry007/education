import React from "react";

const Testimonials = () => {
  return (
    <section className="container testimonials__container mySwiper">
      <h2>Students' Testimonials</h2>
      <div className="swiper-wrapper">
        <article className="testimonial swiper-slide">
          <div className="avatar">{/* <img src="./images/avatar1.jpg"> */}</div>
          <div className="testimonial__info">
            <h5>Diana Ayi</h5>
            <small>Student</small>
          </div>
          <div className="testimonial__body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              corporis officiis sint dolore amet voluptatibus perspiciatis animi
              facere? Sed, rerum. Rem eveniet aut illo!
            </p>
          </div>
        </article>

        <article className="testimonial swiper-slide">
          <div className="avatar">{/* <img src="./images/avatar2.jpg"> */}</div>
          <div className="testimonial__info">
            <h5>Ernest Achiever</h5>
            <small>Web Developer</small>
          </div>
          <div className="testimonial__body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              corporis officiis sint dolore amet voluptatibus perspiciatis animi
              facere? Sed, rerum. Rem eveniet aut illo!
            </p>
          </div>
        </article>

        <article className="testimonial swiper-slide">
          <div className="avatar">{/* <img src="./images/avatar3.jpg"> */}</div>
          <div className="testimonial__info">
            <h5>Edem Quist</h5>
            <small>Student</small>
          </div>
          <div className="testimonial__body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              corporis officiis sint dolore amet voluptatibus perspiciatis animi
              facere? Sed, rerum. Rem eveniet aut illo!
            </p>
          </div>
        </article>

        <article className="testimonial swiper-slide">
          <div className="avatar">{/* <img src="./images/avatar4.jpg"> */}</div>
          <div className="testimonial__info">
            <h5>Hajia Bintu</h5>
            <small>Student</small>
          </div>
          <div className="testimonial__body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              corporis officiis sint dolore amet voluptatibus perspiciatis animi
              facere? Sed, rerum. Rem eveniet aut illo!
            </p>
          </div>
        </article>

        <article className="testimonial swiper-slide">
          <div className="avatar">{/* <img src="./images/avatar5.jpg"> */}</div>
          <div className="testimonial__info">
            <h5>Jane Doe</h5>
            <small>Student</small>
          </div>
          <div className="testimonial__body">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              corporis officiis sint dolore amet voluptatibus perspiciatis animi
              facere? Sed, rerum. Rem eveniet aut illo!
            </p>
          </div>
        </article>
      </div>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Testimonials;
