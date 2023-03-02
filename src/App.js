import Header from "./component/layout/component/header";
import HeaderType from "./component/layout/component/headerType";
import HomeBody from "./component/layout/component/homeBody";

import Footer from "./component/layout/component/footer";
import CellPhoneCard from "./component/layout/component/cardCellphone";

import Home from "./pages/home";
import LogCellPhoneCard from "./component/layout/component/logCellPhoneCard";

import LaptopCard from "./component/layout/component/cardLaptop";

import LogLaptopCard from "./component/layout/component/logLaptopCard";
import CartIcon from "./component/layout/component/iconCart";

import Login from "./pages/login";

import React, { useContext } from "react";
import CountContext from "./component/counterCart/countContext";

import Test from "./component/layout/phongthinghiem";

import Cart from "./pages/cart";

import Detail_Of_Product from "./pages/detailOfProduct";


import SignUp from "./pages/signUp";
import OrderLookup from "./pages/orderLookup";

function App() {
  const { count, setCount } = useContext(CountContext);
  function add() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Header></Header>
      {/* <Test></Test>

      <Home></Home> */}


      {/* <Login></Login> */}

      {/* <CartIcon count={count} />
      <button onClick={add}>oke</button> */}
      {/* <Cart></Cart> */}
      <Detail_Of_Product></Detail_Of_Product>

      <CartIcon count={count} />
      <button onClick={add}>oke</button>

      <OrderLookup></OrderLookup>

      <Footer></Footer>
    </div>
  );
}

export default App;
