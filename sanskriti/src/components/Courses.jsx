import React from "react";

const Courses = () => {
  return (
    <section className="courses">
      <h2>Our Popular Courses</h2>
      <div className="container courses__container">
        <article className="course">
          <div className="course__image">
            {/* <img src="./images/course1.jpg"> */}
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
            {/* <img src="./images/course2.jpg"> */}
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
            {/* <img src="./images/course3.jpg"> */}
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
