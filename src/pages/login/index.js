import React, { useRef } from "react";
import "../../../src/static/css/component/login/style.css";
import "../../../src/static/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
function Login(props) {
  return (
    <Container className="container_login_box">
      <div className="d-lg-flex half container_login">
        <div
          className="bg order-1 order-md-2 img_login"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
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
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass">
                        Forgot Password
                      </a>
                    </span>
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
    // <h2>oke</h2>
  );
}

export default Login;
