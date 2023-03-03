import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "../../../../static/css/component/laptopCard/style.css";

function CardNews(product) {
  return (
    <div className="wrapper laptop_card cardNews_Container">
      <div className="product-img">
        <img src="http://bit.ly/2tMBBTd" height="420" width="400" />
      </div>

      <div className="product-info laptop_card_infor">
        <div className="product-text">
          <h1>Harvest Vase</h1>
          <h2>by studio and friends</h2>
        </div>
      </div>
    </div>
  );
}

export default CardNews;
