import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import img1 from "../images/course1.jpg"
import img2 from "../images/course2.jpg"
import img3 from "../images/course3.jpg"


const Courses = () => {
  return (
    <section className="courses">
      <h2>Our Popular Courses</h2>
      <div className="container courses__container">
        <article className="course">
          <div className="course__image">
            <img src={img1}/>
          </div>
          <div className="course__info">
            <h4>Responsive Social Media Website UI Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              aperiam deserunt eaque quos iure ad debitis.
            </p>
            <a href="courses.html" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </article>

        <article className="course">
          <div className="course__image">
            <img src={img2}/>
          </div>
          <div className="course__info">
            <h4>Responsive SmartHome Website Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              aperiam deserunt eaque quos iure ad debitis.
            </p>
            <a href="courses.html" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </article>

        <article className="course">
          <div className="course__image">
            <img src={img3}/>
          </div>
          <div className="course__info">
            <h4>Responsive Admin Dashboard UI Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              aperiam deserunt eaque quos iure ad debitis.
            </p>
            <a href="courses.html" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Courses;
