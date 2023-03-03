import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../../../../static/css/component/iconCart/style.css";
import React, { Fragment, useContext } from "react";
import CountContext from "../../../counterCart/countContext";

import { Routes, Route, Link } from "react-router-dom";
import Cart from "../../../../pages/cart";
function CartIcon(props) {
  const { count, setCount } = useContext(CountContext);
  return (
    // <Fragment>
    // <Link to="/cart">
    <div className="cart-icon">
      <FontAwesomeIcon className="icon_cart" icon={faShoppingCart} />
      <span className="cart-count">{props.count}</span>
    </div>
    // </Link>

    //   <Routes>
    //     <Route path="/cart" element={<Cart></Cart>}></Route>
    //   </Routes>
    // </Fragment>
  );
}

export default CartIcon;
