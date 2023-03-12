import React, { useContext } from "react";
import CartContext from "../../component/cart/CartContext";
import { Routes, Route, Link } from "react-router-dom";
import "../../static/css/component/cart/style.css";
function Cart() {
  const { cartItems, removeFromCart, addToCart, setCartItems } =
    useContext(CartContext);

  // code xu ly
  const filteredCartItems = [];

  cartItems.forEach((product) => {
    const existingProduct = filteredCartItems.find(
      (p) => p.id === product.id && p.currentColor === product.currentColor
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      filteredCartItems.push({ ...product, quantity: 1 });
    }
  });
  const handleRemoveProduct = (productId) => {
    console.log("id color truyen vao gio hang", productId);
    removeFromCart(productId);
  };
  // xu ly tang giam so luong
  const increaseQuantity = (product) => {
    addToCart(product);
  };

  const decreaseQuantity = (product) => {
    let removed = false;

    const updatedCartItems = cartItems.filter((item) => {
      if (!removed && item.id_product_color === product.id_product_color) {
        removed = true;
        return false;
      }
      return true;
    });

    // Sắp xếp lại mảng sản phẩm trong giỏ hàng
    updatedCartItems.sort((a, b) => a.id_product_color - b.id_product_color);

    setCartItems(updatedCartItems);
  };

  function totalPrice() {
    let price = 0;
    cartItems.forEach((product) => {
      price += product.currentPrice;
    });
    return price;
  }

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <Link to={"/"}>
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue shopping
                        </a>
                      </Link>
                    </h5>
                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Giỏ hàng</p>
                        <p className="mb-0">
                          Bạn có tổng cộng {cartItems.length} sản phẩm
                        </p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="text-muted">Xếp theo:</span>{" "}
                          <a href="#!" className="text-body">
                            giá <i className="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    {filteredCartItems.map((product, index) => {
                      return (
                        <div className="card mb-3 item_in_cart" key={index}>
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src={product.currentImage}
                                    className="img-fluid rounded-3"
                                    alt="Shopping item"
                                    style={{ width: 65 }}
                                  />
                                </div>
                                <div className="ms-3 box_item_in_cart">
                                  <h5 className="name_product">
                                    {product.name} , {product.currentColor}
                                  </h5>
                                  <p className="small mb-0">
                                    {product.RAM} , {product.ROM}
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center box_quantity_price">
                                <div
                                  style={{ width: 50 }}
                                  className={"amount_item_in_cart"}
                                >
                                  <button
                                    className="btn btn-secondary btn-sm me-2"
                                    onClick={() => decreaseQuantity(product)}
                                    disabled={product.quantity <= 1}
                                  >
                                    -
                                  </button>
                                  <h5 className="fw-normal mb-0">
                                    {product.quantity}
                                  </h5>
                                  <button
                                    className="btn btn-secondary btn-sm ms-2"
                                    onClick={() => increaseQuantity(product)}
                                  >
                                    +
                                  </button>
                                </div>
                                <div style={{ width: 80 }}>
                                  <h5 className="mb-0 sum_price_item">
                                    {product.currentPrice && product.quantity
                                      ? (
                                          product.currentPrice *
                                          product.quantity
                                        ).toLocaleString("vi-VN", {
                                          style: "currency",
                                          currency: "VND",
                                        })
                                      : 0}
                                  </h5>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                  <i
                                    className="fas fa-trash-alt remove_item_card_in_cart"
                                    onClick={() =>
                                      handleRemoveProduct(
                                        product.id_product_color
                                      )
                                    }
                                  ></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="col-lg-5">
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="img-fluid rounded-3"
                            style={{ width: 45 }}
                            alt="Avatar"
                          />
                        </div>

                        <p className="small mb-2">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-visa fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-amex fa-2x me-2"></i>
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <i className="fab fa-cc-paypal fa-2x"></i>
                        </a>

                        <form className="mt-4">
                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="typeName"
                              className="form-control form-control-lg"
                              siez="17"
                              placeholder="Cardholder's Name"
                            />
                            <label className="form-label" for="typeName">
                              Cardholder's Name
                            </label>
                          </div>

                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="typeText"
                              className="form-control form-control-lg"
                              siez="17"
                              placeholder="1234 5678 9012 3457"
                              minlength="19"
                              maxlength="19"
                            />
                            <label className="form-label" for="typeText">
                              Card Number
                            </label>
                          </div>

                          <div className="row mb-4">
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input
                                  type="text"
                                  id="typeExp"
                                  className="form-control form-control-lg"
                                  placeholder="MM/YYYY"
                                  size="7"
                                  minlength="7"
                                  maxlength="7"
                                />
                                <label className="form-label" for="typeExp">
                                  Expiration
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input
                                  type="password"
                                  id="typeText"
                                  className="form-control form-control-lg"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  size="1"
                                  minlength="3"
                                  maxlength="3"
                                />
                                <label className="form-label" for="typeText">
                                  Cvv
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>

                        <button
                          type="button"
                          className="btn btn-info btn-block btn-lg"
                        >
                          <div className="d-flex justify-content-between">
                            <span>
                              {totalPrice().toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              })}
                            </span>

                            <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
