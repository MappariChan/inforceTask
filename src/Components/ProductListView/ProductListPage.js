import React, { useState } from "react";
import ReactDOM from "react-dom";

import { useDispatch } from "react-redux";

import ProductList from "./ProductList";
import AddModal from "../Modal/AddModal";

const ProductListPage = () => {
  const [isAddForm, setIsAddForm] = useState(false);

  const productDispatcher = useDispatch();

  const addButtonHandler = () => {
    setIsAddForm(true);
    // productDispatcher({ type: "add", product: { name: input } });
  };

  return (
    <div>
      {isAddForm &&
        ReactDOM.createPortal(
          <AddModal
            productDispatcher={productDispatcher}
            onCloseModal={() => {
              setIsAddForm(false);
            }}
          ></AddModal>,
          document.getElementById("modal")
        )}
      <button onClick={addButtonHandler}>Add Product</button>
      <ProductList />
    </div>
  );
};

export default ProductListPage;
