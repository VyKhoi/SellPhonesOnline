import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.min.js";
import CountProvider from "./component/counterCart/provider";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./component/storeProduct/provider";
import { CartProvider } from "./component/cart/CartContext";
import { BranchProvider } from "./component/branchSelect/BranchContext";
import { TypeOfProductProvider } from "./component/typeOfProduct/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BranchProvider>
        <TypeOfProductProvider>
          <CartProvider>
            <CountProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </CountProvider>
          </CartProvider>
        </TypeOfProductProvider>
      </BranchProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
