// Navbar.js

import React, { useEffect, useState } from "react";

const Navbar = () => {
  // Declare isScrolled state variable
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={isScrolled ? 'window-scroll' : ''}>
      <div className="container nav__container">
        <div className="logo">
          <svg
            width="41"
            height="57"
            viewBox="0 0 41 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1914 31.3178C17.3497 25.2464 18.9572 17.8364 20.3662 14.8904C12.5022 24.2888 17.6586 32.5384 18.1541 33.3312L18.1566 33.3352L19.1173 34.8722C18.9572 34.7762 18.099 34.0461 15.9471 31.8942C13.7376 33.9116 14.5061 41.1166 15.755 44.8632C12.5847 45.4396 11.8162 46.3042 7.87748 47.9373C3.93874 49.5705 0.0960668 53.0289 0 54.3738C0.2882 55.7187 5.86007 55.9109 7.20501 56.103C8.54994 56.2951 18.5409 56.1991 23.2482 56.1991C22.4796 55.1423 17.7724 52.4525 16.3314 53.221C14.8904 53.9895 12.3926 53.9895 10.7595 53.221C9.12634 52.4525 7.78141 52.8367 6.24434 53.0289C6.91681 51.9721 9.41455 52.4525 11.1437 52.4525C12.8729 51.6839 17.0999 51.0115 18.9252 51.0115C29.3004 57.3134 37.402 54.4058 40.1559 52.1643C37.3059 49.6665 30.799 43.8065 27.5712 40.348C27.1869 43.5183 28.724 46.7845 30.0689 49.3783C33.143 49.1862 36.3132 51.2036 35.929 51.3957C35.5447 51.5879 32.7588 51.9721 31.2217 51.8761C29.6846 51.78 27.5712 50.6272 27.5712 50.339C26.8795 46.2658 23.9527 44.9913 22.5757 44.8632C22.3836 45.3755 21.8648 46.7077 21.3268 47.9373C20.4046 46.554 23.1841 41.2127 24.6892 38.7149C25.0414 37.9784 25.035 35.4679 22.1914 31.3178Z"
              fill="white"
            />
            <circle cx="26.7067" cy="28.0515" r="3.65054" fill="white" />
            <path
              d="M33.335 14.0257C22.4218 12.7192 21.1666 17.5802 21.9031 20.174L27.9553 17.292C27.3789 17.6763 25.4576 18.9828 22.3834 21.1347C27.7632 26.3223 32.6626 16.0431 33.335 14.0257Z"
              fill="white"
            />
            <path
              d="M29.9375 2.12197C19.4114 5.28512 20.2031 10.2427 21.9147 12.3262L26.3112 7.26583C25.9363 7.84841 24.6971 9.81383 22.739 13.0149C29.7435 15.6206 30.1272 4.24002 29.9375 2.12197Z"
              fill="white"
            />
            <path
              d="M15.614 0.109753C9.0117 8.89691 12.5881 12.4203 15.2016 13.0836L15.7426 6.40208C15.7861 7.09346 15.9531 9.41092 16.2736 13.1497C23.4594 11.0961 17.0223 1.70311 15.614 0.109753Z"
              fill="white"
            />
          </svg>
          <a href="index.html">
            <h4>SANSKRITI</h4>
          </a>
        </div>
        <ul className="nav__menu">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="courses.html">Courses</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
        <button id="open-menu-btn">
          <i className="uil uil-bars"></i>
        </button>
        <button id="close-menu-btn">
          <i className="uil uil-multiply"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
