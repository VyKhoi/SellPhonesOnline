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
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Home></Home>

      {/* <Login></Login> */}

      <CartIcon count={3} />
      <Footer></Footer>
    </div>
  );
}

export default App;
