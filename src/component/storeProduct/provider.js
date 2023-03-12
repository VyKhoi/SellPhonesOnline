import { useState } from "react";
import ProductContext from "./storeProduct";
function ProductProvider(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
