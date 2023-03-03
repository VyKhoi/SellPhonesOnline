import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopCard from "../cardLaptop";
import CardNews from "../cardNews";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../static/css/component/logLaptopCard/style.css";
let pro = [
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

function LogNews() {
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
      <div className="container_log_laptop">
        <Container className="log_laptop">
          {list_pro.map((index, p) => {
            return <CardNews key={index} className={"card_laptop"}></CardNews>;
          })}
        </Container>
      </div>
    );

    start += 10;
    end += 10;
  }

  return (
    <Slider {...settings} className={"slick_carousel_laptopphone_card"}>
      {container_card}
    </Slider>
  );
}

export default LogNews;
