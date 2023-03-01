import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../../../../static/css/component/iconCart/style.css";
function CartIcon(props) {
  return (
    <div className="cart-icon">
      <FontAwesomeIcon className="icon_cart" icon={faShoppingCart} />
      <span className="cart-count">{props.count}</span>
    </div>
  );
}

export default CartIcon;
