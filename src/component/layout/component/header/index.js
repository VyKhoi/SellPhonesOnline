import React, { useRef } from "react";
import "../../../../static/css/component/header/style.css";

import "../../../../static/css/style.css";

import "../../../../static/js/component/header/index";
import MyCarousel from "../carousel";

import StickyBox from "react-sticky-box";
import { useState, useEffect } from "react";

function Header() {
  // const [scroll, setScroll] = useState(0);

  // useEffect(() => {
  //   function handleScroll() {
  //     console.log(window.scrollY);

  //     if (window.scrollY > 800) {
  //       console.log("co vao");
  //       setScroll({
  //         position: "fixed",
  //         top: 0,
  //         left: 0,
  //         right: 0,
  //       });
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const sticky = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
      console.log(window.scrollY);

      if (window.scrollY > 646) {
        sticky.current.classList.add("p_fixed");
        sticky.current.classList.remove("p_relative");
      } else {
        sticky.current.classList.add("p_relative");
        sticky.current.classList.remove("p_fixed");
      }
    }
  }, []);

  return (
    <section className="ftco-section main_header">
      {/* this is carousel  */}

      <div className="container header_carousel">
        {/*   <div className="col-md-6 text-center mb-5"> */}
        <MyCarousel></MyCarousel>
        {/* </div>*/}
      </div>

      <div className="menu_nav_header" id="menu_nav_header" ref={sticky}>
        <div className="wrap">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col">
                <p className="mb-0 phone">
                  <span className="fa fa-phone"></span>{" "}
                  <a href="#">+00 1234 567</a>
                </p>
              </div>
              <div className="col d-flex justify-content-end">
                <div className="social-media">
                  <p className="mb-0 d-flex">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center contact"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center contact"
                    >
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center contact"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center contact"
                    >
                      <i class="fa-solid fa-globe"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav
          className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light navbar_feature "
          id="ftco-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              Papermag <span>Magazine</span>
            </a>
            <form
              action="#"
              className="searchform order-sm-start order-lg-last"
            >
              <div className="form-group d-flex">
                <input
                  type="text"
                  className="form-control pl-3"
                  placeholder="Search"
                ></input>
                <button
                  type="submit"
                  placeholder=""
                  className="form-control search"
                >
                  <span className="fa fa-search"></span>
                </button>
              </div>
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Page
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <a className="dropdown-item" href="#">
                      Page 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Page 2
                    </a>
                    <a className="dropdown-item" href="#">
                      Page 3
                    </a>
                    <a className="dropdown-item" href="#">
                      Page 4
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Catalog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
