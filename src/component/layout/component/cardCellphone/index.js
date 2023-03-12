import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import "../../../../static/css/component/cellPhoneCard/style.css";
import CountContext from "../../../counterCart/countContext";
import CartContext from "../../../cart/CartContext";

function CellPhoneCard({ product }) {
  // console.log("product truyen vao", product.name);
  const click = useRef(null);
  // counter cart
  const { count, setCount } = useContext(CountContext);

  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);

  function Clicked() {
    click.current.classList.add("clicked");
    addToCart({ ...product });
    console.log("san pham trong cart la", cartItems);
    setCount(count + 1);
  }

  function UnClicked(idProduct) {
    click.current.classList.remove("clicked");
    removeFromCart(idProduct);
    console.log("san pham trong cart la", cartItems);

    setCount(count - 1);
  }
  // xu ly them vao gio hang

  const handleAddToCart = (product) => {
    addToCart({ ...product });
  };

  return (
    <div className="wrapper cellPhoneCard">
      <div className="container">
        <Link to={`/product/${product.id}`}>
          <div className="top img_product_mini">
            <img src={product.currentImage}></img>
          </div>
        </Link>
        <div className="bottom" ref={click}>
          <div className="left">
            <div className="details">
              <h1>
                {product.name}{" "}
                <span className="container_discount">
                  <i class="fa-solid fa-tag"></i>
                  {parseFloat(product.discountRate) * 100}
                  {"%"}
                </span>
              </h1>
              <p className="price">
                <span className="price_of_product">{product.price}</span>
                <i class="fa-solid fa-right-long"></i>
                <span className="sale_price">{product.currentPrice}</span>
              </p>
            </div>
            <div className="buy" onClick={Clicked}>
              <i class="fa-solid fa-cart-plus"></i>
            </div>
          </div>
          <div className="right">
            <div className="done">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <div className="details">
              <h1 style={{ fontSize: "12px" }}>Sản phẩm</h1>
              <span>đã thêm vào giỏ</span>
            </div>

            <div
              className="remove"
              onClick={() => {
                UnClicked(product.id);
              }}
            >
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i class="fa-solid fa-eye see_infor_product"></i>
        </div>
        <div className="contents">
          <table>
            <tr>
              <th>Thông số</th>
              <th>Giá trị</th>
            </tr>
            <tr>
              <td>CPU</td>
              <td>{product.CPU}</td>
            </tr>
            <tr>
              <th>RAM</th>
              <th>{product.RAM}</th>
            </tr>
            <tr>
              <td>ROM</td>
              <td>{product.ROM}</td>
            </tr>
            <tr>
              <th>Battery</th>
              <th>{product.Battery}</th>
            </tr>
            <tr>
              <td>Others</td>
              <td>{product.Others}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CellPhoneCard;
