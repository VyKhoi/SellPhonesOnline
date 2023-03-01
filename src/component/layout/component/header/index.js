import React, { useRef } from "react";
import "../../../../static/css/component/header/style.css";

import "../../../../static/css/style.css";

import "../../../../static/js/component/header/index";
import MyCarousel from "../carousel";

import StickyBox from "react-sticky-box";
import { useState, useEffect } from "react";
import Login from "../../../../pages/login";
import { Container } from "react-bootstrap";
function Header() {
  const sticky = useRef(null);

  const branch = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
      // console.log(window.scrollY);

      if (window.scrollY > 646) {
        sticky.current.classList.add("p_fixed");
        sticky.current.classList.remove("p_relative");
      } else {
        sticky.current.classList.add("p_relative");
        sticky.current.classList.remove("p_fixed");
      }
    }
  }, []);

  // xu ly hover
  const dropdown = useRef(null);

  // handle click login
  const showLogin = useRef(null);
  function handleLogin() {
    console.log("coclick");
    if (showLogin.current.classList.contains("d-block") === false) {
      showLogin.current.classList.add("d-block");
      return;
    }
    if (showLogin.current.classList.contains("d-block")) {
      showLogin.current.classList.remove("d-block");
      return;
    }
    console.log(showLogin);
  }

  // handle click change bramch
  function handleClickBranch(e) {
    branch.current.innerText = e.target.innerText;
  }

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
            <a className="navbar-brand " id="logo_navbar" href="index.html">
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
                <li className="nav-item dropdown branch" ref={dropdown}>
                  <a
                    className="nav-link dropdown-toggle "
                    href="#"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    ref={branch}
                  >
                    Cửa Hàng
                  </a>
                  <div className="dropdown_contain">
                    <ul className="dropdown_menu">
                      <li>
                        <a href="#!" onClick={handleClickBranch}>
                          Cửa hàng Chấn Bột
                        </a>
                      </li>
                      <li>
                        <a href="#!" onClick={handleClickBranch}>
                          Cửa hàng Khôi Trọc
                        </a>
                      </li>
                      <li>
                        <a href="#!" onClick={handleClickBranch}>
                          Cửa hàng Luân Wibu
                        </a>
                      </li>
                      <li>
                        <a href="#!" onClick={handleClickBranch}>
                          Cửa hàng Nam mít
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#type_product_nav" className="nav-link">
                    DOANH MỤC
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    TRA CỨU ĐƠN HÀNG
                  </a>
                </li>
                <li className="nav-item" onClick={handleLogin}>
                  <a href="#" className="nav-link">
                    ĐĂNG NHẬP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Container ref={showLogin} className={"show_login d-none"}>
        <Login></Login>
        <div className="blur_login" onClick={handleLogin}>
          {/* {" "}
          <i class="fa-regular fa-circle-xmark close_login"></i> */}
        </div>
      </Container>
    </section>
  );
}

export default Header;
