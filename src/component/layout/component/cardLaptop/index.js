import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "../../../../static/css/component/laptopCard/style.css";

function LaptopCard(product) {
  return (
    <div className="wrapper laptop_card">
      <div className="product-img">
        <img src="http://bit.ly/2tMBBTd" height="420" width="327" />
      </div>

      <div className="product-info laptop_card_infor">
        <div className="product-text">
          <h1>Harvest Vase</h1>
          <h2>by studio and friends</h2>
        </div>
        <div className="product-price-btn">
          <p>
            <span>78</span>$
          </p>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
}

export default LaptopCard;
