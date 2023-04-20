import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";

import EditModal from "../Modal/EditModal";

import classes from "./ProductView.module.css";

import CommentView from "./CommentView/CommentView";

const ProductView = (props) => {
  const [isEditForm, setIsEditForm] = useState(false);
  const productDispatcher = useDispatch();

  const backButtonClickHandler = () => {
    productDispatcher({
      type: "change-view",
      view: "product-list-page",
      id: props.id,
    });
  };

  const editButtonClickHandler = () => {
    setIsEditForm(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        {isEditForm &&
          ReactDOM.createPortal(
            <EditModal
              {...props}
              productDispatcher={productDispatcher}
              onCloseModal={() => {
                setIsEditForm(false);
              }}
            />,
            document.getElementById("modal")
          )}
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${props.imageUrl})` }}
        ></div>
        <p>{props.name}</p>
        <p>{props.count}</p>
        <p>
          {props.size.width}x{props.size.height}
        </p>
        <p>{props.weight}</p>
        <div>
          <button onClick={editButtonClickHandler}>Edit</button>
          <button onClick={backButtonClickHandler}>Back</button>
        </div>
      </div>
      <CommentView />
    </div>
  );
};

export default ProductView;
