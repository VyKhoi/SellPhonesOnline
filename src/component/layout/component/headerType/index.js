import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../../static/css/component/headerType/style.css";
import CarouselHeaderType from "../carouselHeaderType";
import VerticalMenu from "../verticalMenu/indext";
import MenuItem from "../menuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faL } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function HeaderType() {
  // handle hover phone
  const seePhones = useRef(null);
  function handleSeePhones() {
    console.log("có lick handleSeePhones");
    if (seePhones.current.classList.contains("d-block") === false) {
      seePhones.current.classList.add("d-block");
      seePhones.current.classList.remove("d-none");
      return;
    }
    if (seePhones.current.classList.contains("d-block")) {
      seePhones.current.classList.remove("d-block");
      seePhones.current.classList.add("d-none");
      return;
    }
  }

  // handle hover Laptop
  const seeLaptops = useRef(null);
  function handleSeeLaptops() {
    console.log("có lick handleSeeLaptops");

    if (seeLaptops.current.classList.contains("d-block") === false) {
      seeLaptops.current.classList.add("d-block");
      seeLaptops.current.classList.remove("d-none");
      return;
    }
    if (seeLaptops.current.classList.contains("d-block")) {
      seeLaptops.current.classList.remove("d-block");
      seeLaptops.current.classList.add("d-none");
      return;
    }
  }

  return (
    <Container className="container_header_Type">
      <Row className="row_header_Type">
        <Col className="header_type_box" id="header_type_box_1" sm={3}>
          <div className="container_menu_type_product">
            <ul className="menu_type_product" id="type_product_nav">
              <li onClick={handleSeePhones}>
                <a href="#!">
                  <i class="fa-solid fa-mobile"></i> Điện thoại{" "}
                  <i class="fa-solid fa-chevron-right arrow_right"></i>
                </a>
              </li>
              <li onClick={handleSeeLaptops}>
                <a href="#!">
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
                  <a>
                    <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/msi%20right.jpg"></img>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row
        ref={seePhones}
        className="type_product_container type_product_container_phones d-none"
      >
        <Link className="see_full_product" to={"/cellphone"}>
          Xem tất cả sản phẩm
        </Link>

        <Col className="type_product_box" sm={8}>
          <div className="manufactue_product">
            <h6>Hãng điện thoại</h6>
            <VerticalMenu>
              <MenuItem link="#">Apple</MenuItem>
              <MenuItem link="#">Samsung</MenuItem>
              <MenuItem link="#">Huawei</MenuItem>
              <MenuItem link="#">Oppo</MenuItem>
              <MenuItem link="#">Vivo</MenuItem>
              <MenuItem link="#">OnePlus</MenuItem>
              <MenuItem link="#">Google</MenuItem>
              <MenuItem link="#">Sony</MenuItem>
              <MenuItem link="#">LG</MenuItem>
            </VerticalMenu>
          </div>

          <div className="type_of_price">
            <h6>Chọn theo mức giá</h6>
            <VerticalMenu>
              <MenuItem link="#">Dưới 5 triệu</MenuItem>
              <MenuItem link="#">Từ 5 đến 10 triệu</MenuItem>
              <MenuItem link="#">Từ 10 đến 15 triệu</MenuItem>
              <MenuItem link="#">trên 15 triệu</MenuItem>
            </VerticalMenu>
          </div>

          <div className="type_of_operating_system">
            <h6>Loại điện thoại</h6>
            <VerticalMenu>
              <MenuItem link="#">Androi</MenuItem>
              <MenuItem link="#">Iphone (IOS)</MenuItem>
              <MenuItem link="#">Từ 10 đến 15 triệu</MenuItem>
              <MenuItem link="#">trên 15 triệu</MenuItem>
            </VerticalMenu>
          </div>
        </Col>
      </Row>

      <Row
        ref={seeLaptops}
        className="type_product_container type_product_container_laptops d-none"
      >
        <Link className="see_full_product" to={"/laptop"}>
          Xem tất cả sản phẩm
        </Link>
        <Col className="type_product_box" sm={8}>
          <div className="manufactue_product">
            <h6>Hãng Laptop</h6>
            <VerticalMenu>
              <MenuItem link="#">DELL</MenuItem>
              <MenuItem link="#">LENOVO</MenuItem>
              <MenuItem link="#">ASUS</MenuItem>
              <MenuItem link="#">APPLE</MenuItem>
              <MenuItem link="#">HP</MenuItem>
            </VerticalMenu>
          </div>

          <div className="type_of_price">
            <h6>Chọn theo mức giá</h6>
            <VerticalMenu>
              <MenuItem link="#">Dưới 10 triệu</MenuItem>
              <MenuItem link="#">Từ 10 đến 20 triệu</MenuItem>
              <MenuItem link="#">Từ 20 đến 30 triệu</MenuItem>
              <MenuItem link="#">trên 30 triệu</MenuItem>
            </VerticalMenu>
          </div>

          <div className="type_of_operating_system">
            <h6>Chọn theo dòng</h6>
            <VerticalMenu>
              <MenuItem link="#">Laptop Core i5</MenuItem>
              <MenuItem link="#">Laptop Core i3</MenuItem>
              <MenuItem link="#">Laptop Core i7</MenuItem>
              <MenuItem link="#">Laptop Core i9</MenuItem>
            </VerticalMenu>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderType;
