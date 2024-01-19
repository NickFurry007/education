import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__left">
          <h1>Grow your skills to andvance your career path</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            saepe animi, ad quis et atque iste placeat minus ipsa rem?
          </p>
          <a href="courses.html" className="btn btn-primary">
            Get Started
          </a>
        </div>

        <div className="header__right">
          <div className="header__right-image">
            {/* <img src="./images/header.svg"> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
