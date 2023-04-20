import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import CommentList from "./CommentList";

const CommentView = () => {
  const [comment, setComment] = useState("");

  const store = useSelector((store) => ({
    id: store.id,
    products: store.products,
  }));

  const commentDispatcher = useDispatch();

  const inputCommentChangeHanler = (event) => {
    setComment(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    commentDispatcher({
      type: "add-comment",
      id: store.id,
      comment: {
        id: Math.random(),
        productId: store.id,
        description: comment,
        date: new Date(),
      },
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={formSubmitHandler}>
        <input value={comment} onChange={inputCommentChangeHanler}></input>
        <button type="submit">Comment</button>
      </form>
      <CommentList
        comments={
          store.products.filter((product) => (product.id = store.id))[0]
            .comments
        }
      />
    </React.Fragment>
  );
};

export default CommentView;
