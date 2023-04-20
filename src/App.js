import React from "react";
import { useSelector } from "react-redux";

import ProductListPage from "./Components/ProductListView/ProductListPage";
import ProductView from "./Components/ProductView/ProductView";

function App() {
  const store = useSelector((store) => store);
  return (
    <React.Fragment>
      {store.view == "product-list-page" && <ProductListPage />}
      {store.view == "product-view" && (
        <ProductView
          {...store.products.filter((product) => product.id == store.id)[0]}
        />
      )}
    </React.Fragment>
  );
}

export default App;
