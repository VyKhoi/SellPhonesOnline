import Header from "./component/layout/component/header";

import Footer from "./component/layout/component/footer";

import "./static/css/globalStyle/style.css";
import Home from "./pages/home";

import CartIcon from "./component/layout/component/iconCart";

import React, { useContext, useState } from "react";
import CountContext from "./component/counterCart/countContext";

import Cart from "./pages/cart";

import Detail_Of_Product from "./pages/detailOfProduct";

import SignUp from "./pages/signUp";
import OrderLookup from "./pages/orderLookup";
import { Routes, Route, Link } from "react-router-dom";
import PageProductCellphone from "./pages/pageProductCellphone/indext";
import PageProductLaptop from "./pages/pageProductLaptop/indext";
import CartContext from "./component/cart/CartContext";
function App() {
  // bien gio hang
  const { cartItems } = useContext(CartContext);

  const { count, setCount } = useContext(CountContext);
  function add() {
    setCount(count + 1);
  }

  function watchCart() {
    console.log(cartItems);
  }
  function clear() {
    localStorage.clear();
  }
  return (
    <div className="App">
      <Header></Header>
      <button onClick={watchCart}> xem san pham cart</button>
      <button onClick={clear}>clear</button>

      <Routes>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/" element={<Home />}></Route>

        <Route path="/cellphone" element={<PageProductCellphone />}></Route>
        <Route path="/laptop" element={<PageProductLaptop />}></Route>

        <Route path="/register" element={<SignUp></SignUp>}></Route>
        <Route path="/product/:id" element={<Detail_Of_Product />} />

        <Route
          path="/order_lookup"
          element={<OrderLookup></OrderLookup>}
        ></Route>
      </Routes>

      <Link to={"/cart"}>
        <CartIcon count={count} />
      </Link>

      <Footer></Footer>
    </div>
  );
}

export default App;
