import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../../static/css/component/headerType/style.css";
import CarouselHeaderType from "../carouselHeaderType";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
function HeaderType() {
  return (
    <Container className="container_header_Type">
      <Row className="row_header_Type">
        <Col className="header_type_box" id="header_type_box_1" sm={3}>
          <div className="container_menu_type_product">
            <ul className="menu_type_product">
              <li>
                <a href="#">
                  <i class="fa-solid fa-mobile"></i> Điện thoại{" "}
                  <i class="fa-solid fa-chevron-right arrow_right"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-solid fa-laptop"></i>Laptop{" "}
                  <i class="fa-solid fa-chevron-right arrow_right"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-solid fa-tablet-button"></i>
                  {" Mái tính bản"}
                  <i class="fa-solid fa-chevron-right arrow_right"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-solid fa-headphones"></i>
                  Tai nghe<i class="fa-solid fa-chevron-right arrow_right"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-solid fa-keyboard"></i>
                  Phụ kiện<i class="fa-solid fa-chevron-right arrow_right"></i>
                </a>
              </li>
            </ul>
          </div>
        </Col>

        <Col className="header_type_box" id="header_type_box_2" sm={6}>
          <CarouselHeaderType></CarouselHeaderType>
        </Col>

        <Col className="header_type_box" id="header_type_box_3" sm={3}>
          <div class="container container_boxs_HTB_3">
            <div class="row">
              <div class="col">
                <div class="small-box">
                  <a href="#">
                    <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/fold-4-00241.png"></img>
                  </a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="small-box">
                  <a href="#">
                    <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/Rigright-109-00234.jpg"></img>
                  </a>{" "}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="small-box">
                  <a href="#">
                    <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/msi%20right.jpg"></img>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderType;
