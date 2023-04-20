import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";

import classes from "./ProductListItem.module.css";

import DeleteModal from "../Modal/DeleteModal";

const ProductListItem = (props) => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const productDispatcher = useDispatch();

  const deleteButtonHandler = () => {
    setIsDeleteModal(true);
    // productDispatcher({ type: "delete", id: props.product.id });
  };

  const listItemClickHandler = () => {
    productDispatcher({
      type: "change-view",
      view: "product-view",
      id: props.product.id,
    });
  };

  return (
    <li>
      {isDeleteModal &&
        ReactDOM.createPortal(
          <DeleteModal
            id={props.product.id}
            name={props.product.name}
            onCloseModal={() => {
              setIsDeleteModal(false);
            }}
            productDispatcher={productDispatcher}
          />,
          document.getElementById("modal")
        )}
      <div
        onClick={listItemClickHandler}
        style={{ backgroundImage: `url(${props.product.imageUrl})` }}
        className={classes.image}
      ></div>
      <span onClick={listItemClickHandler}>{props.product.name}</span>
      <button onClick={deleteButtonHandler}>Delete</button>
    </li>
  );
};

export default ProductListItem;
