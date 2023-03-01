import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../../../../static/css/component/iconCart/style.css";
import React, { useContext } from "react";
import CountContext from "../../../counterCart/countContext";
function CartIcon(props) {
  const { count, setCount } = useContext(CountContext);
  return (
    <div className="cart-icon">
      <FontAwesomeIcon className="icon_cart" icon={faShoppingCart} />
      <span className="cart-count">{props.count}</span>
    </div>
  );
}

export default CartIcon;
