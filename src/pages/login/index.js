import React, { Fragment, useRef, useEffect } from "react";
import "../../../src/static/css/component/login/style.css";
import "../../../src/static/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "../signUp";
function Login({ myref }) {
  // const showLogin = useRef(null);

  function handleRegister() {
    const t = myref.current;
    console.log(t);
    console.log("coclick");
    if (t.classList.contains("d-block") === false) {
      t.classList.add("d-block");
      return;
    }
    if (t.classList.contains("d-block")) {
      t.classList.remove("d-block");
      return;
    }
  }
  return (
    <Fragment>
      <Container className="container_login_box d-block">
        <div className="d-lg-flex half container_login">
          <div
            className="bg order-1 order-md-2 img_login"
            style={{
              backgroundImage:
                "url('https://wallpaperaccess.com/full/210902.jpg')",
            }}
          ></div>
          <div className="contents order-2 order-md-1">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7">
                  <h3>
                    Login to <strong>Colorlib</strong>
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                  <form action="#" method="post">
                    <div className="form-group first">
                      <label for="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="your-email@gmail.com"
                        id="username"
                      />
                    </div>
                    <div className="form-group last mb-3">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Your Password"
                        id="password"
                      />
                    </div>

                    <div className="d-flex mb-5 align-items-center">
                      <label className="control control--checkbox mb-0">
                        <span className="caption">Remember me</span>
                        <input type="checkbox" checked="checked" />
                        <div className="control__indicator"></div>
                      </label>
                      <Link to={"/register"} onClick={handleRegister}>
                        <span className="ml-auto">
                          <a href="#" className="forgot-pass">
                            Register
                          </a>
                        </span>
                      </Link>
                    </div>

                    <input
                      type="submit"
                      value="Log In"
                      className="btn btn-block btn-primary login_bt"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* <Routes>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
      </Routes> */}
    </Fragment>
  );
}

export default Login;
