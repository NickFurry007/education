import React from "react";

const Categories = () => {
  return (
    <section className="categories">
      <div className="container categories__container">
        <div className="categories__left">
          <h1>Categories</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            tenetur aut qui explicabo modi ipsa optio, ab doloremque quas,
            provident rerum et, fugiat amet quia. Quisquam neque similique quas
            optio!
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>

        <div className="categories__right">
          <article className="category">
            <span className="category__icon">
              <i className="uil uil-bitcoin-circle"></i>
            </span>
            <h5>Blockchain</h5>
            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
          </article>

          <article className="category">
            <span className="category__icon">
              <i className="uil uil-palette"></i>
            </span>
            <h5>Graphic Design</h5>
            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
          </article>

          <article className="category">
            <span className="category__icon">
              <i className="uil uil-usd-circle"></i>
            </span>
            <h5>Finance</h5>
            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
          </article>

          <article className="category">
            <span className="category__icon">
              <i className="uil uil-megaphone"></i>
            </span>
            <h5>Marketing</h5>
            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
          </article>

          <article className="category">
            <span className="category__icon">
              <i className="uil uil-music"></i>
            </span>
            <h5>Music</h5>
            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
          </article>

          <article className="category">
            <span className="category__icon">
              <i className="uil uil-puzzle-piece"></i>
            </span>
            <h5>Business</h5>
            <p>Lorem ipsum dolor sit amet consectetur, elit temporibus, qui.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Categories;
