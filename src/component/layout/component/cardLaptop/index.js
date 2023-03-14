import React, { useRef, useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../static/css/component/laptopCard/style.css";
import CartContext from "../../../cart/CartContext";
import { TypeOfProductContext } from "../../../typeOfProduct/context";
function LaptopCard({ product }) {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);
  const { typeOfProduct, handleSetTypeOfProduct } =
    useContext(TypeOfProductContext);

  const handleClick = () => {
    handleSetTypeOfProduct(2);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id_product_color);
  };

  return (
    <div className="wrapper laptop_card">
      <Link to={`/product/${product.id}`} onClick={handleClick}>
        <div className="product-img">
          <img src={product.currentImage} height="420" width="327" />
        </div>
      </Link>
      <div className="product-info laptop_card_infor">
        <Link to={`/product/${product.id}`} onClick={handleClick}>
          <div className="product-text">
            <h1>
              {product.name}{" "}
              <span className="container_discount discount_laptop">
                <i class="fa-solid fa-tag"></i>
                {parseFloat(product.discountRate) * 100}
                {"%"}
              </span>
            </h1>
          </div>
        </Link>
        <div className="product-price-btn price_laptop_box">
          <p>
            <span className="previous_price">{product.price}</span>{" "}
            <i class="fa-solid fa-right-long"></i>
            <span className="sale_price_laptop">{product.currentPrice}</span>
          </p>
          {cartItems.includes(product) ? (
            <button
              type="button"
              onClick={handleRemoveFromCart}
              style={{ backgroundColor: "red" }}
            >
              Xóa khỏi giỏ hàng
            </button>
          ) : (
            <button
              type="button"
              onClick={handleAddToCart}
              style={{ backgroundColor: "#3dcf05" }}
            >
              Thêm vào giỏ hàng
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default LaptopCard;
