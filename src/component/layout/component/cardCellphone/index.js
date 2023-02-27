import React, { useRef } from "react";
import "../../../../static/css/component/cellPhoneCard/style.css";

function CellPhoneCard(product) {
  const click = useRef(null);

  function Clicked() {
    click.current.classList.add("clicked");
  }

  function UnClicked() {
    click.current.classList.remove("clicked");
  }

  return (
    <div className="wrapper cellPhoneCard">
      <div className="container">
        <div className="top"></div>
        <div className="bottom" ref={click}>
          <div className="left">
            <div className="details">
              <h1>Chair</h1>
              <p>£250</p>
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
              <h1>Chair</h1>
              <p>Added to your cart</p>
            </div>
            <div className="remove" onClick={UnClicked}>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i className="material-icons">info_outline</i>
        </div>
        <div className="contents">
          <table>
            <tr>
              <th>Width</th>
              <th>Height</th>
            </tr>
            <tr>
              <td>3000mm</td>
              <td>4000mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CellPhoneCard;
