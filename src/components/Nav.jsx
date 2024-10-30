import React from "react";

const Nav = () => {
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list" />
      <div className="profile-img">
        <img
          src="assets/img/my-profile-img.jpg"
          alt=""
          className="img-fluid rounded-circle"
        />
      </div>
      <a
        href="index.html"
        className="logo d-flex align-items-center justify-content-center"
      >
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1 className="sitename">Trisha Mae</h1>
      </a>
      <div className="social-links text-center">
        <a
          href="https://www.x.com/tshamaec?t=pfZuxk6wFAQNeYC1tHjlCA&s=09"
          className="twitter"
        >
          <i className="bi bi-twitter-x" />
        </a>
        <a
          href="https://www.facebook.com/trishamae.catibog"
          className="facebook"
        >
          <i className="bi bi-facebook" />
        </a>
        <a href="https://www.instagram.com/tshamaec" className="instagram">
          <i className="bi bi-instagram" />
        </a>
      </div>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="#about">
              <i className="bi bi-person navicon" /> About
            </a>
          </li>
          <li>
            <a href="#resume">
              <i className="bi bi-file-earmark-text navicon" /> Resume
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i className="bi bi-images navicon" /> Portfolio
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="bi bi-envelope navicon" /> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
