import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CellPhoneCard from "../cardCellphone";
import "../../../../static/css/component/logCellPhoneCard/style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let pro = [
  {
    image: "https://example.com/image1.jpg",
    name: "Product 1",
    price: 10.99,
  },
  {
    image: "https://example.com/image2.jpg",
    name: "Product 2",
    price: 20.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
  {
    image: "https://example.com/image3.jpg",
    name: "Product 3",
    price: 30.99,
  },
];

function LogCellPhoneCard() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  let pages = Math.ceil(pro.length / 10);

  let indext = 0;
  let container_card = [];

  // this is use to save slice pro
  let list_pro = [];
  let start = 0;
  let end = 10;

  for (let i = 0; i < pages; i++) {
    // check dieu kien
    if (pro.length < 10) {
      list_pro = pro.slice(0);
    }
    if (end > pro.length) {
      list_pro = pro.slice(start);
    }

    list_pro = pro.slice(start, end); //start , end

    container_card.push(
      <div className="container_log_cell_phone">
        <Container className="log_cell_phone">
          {list_pro.map((index, p) => {
            return (
              <CellPhoneCard
                key={index}
                className={"card_cellphone"}
              ></CellPhoneCard>
            );
          })}
        </Container>
      </div>
    );

    start += 10;
    end += 10;
  }

  return (
    <Slider {...settings} className={"slick_carousel_cellphone_card"}>
      {/* <div className="container_log_cell_phone"> */}
      {/* <Container className="log_cell_phone">
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;
        </Container> */}
      {container_card}
      {/* </div> */}

      {/* <div className="container_log_cell_phone">
        <Container className="log_cell_phone">
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;{" "}
          <CellPhoneCard className={"card_cellphone"}></CellPhoneCard>;
        </Container>
      </div> */}
    </Slider>
  );
}

export default LogCellPhoneCard;
